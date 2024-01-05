import { PCustom, Wrapper } from '../../../../styledComponents';
import images from '../../../../assets';
import './style.css';
import { SubjectInfo } from '../../../../types';

function SubjectCard({ disciplina, creadaEm, nota }: SubjectInfo) {
  return (
    <Wrapper $disciplina={disciplina}>
      <div className="header flex column">
        <PCustom
          $size={18}
          $weight={500}>
          {disciplina}
        </PCustom>
        <PCustom>{creadaEm}</PCustom>
      </div>
      <div className="footer flex">
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
