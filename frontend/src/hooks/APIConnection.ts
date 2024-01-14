import RequestFactory from '../classes/RequestFactory';
import { APIFetch, APISubjectInfo, Method, SubjectInfo } from '../types';

const URL = import.meta.env.VITE_BASE_URL;
const ROUTE_PUT = import.meta.env.VITE_ROUTE_PUT || false;

export default function useAPIConnection() {
  const getAllData = async () => {
    try {
      const res = await fetch(URL.concat('/result/1'));
      const rawData: APIFetch = await res.json();
      return rawData;
    } catch (err) {
      console.log(err);
    }
  };

  const requestFactory = new RequestFactory(URL.concat('/result/1'));

  const requestAPI = async (
    obj: SubjectInfo | SubjectInfo[],
    method: Method
  ) => {
    try {
      const request = requestFactory.newRequest(method, obj);
      const res = await fetch(request);
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
  };

  const canUsePut = () => {
    if(ROUTE_PUT) {
      return false;
    } 
    return true;
  }

  const defineRoute = (changes: SubjectInfo[]) => {
    if (canUsePut()) {
      return requestAPI(changes, 'PUT');
    }
    return Promise.all(changes.map((change) => requestAPI(change, 'POST')));
  };

  const commitChanges = async (changes: SubjectInfo[]) => {
    try {
      const arrayData: APISubjectInfo[] = await defineRoute(changes);
      const hasInvalidData = arrayData.find((subject) =>
        Object.prototype.hasOwnProperty.call(subject, 'message')
      );
      if (hasInvalidData) throw new Error(JSON.stringify(hasInvalidData));
      return arrayData;
    } catch (error) {
      console.log(error);
    }
  };

  return { requestAPI, getAllData, commitChanges };
}
