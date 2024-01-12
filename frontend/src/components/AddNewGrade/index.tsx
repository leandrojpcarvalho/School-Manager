import { SubjectInfo } from '../../types';
import SubjectCard from '../ReportCardBimester/ElementSubject/SubjectCard';
import './style.css';

type PropType = {
  info: SubjectInfo;
  selected?: SubjectInfo;
  setSelected: (param: SubjectInfo) => void;
};

export default function AddNewGrade({ selected, info, setSelected }: PropType) {
  return (
    <div
      aria-hidden
      className="subjects-details flex"
      key={`bimester-${info.disciplina}`}
      onClick={() => setSelected(info)}>
      <SubjectCard
        info={info}
        key={info.disciplina}
        notAllInfo={true}
        modal={{ isSelected: selected === info }}
      />
    </div>
  );
}
