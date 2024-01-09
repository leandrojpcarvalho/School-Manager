import { useEffect, useState } from 'react';
import { BimesterBoard } from './types';
import ReportCardBimester from './components/ReportCardBimester';
import './app.css';
import useAPIConnection from './hooks/APIConnection';
import { treatmentData } from './utils';


function App() {
  const [data, setData] = useState<BimesterBoard>({});
  const { getAllData } = useAPIConnection();

  useEffect(() => {
    getAllData().then((res) => {
      if (res) {
        setData(treatmentData(res));
      }
    });
  }, []);

  const generateBoard = () => {
    return Object.entries(data).map(([bimester, subjects]) => {
      return (
        <div className="board flex column" key={bimester}>
          <ReportCardBimester
            cards={subjects}
            bimestre={Number(bimester)}
          />
        </div>
      );
    });
  };
  return (
    <div className="page">{generateBoard()}</div>
  );
}

export default App;
