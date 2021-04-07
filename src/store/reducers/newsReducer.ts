import { ACTION_UPDATE_NEWS } from 'store/actionTypes'
import { NewsActionTypes } from 'store/types/newsType'
import { INews } from 'interfaces/news.interface'

interface IState {
  news: INews[]
}

const initialState: IState = {
  news: []
}

export default function newsReducer(state = initialState, action: NewsActionTypes) {
  switch (action.type) {
    case ACTION_UPDATE_NEWS:
      return {
        ...state,
        news: action.payload,
      }

    default:
      return state
  }
}
