import { IBeginAjaxCall, IAjaxCallError } from './interfaces/ICommonAction';
import * as CommonActionTypes from 'types/actionTypes/CommonActionTypes';

export function beginAjaxCall(): IBeginAjaxCall {
  return { type: CommonActionTypes.BEGIN_AJAX_CALL };
}

export function ajaxCallError(error: Error): IAjaxCallError {
  return { type: CommonActionTypes.AJAX_CALL_ERROR, error: error };
}
