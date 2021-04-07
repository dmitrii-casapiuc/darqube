import { ACTION_UPDATE_SEARCH } from '../actionTypes'

interface ISearchUpdateAction {
  type: typeof ACTION_UPDATE_SEARCH
  payload: string
}

export type AppActionTypes = ISearchUpdateAction
