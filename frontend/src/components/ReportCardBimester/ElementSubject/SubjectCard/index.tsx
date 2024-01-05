import { PCustom } from "../../styledComponents";
import images from '../../assets';
import './style.css';

type PropType = {
  subject: string;
  date: string;
  grade: number;
}

function SubjectCard({subject, date, grade}: PropType) {
  return (
    <div className="wrapper flex column">
      <div className="header flex column">
        <PCustom $size={18} $weight={500}>{subject}</PCustom>
        <PCustom>{date}</PCustom>
      </div>
      <div className="footer flex">
        <img src={images.grade} alt="graphic of grades" />
        <PCustom $color="#FF5964">Nota: {grade}</PCustom>
      </div>
    </div>
  );
}

export default SubjectCard;