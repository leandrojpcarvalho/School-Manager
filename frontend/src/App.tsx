import { useEffect, useState } from 'react';
import { APIFetch, BimesterBoard, SubjectInfo } from './types';
import { Bimestre } from '../shared/enums';
import ReportCardBimester from './components/ReportCardBimester';
import { PCustom } from './styledComponents';
import './app.css';

const INITIAL_STATE: BimesterBoard = {
  1: [],
  2: [],
  3: [],
  4: [],
}

function App() {
  const [data, setData] = useState<BimesterBoard>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async() => {
    try {
      const res = await fetch('http://localhost:3333/result/1');
      const rawData:APIFetch = await res.json();
      setData(treatmentData(rawData));
    } catch (err) {
      console.log(err);
    }
  }

  const treatmentData = (arrData: APIFetch) => {
    return arrData.reduce((acc, currData) => {
    const { bimestre, createdAt, updatedAt, ...rest } = currData;
    const key = Bimestre[bimestre]
    const newData: SubjectInfo = {
        bimestre: Bimestre[bimestre],
        creadaEm: dateFormatter(createdAt),
        ...rest,
      };
      return { ...acc, [key]: [...acc[key], newData]}
    }, INITIAL_STATE);
  };

  const dateFormatter = (dateSql: string) => {
    return dateSql.split('T')[0].split('-').reverse().join('/');
  };

  const removeCard = (obj: SubjectInfo) => {
    const key = obj.bimestre;
    const newBoard = data[key].filter((subject) => subject !== obj);
    setData({...data, [key]: newBoard});
  }

  const generateBoard = () => {
    return Object.entries(data).map(([bimester, data]) => {
      return (
        <div className='board flex column' key={bimester}>
          <PCustom $size={18}>{`Bimestre ${bimester}`}</PCustom>
          <ReportCardBimester cards={data} removeCard={removeCard}/>
        </div>
      )
    });
  }

  return (
    <div className="page">
      {generateBoard()}
    </div>
  );
}

export default App;
