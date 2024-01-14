import { SubjectInfo, DeleteData, PostData, Method } from "../types";

export default class RequestFactory {
  #URL: string;

  constructor(URL: string) {
    this.#URL = URL;
  }

  newRequest(method: Method, data: SubjectInfo | SubjectInfo[]) {
    let request: Request
    const fommatter = this.#getFormatter(method);
    if(Array.isArray(data)){
      const body = JSON.stringify(data.map((subject) => fommatter(subject)));
      request = new Request(this.#URL, { method, body, headers: { 'Content-Type': 'application/json' }})
    } else {
      const body = JSON.stringify(fommatter(data))
      request = new Request(this.#URL, {method, body, headers: { 'Content-Type': 'application/json' }})
    }
    return request;
  }

  #getFormatter(method: Method) {
    switch (method){
      case 'DELETE':
        return this.#deleteFormatter;
      case 'POST':
      case 'PUT': 
        return this.#postFormatter;
      default: 
        throw new Error('this Method is not implemented')
    }
  }

  #deleteFormatter({bimestre, disciplina}: SubjectInfo): DeleteData {
    return ({ bimestre, disciplina });
  }

  #postFormatter({bimestre, disciplina, nota}: SubjectInfo): PostData{
    return ({bimestre, disciplina, nota})
  }
}
