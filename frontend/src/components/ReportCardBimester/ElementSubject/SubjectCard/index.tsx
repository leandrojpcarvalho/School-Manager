import { PCustom, Wrapper } from '../../../../styledComponents';
import images from '../../../../assets';
import { SubjectInfo } from '../../../../types';

type PropType = {
  info: SubjectInfo;
  notAllInfo?: boolean;
}

function SubjectCard({ info, notAllInfo}: PropType) {
  const { disciplina, creadaEm, nota } = info;
  const showAllInfo = () => notAllInfo ? 'none' : ''
  return (
    <Wrapper $disciplina={disciplina}>
      <div className="header flex column">
        <PCustom
          $size={18}
          $weight={500}>
          {disciplina}
        </PCustom>
        <PCustom className={showAllInfo()}>{creadaEm}</PCustom>
      </div>
      <div className={`footer flex ${showAllInfo()}`}>
        <img
          src={images.grade}
          alt="graphic of grades"
        />
        <PCustom $color="#FF5964">Nota: {nota}</PCustom>
      </div>
    </Wrapper>
  );
}

export default SubjectCard;
