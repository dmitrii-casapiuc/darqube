import {combineReducers} from 'redux'

import newsReducer from './newsReducer'
import bookmarksReducer from './bookmarksReducer'

export const rootReducer = combineReducers({
  newsState: newsReducer,
  bookmarksState: bookmarksReducer
})

export type RootState = ReturnType<typeof rootReducer>
