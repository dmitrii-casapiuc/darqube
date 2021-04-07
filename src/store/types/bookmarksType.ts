import { ACTION_ADD_BOOKMARK, ACTION_DELETE_BOOKMARK } from '../actionTypes'
import { INews } from 'interfaces/news.interface'

interface IBookmarkAddAction {
  type: typeof ACTION_ADD_BOOKMARK
  payload: INews
}

interface IBookmarkDeleteAction {
  type: typeof ACTION_DELETE_BOOKMARK
  payload: INews
}

export type BookmarksActionTypes = IBookmarkAddAction | IBookmarkDeleteAction
