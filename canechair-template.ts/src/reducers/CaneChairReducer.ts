import * as CaneChairActionTypes from 'types/actionTypes/CaneChairActionTypes';
import { ICaneChairAction } from 'actions/interfaces/ICaneChairAction';
import { CaneChairModel } from 'types/modelTypes/CaneChairModel';

export function CaneChairReducer(state: CaneChairModel[] = [], CaneChairAction: ICaneChairAction): CaneChairModel[] | CaneChairModel {
  switch (CaneChairAction.type) {
    case CaneChairActionTypes.CaneChairGetAllSuccess:
      return CaneChairAction.CaneChairArray;
    case CaneChairActionTypes.CaneChairAddSuccess:
      return [...state, CaneChairAction.CaneChair];
    case CaneChairActionTypes.CaneChairDeleteSuccess:
      return state.filter(s => s.id !== CaneChairAction.CaneChair.id);
    case CaneChairActionTypes.CaneChairUpdateSuccess:
      return [...state.filter(s => s.id !== CaneChairAction.CaneChair.id), Object.assign({}, CaneChairAction.CaneChair)];
    default:
      return state;
  }
}
