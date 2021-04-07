import { BookmarksActionTypes } from 'store/types/bookmarksType'
import { ACTION_ADD_BOOKMARK, ACTION_DELETE_BOOKMARK } from '../actionTypes'
import { INews } from 'interfaces/news.interface'

export function addBookmarkAction(payload: INews): BookmarksActionTypes {
  return {
    type: ACTION_ADD_BOOKMARK,
    payload,
  }
}

export function deleteBookmarkAction(payload: INews): BookmarksActionTypes {
  return {
    type: ACTION_DELETE_BOOKMARK,
    payload,
  }
}
