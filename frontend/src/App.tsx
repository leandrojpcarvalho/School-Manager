import { useEffect, useState } from 'react';
import { APIFetch, BimesterBoard, SubjectInfo } from './types';
import images from './assets';
import { Bimestre } from '../shared/enums';
import ReportCardBimester from './components/ReportCardBimester';
import { Button, PCustom } from './styledComponents';
import './app.css';
import AddNewGrade from './components/AddNewGrade';

const INITIAL_STATE: BimesterBoard = {
  1: [],
  2: [],
  3: [],
  4: [],
}

function App() {
  const [data, setData] = useState<BimesterBoard>({});
  // const [isLoading, setIsLoading] = useState(true);
  // const [modal, setModal] = useState<JSX.Element>();
  const [selectedBimester, setSelectedBimester] = useState<Bimestre>(1);
  const [show, setShow] = useState(false);

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

  const getModal = (bimester: number) => {
    setShow(true);
    setSelectedBimester(bimester);
  }

  const generateBoard = () => {
    return Object.entries(data).map(([bimester, data]) => {
      return (
        <div className='board flex column' key={bimester}>
          <div className='bimester-info flex'>
            <PCustom $size={18}>{`Bimestre ${bimester}`}</PCustom>
            <Button $image={images.add} aria-hidden onClick={() => getModal(Number(bimester)) }/>
          </div>
          <ReportCardBimester cards={data} bimester={Number(bimester)} removeCard={removeCard}/>
        </div>
      )
    });
  }

  return (
    <>
      {/* {show ? modal : ''} */}
      {show ? <AddNewGrade info={data[selectedBimester]} bimester={selectedBimester} setIsShowingModal={setShow}/> : ''}
      <div className="page">
            {generateBoard() }
      </div>
    </>
  );
}

export default App;
