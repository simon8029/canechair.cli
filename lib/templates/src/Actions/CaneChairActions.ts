import {
  IAddCaneChairFailed,
  IAddCaneChairStart,
  IAddCaneChairSucceeded,
  ICaneChairAction,
  IDeleteCaneChairFailed,
  IDeleteCaneChairStart,
  IDeleteCaneChairSucceeded,
  IGetAllCaneChairFailed,
  IGetAllCaneChairStart,
  IGetAllCaneChairSucceeded,
  IGetCaneChairByIdFailed,
  IGetCaneChairByIdStart,
  IGetCaneChairByIdSucceeded,
  IUpdateCaneChairFailed,
  IUpdateCaneChairStart,
  IUpdateCaneChairSucceeded
} from 'Actions/Interfaces/ICaneChairAction';
import { Dispatch } from 'redux';
import * as CaneChairActionTypes from 'Types/ActionTypes/CaneChairActionTypes';
import CaneChairService from 'Services/CaneChairServices';
import { CaneChairModel } from 'Types/ModelTypes/CaneChairModel';

export function getAllCaneChairStart(): IGetAllCaneChairStart {
  return {
    type: CaneChairActionTypes.GetAllCaneChairStart
  };
}

export function getAllCaneChairSucceeded(
  CaneChairArray: CaneChairModel[]
): IGetAllCaneChairSucceeded {
  return {
    CaneChairArray,
    type: CaneChairActionTypes.GetAllCaneChairSucceeded
  };
}

export function getAllCaneChairFailed(error: Error): IGetAllCaneChairFailed {
  return {
    error,
    type: CaneChairActionTypes.GetAllCaneChairFailed
  };
}

export function getCaneChairByIdStart(): IGetCaneChairByIdStart {
  return {
    type: CaneChairActionTypes.GetCaneChairByIdStart
  };
}

export function getCaneChairByIdSucceeded(
  CaneChair: CaneChairModel
): IGetCaneChairByIdSucceeded {
  return {
    CaneChair,
    type: CaneChairActionTypes.GetCaneChairByIdSucceeded
  };
}

export function getCaneChairByIdFailed(error: Error): IGetCaneChairByIdFailed {
  return {
    error,
    type: CaneChairActionTypes.GetCaneChairByIdFailed
  };
}

export function addCaneChairStart(): IAddCaneChairStart {
  return { type: CaneChairActionTypes.AddCaneChairStart };
}

export function addCaneChairSucceeded(
  CaneChair: CaneChairModel
): IAddCaneChairSucceeded {
  return {
    CaneChair,
    type: CaneChairActionTypes.AddCaneChairSucceeded
  };
}

export function addCaneChairFailed(error: Error): IAddCaneChairFailed {
  return {
    error,
    type: CaneChairActionTypes.AddCaneChairFailed
  };
}

export function updateCaneChairStart(): IUpdateCaneChairStart {
  return { type: CaneChairActionTypes.UpdateCaneChairStart };
}

export function updateCaneChairSucceeded(
  CaneChair: CaneChairModel
): IUpdateCaneChairSucceeded {
  return {
    CaneChair,
    type: CaneChairActionTypes.UpdateCaneChairSucceeded
  };
}

export function updateCaneChairFailed(error: Error): IUpdateCaneChairFailed {
  return {
    error,
    type: CaneChairActionTypes.UpdateCaneChairFailed
  };
}

export function deleteCaneChairStart(): IDeleteCaneChairStart {
  return { type: CaneChairActionTypes.DeleteCaneChairStart };
}

export function deleteCaneChairSucceeded(
  CaneChair: CaneChairModel
): IDeleteCaneChairSucceeded {
  return {
    CaneChair,
    type: CaneChairActionTypes.DeleteCaneChairSucceeded
  };
}

export function deleteCaneChairFailed(error: Error): IDeleteCaneChairFailed {
  return {
    error,
    type: CaneChairActionTypes.DeleteCaneChairFailed
  };
}

export function getAllCaneChair() {
  return (dispatch: Dispatch<ICaneChairAction>) => {
    dispatch(getAllCaneChairStart());
    return CaneChairService.getAllCaneChair()
      .then((res: CaneChairModel[]) => {
        dispatch(getAllCaneChairSucceeded(res));
      })
      .catch((error: Error) => {
        dispatch(getAllCaneChairFailed(error));
        throw error;
      });
  };
}

export function addCaneChair(CaneChair: CaneChairModel): any {
  return (dispatch: Dispatch<ICaneChairAction>) => {
    dispatch(addCaneChairStart());
    return CaneChairService.addCaneChair(CaneChair)
      .then((res: CaneChairModel) => {
        dispatch(addCaneChairSucceeded(res));
      })
      .catch((error: Error) => {
        dispatch(addCaneChairFailed(error));
        throw error;
      });
  };
}

export function updateCaneChair(CaneChair: CaneChairModel): any {
  return (dispatch: Dispatch<ICaneChairAction>) => {
    dispatch(updateCaneChairStart());
    return CaneChairService.updateCaneChair(CaneChair)
      .then((res: CaneChairModel) => {
        dispatch(updateCaneChairSucceeded(res));
      })
      .catch((error: Error) => {
        dispatch(updateCaneChairFailed(error));
        throw error;
      });
  };
}

export function deleteCaneChair(CaneChair: CaneChairModel): any {
  return (dispatch: Dispatch<ICaneChairAction>) => {
    dispatch(deleteCaneChairStart());
    return CaneChairService.deleteCaneChair(CaneChair)
      .then(() => {
        dispatch(deleteCaneChairSucceeded(CaneChair));
      })
      .catch((error: Error) => {
        dispatch(deleteCaneChairFailed(error));
        throw error;
      });
  };
}
