import SubjectCard from '../SubjectCard';
import images from '../../assets';

type PropType = {
  onClick: (obj: any) => void;
  subjectInfo: {
    bimester: number;
    subject: string;
    date: string;
    grade: number;
  };
};

export default function ElementSubject(obj: PropType) {
  const {
    onClick,
    subjectInfo: { bimester, ...rest },
  } = obj;
  return (
    <div className="wrapper-content">
      <SubjectCard {...rest} />
      <img
        src={images.trash}
        alt={`remover nota da disciplina: ${rest.subject} do ${bimester}º bimestre`}
        aria-hidden
        onClick={onClick}
      />
    </div>
  );
}
