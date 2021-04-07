import { ACTION_ADD_BOOKMARK, ACTION_DELETE_BOOKMARK } from 'store/actionTypes'
import { BookmarksActionTypes } from 'store/types/bookmarksType'
import { INews } from 'interfaces/news.interface'

interface IState {
  bookmarks: INews[]
}

const initialState: IState = {
  bookmarks: []
}

export default function bookmarksReducer(state = initialState, action: BookmarksActionTypes) {
  switch (action.type) {
    case ACTION_ADD_BOOKMARK:
      return {
        ...state,
        bookmarks: [action.payload, ...state.bookmarks]
      }

    case ACTION_DELETE_BOOKMARK:
      return {
        ...state,
        bookmarks: state.bookmarks.filter((bookmark: INews) => bookmark.id !== action.payload.id)
      }

    default:
      return state
  }
}
