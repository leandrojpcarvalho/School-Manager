import { useEffect, useState } from "react";
import { APIFetch, SubjectInfo } from "../types";
import { Bimestre } from "../../shared/enums";
import useAPIConnection from "./APIConnection";
import { BIMESTER_MAP, SUBJECTS, createNewSubject } from "../utils";


export default function useModal (setData: (param: APIFetch) => void) {
  const [tempSubjects, setTempSubject] = useState<SubjectInfo[]>([]);
  const [show, setShow] = useState(false);
  const { commitChanges } = useAPIConnection();

  useEffect(() => {
      const newData = tempSubjects.filter(({isUpdated}) => isUpdated);
      if(show === false && newData.length > 0) {
        commitChanges(newData).then((data) => {
          if(data) {
            setData(data);
            setTempSubject([]);
          }
        });
      }
  } ,[show])

  const setShowModal = (obj: SubjectInfo[], bimestre: number) => {
    setTempSubject(tempDate(obj, bimestre));
    setShow(true);
  }

  const tempDate = (state: SubjectInfo[], bimestre: Bimestre) => {
    return SUBJECTS.map((subject) => {
      const existentSubject = state.find(({disciplina}) => disciplina === subject)
      if(existentSubject) {
        return  existentSubject;
      } 
      return createNewSubject(subject, BIMESTER_MAP[bimestre]);
    });
  };

  return {tempSubjects, show, setTempSubject, setShowModal, setShow};
}