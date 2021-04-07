import { ACTION_UPDATE_SEARCH } from 'store/actionTypes'
import { AppActionTypes } from 'store/types/appType'

interface IState {
  search: string
}

const initialState: IState = {
  search: ''
}

export default function appReducer(state = initialState, action: AppActionTypes) {
  switch (action.type) {
    case ACTION_UPDATE_SEARCH:
      return {
        ...state,
        search: action.payload,
      }

    default:
      return state
  }
}
