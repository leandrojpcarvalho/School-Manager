import { APIFetch, APISubjectInfo, DeleteData, PostData, SubjectInfo } from "../types";

const URL = 'http://localhost:3333/result/1';


export default function useAPIConnection() {
  const getAllData = async() => {
    try {
      const res = await fetch(URL);
      const rawData:APIFetch = await res.json();
      return rawData;
    } catch (err) {
      console.log(err);
    }
  }

  const deleteData = ({bimestre, disciplina}: SubjectInfo) : DeleteData => ({ bimestre, disciplina });
  const postData = ({bimestre, disciplina, nota}: SubjectInfo) : PostData => ({ bimestre, disciplina, nota });

  const dataModel = {
    DELETE: deleteData,
    POST: postData,
    PUT: postData,
  };

  const requestAPI = async(obj: SubjectInfo, method: keyof typeof dataModel ) => {
    const request = new Request(URL, { method, body: JSON.stringify(dataModel[method](obj)), headers: { 'Content-Type': 'application/json' }})
    try {
      const res = await fetch(request)
      if (!res.ok) {
        const errorMessage = await res.json();
        return errorMessage;
      } else if (method !== 'DELETE' && res.ok) {
        const info: APISubjectInfo = await res.json();
        return info;
      }
    } catch (error) {
      console.log(error);
    } 
  }

  const commitChanges = async (changes: SubjectInfo[]) => {
    try {
      const arrayData: APISubjectInfo[]= await Promise.all(
        changes.map((change) => requestAPI(change, 'POST'))
      );
      const hasInvalidData = arrayData.find((subject) =>
        Object.prototype.hasOwnProperty.call(subject, 'message')
      );
      if (hasInvalidData) throw new Error(JSON.stringify(hasInvalidData));
      return arrayData;
    } catch (error) {
      console.log(error);
    } 
  };

  return { requestAPI, getAllData, commitChanges }
}