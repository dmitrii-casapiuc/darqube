import { AppActionTypes } from 'store/types/appType'
import { ACTION_UPDATE_SEARCH } from '../actionTypes'

export function updateSearchAction(payload: string): AppActionTypes {
  return {
    type: ACTION_UPDATE_SEARCH,
    payload,
  }
}
