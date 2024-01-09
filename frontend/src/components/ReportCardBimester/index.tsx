import useManagerBimester from '../../hooks/ManegerBimester';
import { APIFetch } from '../../types';
import ElementSubject from './ElementSubject';
import './style.css';
import { PCustom, Button } from '../../styledComponents';
import images from '../../assets';
import useModal from '../../hooks/Modal';
import AddNewGrade from '../AddNewGrade';
import { BIMESTER_MAP } from '../../utils';

type PropType = {
  cards: APIFetch;
  bimestre: number;
};

export default function ReportCardBimester({ cards, bimestre }: PropType) {
  const { subjects, removeCard, setNewStateData } = useManagerBimester(cards);
  const { setShow, setShowModal, setTempSubject, show, tempSubjects } =
    useModal(setNewStateData);

  const generateBimesterBoard = () => {
    return subjects.map((card) => (
      <ElementSubject
        key={`${card.bimestre}-${card.disciplina}`}
        subjectInfo={card}
        onClick={removeCard}
      />
    ));
  };
  
  const JSXModal = () => {
    console.log(tempSubjects, bimestre);
    if (show) {
      return (
        <div className="modal">
          <AddNewGrade
            bimestre={BIMESTER_MAP[bimestre-1]}
            info={tempSubjects}
            setIsShowingModal={setShow}
            setTempSubject={setTempSubject}
          />
        </div>
      );
    }
  };

  return (
    <>
      {show ? JSXModal() : ''}
      <div className="bimester-info flex">
        <PCustom $size={18}>{`Bimestre ${bimestre}`}</PCustom>
        <Button
          $image={images.add}
          aria-hidden={false}
          onClick={() => setShowModal(subjects, bimestre)}
        />
      </div>
      <div className="bimester flex">{generateBimesterBoard()}</div>
    </>
  );
}
