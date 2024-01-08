import React, { HTMLInputTypeAttribute, useEffect, useState } from 'react';
import { Button, Input, PCustom } from '../../styledComponents';
import { SubjectInfo } from '../../types';
import images from '../../assets';
import SubjectCard from '../ReportCardBimester/ElementSubject/SubjectCard';
import { Disciplina, Bimestre } from '../../../shared/enums';
import './style.css';
import { number } from 'joi';

type PropType = {
  info: SubjectInfo[];
  bimestre: keyof typeof Bimestre;
  setIsShowingModal: (param: boolean) => void;
  setTempSubject: (obj: SubjectInfo) => void;
};

const SUBJECTS: (keyof typeof Disciplina)[] = [
  'Biologia',
  'Artes',
  'Geografia',
  'Sociologia',
];

const INITIAL_STATE_SUBJECT = {
  bimestre: '',
  creadaEm: '',
  disciplina: '',
  nota: 0,
  studentId: '',
}

export default function AddNewGrade({
  info,
  bimestre,
  setIsShowingModal,
  setTempSubject,
}: PropType) {
  const [selected, setSelected] = useState<SubjectInfo>();
  const [nota, setNota] = useState<string>('0.0');
  const [error, setError] = useState<string>();

  useEffect(() => {
    if(selected) {
      setNota(selected.nota.toFixed(1))
      setError(undefined);
    } else {
      setNota('0.0');
    }
  }, [selected])

  const JSXSubject = (obj: SubjectInfo) => {
    return (
      <div
        aria-hidden
        className="subjects flex"
        key={`bimester-${obj.disciplina}`}
        onClick={() => setSelected(obj)}>
        <SubjectCard
          info={obj}
          key={obj.disciplina}
          notAllInfo={true}
          modal={{ isSelected: selected === obj }}
        />
      </div>
    );
  };

  const createNewSubject = (disciplina: keyof typeof Disciplina) => {
    const newDate = {
      bimestre,
      creadaEm: new Date().toLocaleDateString('pt-br'),
      disciplina,
      nota: 0,
      studentId: 'student',
      isUpdated: false,
    };
    setTempSubject(newDate);
    return newDate;
  }

  const rangeGradeValidation = (grade: string | undefined) => {
    const value = Number(grade);
    return value >= 0 && value <= 10;
  }

  const onClick = () => {
    if(selected && rangeGradeValidation(nota)) {
      setTempSubject({ ...selected, nota: Number(nota), isUpdated: true })
      setError(undefined);
    } else {
      setError('A nota deve ser um numero entre 0 e 10');
    }
  }

  const JSXError = () => {
    if (error) {
      return <PCustom $color='#ff0000' $size={14} $weight={600}>{`* ${error}`}</PCustom>
    }
    return '';
  }

  return (
    <div className="screen">
      <div className="modal-wrapper">
        <div className="subjects flex column">
          <section className="header flex">
            <PCustom
              $size={32}
              $weight={500}>
              {`Bimestre ${Bimestre[bimestre]}`}
            </PCustom>
            <Button
              $image={images.close}
              $padding="16px"
              $color="e9ff1a00"
              aria-hidden
              onClick={() => setIsShowingModal(false)}
            />
          </section>
          <section className="wrapper-subjects flex column">
            <>
              <PCustom>Disciplina</PCustom>
              <div className="subjects flex">
                {SUBJECTS.map((subject) => {
                  const subjectInfo = info.find(
                    (sub) => sub.disciplina === subject
                  );
                  if (subjectInfo) {
                    return JSXSubject(subjectInfo);
                  }
                  return JSXSubject(createNewSubject(subject));
                })}
              </div>
            </>
          </section>
          <section className="grade flex column">
            <PCustom $size={14}>Nota</PCustom>
            <div className='flex'>
              <Input
                type="text"
                value={nota}
                name="grade"
                onChange={(e) => setNota(e.target.value) }
              />
              {JSXError()}
            </div>
            
          </section>
        </div>
        <Button
          $padding="16px 25px"
          $image="">
          <PCustom
            $color="0F0F0F"
            $weight={600}
            onClick={onClick}
          >
            Confirmar
          </PCustom>
        </Button>
      </div>
    </div>
  );
}
