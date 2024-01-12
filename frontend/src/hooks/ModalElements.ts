import { useState, useEffect } from "react";
import { SubjectInfo } from "../types";

export default function useModalElements(setTempSubject: (param: SubjectInfo[]) => void, info: SubjectInfo[]) {
  const [selected, setSelected] = useState<SubjectInfo>();
  const [nota, setNota] = useState<string>('0.0');
  const [error, setError] = useState<string>();

  useEffect(() => {
    if (selected) {
      setNota(selected.nota.toFixed(1));
      setError(undefined);
    } else {
      setNota('0.0');
    }
  }, [selected]);

  const rangeGradeValidation = (grade: string | undefined) => {
    const value = Number(grade);
    return value >= 0 && value <= 10;
  };

  const onClick = () => {
    if (selected && rangeGradeValidation(nota)) {
      const updatedInfo = info[info.indexOf(selected)];
      updatedInfo.nota = Number(nota),
      updatedInfo.isUpdated = true;
      setTempSubject(info);
      setError(undefined);
    } else {
      setError('A nota deve ser um numero entre 0 e 10');
    }
  };

  return { nota, error, selected, onClick,setSelected, setNota }
}