import { ACTION_UPDATE_NEWS } from '../actionTypes'
import { INews } from 'interfaces/news.interface'

interface INewsAction {
  type: typeof ACTION_UPDATE_NEWS;
  payload: INews[]
}

export type NewsActionTypes = INewsAction
