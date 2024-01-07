import { Button, Input, PCustom } from '../../styledComponents';
import { SubjectInfo } from '../../types';
import images from '../../assets';
import SubjectCard from '../ReportCardBimester/ElementSubject/SubjectCard';
import './style.css'
import { useState } from 'react';

type PropType = {
  info: SubjectInfo[];
  bimester: number;
  setIsShowingModal: (param: boolean) => void;
};

const SUBJECTS = ['Biologia', 'Artes', 'Geografia', 'Sociologia']

export default function AddNewGrade({ info, bimester, setIsShowingModal }: PropType) {
  const [selected, setSelected] = useState<SubjectInfo>();
  return (
    <div className="screen">
      <div className="modal-wrapper">
        <div className="subjects flex column">
          <section className="header flex">
            <PCustom
              $size={32}
              $weight={500}>
              {`Bimestre ${bimester}`}
            </PCustom>
            <Button $image={images.close} $padding='16px' $color='e9ff1a00' aria-hidden onClick={() => setIsShowingModal(false)}/>
          </section>
          <section className="wrapper-subjects flex column">
            <>
              <PCustom>Disciplina</PCustom>
              <div className="subjects flex">
                {SUBJECTS.map((subject) => { 
                  const subjectInfo = info.find((sub) => sub.disciplina === subject);
                  if (subjectInfo){
                    return(
                    <div aria-hidden className="subjects flex" onClick={() => setSelected(subjectInfo)}>
                      <SubjectCard
                      info={subjectInfo}
                      key={subject}
                      notAllInfo={true}
                      modal={{isSelected: selected === subjectInfo }}
                      />
                    </div>
                    )}
                  })
                }
              </div>
            </>
          </section>
          <section className="grade flex column">
            <PCustom $size={14}>Nota</PCustom>
            <Input type="number" name="grade" value={selected ? selected.nota : 0} />
          </section>
        </div>
        <Button $padding='16px 25px' $image=''><PCustom $color='0F0F0F' $weight={600}>Confirmar</PCustom></Button>
      </div>
    </div>
  );
}
