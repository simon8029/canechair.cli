import delay from './delay'; // For testing async call. Set to 0 on prod.
import { BaseUrl } from 'Settings/Path';
import axios, { AxiosResponse } from 'axios';
import { CaneChairModel } from 'Types/ModelTypes/CaneChairModel';

const client = axios.create({
  baseURL: BaseUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});

class CaneChairService {
  static ServiceEndPoint = 'CaneChair';

  static getAllCaneChair() {
    return new Promise<CaneChairModel[]>((resolve, reject) => {
      setTimeout(() => {
        client
          .get(this.ServiceEndPoint)
          .then((res: AxiosResponse) => resolve(res.data));
      }, delay);
    });
  }

  static addCaneChair(CaneChair: CaneChairModel): Promise<CaneChairModel> {
    CaneChair = Object.assign({}, CaneChair); // To avoid manipulating object passed in
    let result: Promise<CaneChairModel> = new Promise((resolve, reject) => {
      setTimeout(() => {
        client
          .post(this.ServiceEndPoint, CaneChair)
          .then((res: AxiosResponse) => {
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
        client.put(CaneChairEndPoint, CaneChair).then((res: AxiosResponse) => {
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
        client.delete(CaneChairEndPoint).then((res: AxiosResponse) => {
          return resolve(res.data);
        });
      }, delay);
    });
    return result;
  }
}

export default CaneChairService;
