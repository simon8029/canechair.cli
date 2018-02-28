import * as CaneChairActionTypes from 'types/actionTypes/CaneChairActionTypes';
import { CaneChairModel } from 'types/modelTypes/CaneChairModel';
import { IGetAllCaneChairSuccess, IAddNewCaneChairSuccess, IUpdateCaneChairSuccess, ICaneChairAction, IDeleteCaneChairSuccess } from 'actions/interfaces/ICaneChairAction';
import { beginAjaxCall } from './CommonActions';
import { Dispatch } from 'react-redux';
import CaneChairService from 'services/CaneChairService';
import { ajaxCallError } from './index';

export function getAllCaneChairSuccess(CaneChairArray: CaneChairModel[]): IGetAllCaneChairSuccess {
  return {
    type: CaneChairActionTypes.CaneChairGetAllSuccess,
    CaneChairArray: CaneChairArray
  };
}

export function addNewCaneChairSuccess(CaneChair: CaneChairModel): IAddNewCaneChairSuccess {
  return {
    type: CaneChairActionTypes.CaneChairAddSuccess,
    CaneChair: CaneChair
  };
}

export function updateCaneChairSuccess(CaneChair: CaneChairModel): IUpdateCaneChairSuccess {
  return {
    type: CaneChairActionTypes.CaneChairUpdateSuccess,
    CaneChair: CaneChair
  };
}

export function deleteCaneChairSuccess(CaneChair: CaneChairModel): IDeleteCaneChairSuccess {
  return {
    type: CaneChairActionTypes.CaneChairDeleteSuccess,
    CaneChair: CaneChair
  };
}

export function getAllCaneChair() {
  return function (dispatch: Dispatch<ICaneChairAction>) {
    dispatch(beginAjaxCall());
    return CaneChairService.getAllCaneChair()
      .then((res: CaneChairModel[]) => {
        dispatch(getAllCaneChairSuccess(res));
      }).catch((error: Error) => {
        dispatch(ajaxCallError(error));
        throw (error);
      });
  };
}

export function addNewCaneChair(CaneChair: CaneChairModel): any {
  return function (dispatch: Dispatch<ICaneChairAction>) {
    dispatch(beginAjaxCall());
    return CaneChairService.addNewCaneChair(CaneChair)
      .then((s: CaneChairModel) => {
        dispatch(addNewCaneChairSuccess(s));
      }).catch((error: Error) => {
        dispatch(ajaxCallError(error));
        throw (error);
      });
  };
}

export function updateCaneChair(CaneChair: CaneChairModel): any {
  return function (dispatch: Dispatch<ICaneChairAction>) {
    dispatch(beginAjaxCall());
    return CaneChairService.updateCaneChair(CaneChair)
      .then((res: CaneChairModel) => {
        dispatch(updateCaneChairSuccess(res));
      }).catch((error: Error) => {
        dispatch(ajaxCallError(error));
        throw (error);
      });
  };
}

export function deleteCaneChair(CaneChair: CaneChairModel): any {
  return function (dispatch: Dispatch<ICaneChairAction>) {
    dispatch(beginAjaxCall());
    return CaneChairService.deleteCaneChair(CaneChair)
      .then(() => {
        dispatch(deleteCaneChairSuccess(CaneChair));
      }).catch((error: Error) => {
        dispatch(ajaxCallError(error));
        throw (error);
      });
  };
}
