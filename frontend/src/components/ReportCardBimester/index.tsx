import { SubjectInfo } from '../../types';
import ElementSubject from './ElementSubject';

type PropType = {
  cards: SubjectInfo[];
  removeCard: (obj: SubjectInfo) => void
};

export default function ReportCardBimester({cards, removeCard}: PropType) {
  const generateBoard = () => {
    return cards.map((card) => (
      <ElementSubject
        key={card.disciplina}
        subjectInfo={card}
        onClick={removeCard}
      />
    ));
  };
  return <div className="bimester">{generateBoard()}</div>;
}
