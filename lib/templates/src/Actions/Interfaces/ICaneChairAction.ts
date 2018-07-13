import * as ActionTypes from 'Types/ActionTypes';
import { CaneChairModel } from 'Types/ModelTypes/CaneChairModel';

export interface IGetAllCaneChairStart {
  type: ActionTypes.GetAllCaneChairStart;
}

export interface IGetAllCaneChairSucceeded {
  type: ActionTypes.GetAllCaneChairSucceeded;
  CaneChairArray: CaneChairModel[];
}

export interface IGetAllCaneChairFailed {
  type: ActionTypes.GetAllCaneChairFailed;
  error: Error;
}

export interface IGetCaneChairByIdStart {
  type: ActionTypes.GetCaneChairByIdStart;
}

export interface IGetCaneChairByIdSucceeded {
  type: ActionTypes.GetCaneChairByIdSucceeded;
  CaneChair: CaneChairModel;
}

export interface IGetCaneChairByIdFailed {
  type: ActionTypes.GetCaneChairByIdFailed;
  error: Error;
}

export interface IAddCaneChairStart {
  type: ActionTypes.AddCaneChairStart;
}

export interface IAddCaneChairSucceeded {
  type: ActionTypes.AddCaneChairSucceeded;
  CaneChair: CaneChairModel;
}

export interface IAddCaneChairFailed {
  type: ActionTypes.AddCaneChairFailed;
  error: Error;
}

export interface IUpdateCaneChairStart {
  type: ActionTypes.UpdateCaneChairStart;
}

export interface IUpdateCaneChairSucceeded {
  type: ActionTypes.UpdateCaneChairSucceeded;
  CaneChair: CaneChairModel;
}

export interface IUpdateCaneChairFailed {
  type: ActionTypes.UpdateCaneChairFailed;
  error: Error;
}

export interface IDeleteCaneChairStart {
  type: ActionTypes.DeleteCaneChairStart;
}

export interface IDeleteCaneChairSucceeded {
  type: ActionTypes.DeleteCaneChairSucceeded;
  CaneChair: CaneChairModel;
}

export interface IDeleteCaneChairFailed {
  type: ActionTypes.DeleteCaneChairFailed;
  error: Error;
}

export type ICaneChairAction =
  | IGetAllCaneChairStart
  | IGetAllCaneChairSucceeded
  | IGetAllCaneChairFailed
  | IGetCaneChairByIdStart
  | IGetCaneChairByIdSucceeded
  | IGetCaneChairByIdFailed
  | IAddCaneChairStart
  | IAddCaneChairSucceeded
  | IAddCaneChairFailed
  | IUpdateCaneChairStart
  | IUpdateCaneChairSucceeded
  | IUpdateCaneChairFailed
  | IDeleteCaneChairStart
  | IDeleteCaneChairSucceeded
  | IDeleteCaneChairFailed;

export default ICaneChairAction;
