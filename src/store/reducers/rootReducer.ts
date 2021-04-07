import {combineReducers} from 'redux'

import newsReducer from './newsReducer'
import bookmarksReducer from './bookmarksReducer'
import appReducer from './appReducer'

export const rootReducer = combineReducers({
  newsState: newsReducer,
  bookmarksState: bookmarksReducer,
  appState: appReducer,
})

export type RootState = ReturnType<typeof rootReducer>
