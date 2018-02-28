import delay from './delay'; // For testing async call. Set to 0 on prod.
import { BaseUrl } from '../app.settings';
import axios, { AxiosResponse } from 'axios';
import { CaneChairModel } from '../types/modelTypes/CaneChairModel';

let httpRequest = axios.create({
  baseURL: BaseUrl,
  timeout: 1000
});

class CaneChairService {
  static ServiceEndPoint = 'CaneChair';

  static getAllCaneChair() {
    return new Promise<CaneChairModel[]>(
      (resolve, reject) => {
        setTimeout(() => {
          httpRequest.get(this.ServiceEndPoint).then((res: AxiosResponse) => resolve(res.data));
        }, delay);
      });
  }

  static addNewCaneChair(CaneChair: CaneChairModel): Promise<CaneChairModel> {
    CaneChair = Object.assign({}, CaneChair); // To avoid manipulating object passed in
    let result: Promise<CaneChairModel> = new Promise((resolve, reject) => {
      setTimeout(() => {
        httpRequest.post(this.ServiceEndPoint, CaneChair).then((res: AxiosResponse) => {
          return resolve(res.data);
        });
      }, delay);
    });
    return result;
  }

  static updateCaneChair(CaneChair: CaneChairModel): Promise<CaneChairModel> {
    const CaneChairEndPoint = `${this.ServiceEndPoint}/${CaneChair.id}`;
    CaneChair = Object.assign({}, CaneChair); // To avoid manipulating object passed in
    let result: Promise<CaneChairModel> = new Promise((resolve, reject) => {
      setTimeout(() => {
        httpRequest.put(CaneChairEndPoint, CaneChair).then((res: AxiosResponse) => {
          return resolve(res.data);
        });
      }, delay);
    });
    return result;
  }

  static deleteCaneChair(CaneChair: CaneChairModel): Promise<CaneChairModel> {
    const CaneChairEndPoint = `${this.ServiceEndPoint}/${CaneChair.id}`;
    let result: Promise<CaneChairModel> = new Promise((resolve, reject) => {
      setTimeout(() => {
        httpRequest.delete(CaneChairEndPoint).then((res: AxiosResponse) => {
          return resolve(res.data);
        });
      }, delay);
    });
    return result;
  }
}

export default CaneChairService;
