import { useEffect, useState } from 'react';
import { APIFetch, APISubjectInfo, BimesterBoard, DeleteData, PostData, SubjectInfo } from './types';
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

const URL = 'http://localhost:3333/result/1'

function App() {
  const [data, setData] = useState<BimesterBoard>({});
  // const [isLoading, setIsLoading] = useState(false);
  // const [modal, setModal] = useState<JSX.Element>();
  const [selectedBimester, setSelectedBimester] = useState<Bimestre>(1);
  const [show, setShow] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async() => {
    try {
      const res = await fetch(URL);
      const rawData:APIFetch = await res.json();
      setData(treatmentData(rawData));
    } catch (err) {
      console.log(err);
    }
  }

  const deleteData = ({bimestre, disciplina}: SubjectInfo) : DeleteData => ({ bimestre, disciplina });
  const postData = ({bimestre, disciplina, nota}: SubjectInfo) : PostData => ({ bimestre, disciplina, nota });

  const dataModel = {
    DELETE: deleteData,
    POST: postData,
    PUT: postData,
  };

  const requestAPI = async(obj: SubjectInfo, method: keyof typeof dataModel ) => {
    const request = new Request(URL, { method, body: JSON.stringify(dataModel[method](obj)), headers: { 'Content-Type': 'application/json' }})
    try {
      const res = await fetch(request)
      if (method !== 'DELETE') {
        const info: APISubjectInfo = await res.json();
        const key = Bimestre[info.bimestre]
        const newData = data[key].filter((subject) => subject.disciplina !== info.disciplina);
        newData.push(transformData(info));
        setData({ ...data, [key]: newData })
      }
    } catch (error) {
      console.log(error);
    }
  }

  const treatmentData = (arrData: APIFetch) => {
    return arrData.reduce((acc, currData) => {
      const key = Bimestre[currData.bimestre]
      const newData = transformData(currData);
      return { ...acc, [key]: [...acc[key], newData]}
    }, INITIAL_STATE);
  };

  const transformData = (obj: APISubjectInfo): SubjectInfo => {
    const { createdAt, updatedAt, ...rest } = obj;
    return {
        creadaEm: dateFormatter(createdAt),
        ...rest,
      };
  }

  const dateFormatter = (dateSql: string) => {
    return dateSql.split('T')[0].split('-').reverse().join('/');
  };

  const removeCard = async (obj: SubjectInfo) => {
    await requestAPI(obj, 'DELETE');
    const key = Bimestre[obj.bimestre];
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
