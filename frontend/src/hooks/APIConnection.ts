import RequestFactory from "../classes/RequestFactory";
import { APIFetch, APISubjectInfo, Method, SubjectInfo } from "../types";

const URL = 'http://localhost:3333/result/1';
const ROUTE_PUT = import.meta.env.ROUTE_PUT ?? true;

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

  const requestFactory = new RequestFactory(URL);
  
  const requestAPI = async(obj: SubjectInfo | SubjectInfo[], method: Method) => {
    try {
      const request = requestFactory.newRequest(method, obj);
      console.log(request);
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

  const defineRoute = (changes: SubjectInfo[]) => {
    if (!ROUTE_PUT) {
      return Promise.all(
        changes.map((change) => {
          if(change.method && change.method !== 'PUT') {
            return requestAPI(change, change.method )
          }
        })
      )
    }
    return requestAPI(changes, 'PUT')
  }


  const commitChanges = async (changes: SubjectInfo[]) => {
    try {
      const arrayData: APISubjectInfo[]= await defineRoute(changes);
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