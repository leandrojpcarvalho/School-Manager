import SubjectCard from '../ElementSubject/SubjectCard';
import images from '../../../assets';
import { SubjectInfo } from '../../../types';

type PropType = {
  onClick: (obj: SubjectInfo) => void;
  subjectInfo: SubjectInfo;
};

export default function ElementSubject(obj: PropType) {
  const { onClick, subjectInfo } = obj;
  return (
    <div className="wrapper-container flex">
      <SubjectCard {...subjectInfo} />
      <img
        src={images.trash}
        alt={`remover nota da disciplina: ${subjectInfo.disciplina} do ${subjectInfo.bimestre}º bimestre`}
        aria-hidden
        onClick={() => onClick(subjectInfo)}
      />
    </div>
  );
}
