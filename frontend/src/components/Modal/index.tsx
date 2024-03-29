import { Bimestre } from '../../enums';
import { PCustom, Button, Input } from '../../styledComponents';
import { SubjectInfo } from '../../types';
import images from '../../assets';
import AddNewGrade from '../AddNewGrade';
import useModalElements from '../../hooks/ModalElements';

type PropType = {
  info: SubjectInfo[];
  bimestre: keyof typeof Bimestre;
  setIsShowingModal: (param: boolean) => void;
  setTempSubject: (obj: SubjectInfo[]) => void;
};

export default function Modal({
  info,
  bimestre,
  setIsShowingModal,
  setTempSubject,
}: PropType) {
  const { nota, error, selected, added, onClick, setSelected, setNota } =
    useModalElements(setTempSubject, info);

  const setClass = () => {
    if (error) {
      return 'error';
    }
    if (added) {
      return 'fade-in';
    } else {
      return 'fade-out';
    }
  };

  const JSXError = () => {
    if (error) {
      return (
        <PCustom
          $color="#ff0000"
          $size={14}
          $weight={600}>{`* ${error}`}</PCustom>
      );
    }
    return '';
  };

  const JSXSubjects = () => {
    return (
      <>
        <PCustom
          $size={18}
          $weight={500}>
          Disciplina
        </PCustom>
        <div className="subjects-info">
          {info.map((subject) => (
            <AddNewGrade
              info={subject}
              key={`${bimestre}-${subject.disciplina}`}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </div>
      </>
    );
  };

  const JSXHeader = () => {
    return (
      <>
        <PCustom
          $size={32}
          className="modal"
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
      </>
    );
  };

  const JSXGrade = () => {
    return (
      <>
        <PCustom $size={14}>Nota</PCustom>
        <Input
          type="text"
          value={nota}
          name="grade"
          className={setClass()}
          onChange={(e) => setNota(e.target.value)}
        />
      </>
    );
  };

  const JSXButton = () => {
    return (
      <Button
        className="grow"
        $padding="16px 25px"
        onClick={onClick}
        aria-hidden
        $image="">
        <PCustom
          $color="0F0F0F"
          className={setClass()}
          $weight={600}>
          {added ? 'data has been Updated' : 'Confirmar'}
        </PCustom>
      </Button>
    );
  };

  return (
    <div className="screen">
      <div className="modal-wrapper">
        <div className="subjects flex column">
          <section className="header flex">{JSXHeader()}</section>
          <section className="wrapper-subjects flex column">
            {JSXSubjects()}
          </section>
          <section className="grade-wrapper flex">
            <div className="grade flex column">{JSXGrade()}</div>
            <div>{JSXError()}</div>
          </section>
        </div>
        <div className="button">{JSXButton()}</div>
      </div>
    </div>
  );
}
