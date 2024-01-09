import { useEffect, useState } from "react";
import { APIFetch, APISubjectInfo, SubjectInfo } from "../types";
import { transformData } from "../utils";
import useAPIConnection from "./APIConnection";


export default function useManagerBimester(state: APIFetch) {
  const [subjects, setSubjects] = useState<SubjectInfo[]>([]);
  const { requestAPI } = useAPIConnection();

  useEffect(() => {
    setNewStateData(state);
  }, [])


  const setNewStateData = (info: APISubjectInfo | APIFetch) => {
      let newData: SubjectInfo[];
      if (!Array.isArray(info)) {
        newData = subjects.filter(
          (subject) => subject.disciplina !== info.disciplina
        );
        newData = [...newData, transformData(info) ]
      } else {
        newData = info.reduce((acc, currSubject) => {
          if(!acc.find((subject) => subject.disciplina === currSubject.disciplina)) {
            return [...acc, transformData(currSubject) ];
          }
          return acc;
        }, subjects);
      }
      setSubjects(newData);
    };
  
    const removeCard = async (obj: SubjectInfo) => {
      try {
        await requestAPI(obj, 'DELETE');
        const newBoard = subjects.filter((subject) => subject !== obj);
        setSubjects(newBoard);
      } catch (error) {
        console.log(error);
      }
    };
  
    return { subjects, setSubjects, setNewStateData, removeCard}
}
