import { NewsActionTypes } from 'store/types/newsType'
import { ACTION_UPDATE_NEWS } from '../actionTypes'
import { INews } from 'interfaces/news.interface'

export function updateNewsAction(payload: INews[]): NewsActionTypes {
  return {
    type: ACTION_UPDATE_NEWS,
    payload,
  }
}
