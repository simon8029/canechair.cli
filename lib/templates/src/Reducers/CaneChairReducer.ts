import * as ICaneChairActions from 'Actions/Interfaces/ICaneChairAction';
import * as CaneChairActionTypes from 'Types/ActionTypes/CaneChairActionTypes';
import { CaneChairModel } from 'Types/ModelTypes/CaneChairModel';
import CaneChairStateType from 'Types/StateTypes/CaneChairStateType';

const initialState: CaneChairStateType = {
  CaneChair: new CaneChairModel(),
  CaneChairArray: [],
  error: undefined,
  isLoading: false,
  searchTerm: ''
};

export function CaneChairReducer(
  state: CaneChairStateType = initialState,
  CaneChairAction: ICaneChairActions.ICaneChairAction
): CaneChairStateType {
  switch (CaneChairAction.type) {
    case CaneChairActionTypes.GetAllCaneChairStart: {
      return { ...state, isLoading: true };
    }

    case CaneChairActionTypes.GetAllCaneChairSucceeded: {
      return {
        ...state,
        CaneChairArray: (CaneChairAction as ICaneChairActions.IGetAllCaneChairSucceeded)
          .CaneChairArray,
        isLoading: false
      };
    }

    case CaneChairActionTypes.GetAllCaneChairFailed: {
      return {
        ...state,
        error: (CaneChairAction as ICaneChairActions.IGetAllCaneChairFailed)
          .error,
        isLoading: false
      };
    }

    case CaneChairActionTypes.GetCaneChairByIdStart: {
      return { ...state, isLoading: true };
    }

    case CaneChairActionTypes.GetCaneChairByIdSucceeded: {
      return {
        ...state,
        CaneChair: (CaneChairAction as ICaneChairActions.IGetCaneChairByIdSucceeded)
          .CaneChair,
        isLoading: false
      };
    }

    case CaneChairActionTypes.GetCaneChairByIdFailed: {
      return {
        ...state,
        error: (CaneChairAction as ICaneChairActions.IGetCaneChairByIdFailed)
          .error,
        isLoading: false
      };
    }
    case CaneChairActionTypes.AddCaneChairSucceeded:
      return {
        ...state,
        CaneChairArray: state.CaneChairArray.concat(
          (CaneChairAction as ICaneChairActions.IAddCaneChairSucceeded)
            .CaneChair
        )
      };

    case CaneChairActionTypes.DeleteCaneChairSucceeded:
      return {
        ...state,
        CaneChairArray: state.CaneChairArray.filter(
          (s: CaneChairModel) =>
            s.id !==
            (CaneChairAction as ICaneChairActions.IDeleteCaneChairSucceeded)
              .CaneChair.id
        )
      };

    case CaneChairActionTypes.UpdateCaneChairSucceeded:
      return {
        ...state,
        CaneChairArray: state.CaneChairArray.filter(
          (s: CaneChairModel) =>
            s.id !==
            (CaneChairAction as ICaneChairActions.IUpdateCaneChairSucceeded)
              .CaneChair.id
        )
      };

    default:
      return state;
  }
}
