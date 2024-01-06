import { useState } from 'react';
import { SubjectInfo } from '../../types';
import ElementSubject from './ElementSubject';
import './style.css';
import AddNewGrade from '../AddNewGrade';

type PropType = {
  cards: SubjectInfo[];
  bimester: number;
  removeCard: (obj: SubjectInfo) => void
};

export default function ReportCardBimester({cards, bimester, removeCard}: PropType) {
  const [isShowingModal, setIsShowingModal] =useState(false);

  const showModal = () => isShowingModal ? <AddNewGrade info={cards} bimester={bimester}/>: '';
  
  const generateBoard = () => {
    return (
      <>
        {
          cards.map((card) => (
            <ElementSubject
            key={card.disciplina}
            subjectInfo={card}
            onClick={removeCard}
          />))
        }
        {
          showModal()
        }
      </>
    );
  };
  return <div className="bimester flex">{generateBoard()}</div>;
}
