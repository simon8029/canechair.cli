import * as ActionTypes from 'types/actionTypes';
import { CaneChairModel } from 'types/modelTypes/CaneChairModel';

export interface IGetAllCaneChairSuccess {
  type: ActionTypes.CaneChairGetAllSuccess;
  CaneChairArray: CaneChairModel[];
}

export interface IGetCaneChairByIdSuccess {
  type: ActionTypes.CaneChairGetByIdSuccess;
  CaneChair: CaneChairModel;
}

export interface IAddNewCaneChairSuccess {
  type: ActionTypes.CaneChairAddSuccess;
  CaneChair: CaneChairModel;
}

export interface IUpdateCaneChairSuccess {
  type: ActionTypes.CaneChairUpdateSuccess;
  CaneChair: CaneChairModel;
}

export interface IDeleteCaneChairSuccess {
  type: ActionTypes.CaneChairDeleteSuccess;
  CaneChair: CaneChairModel;
}

export type ICaneChairAction =
  IGetAllCaneChairSuccess |
  IGetCaneChairByIdSuccess |
  IAddNewCaneChairSuccess |
  IUpdateCaneChairSuccess |
  IDeleteCaneChairSuccess;

export default ICaneChairAction;
