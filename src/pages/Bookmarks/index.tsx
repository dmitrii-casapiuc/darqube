import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {isEmpty} from 'lodash'

import Card from 'components/Card'
import {RootState} from 'store/reducers/rootReducer'
import {INews} from 'interfaces/news.interface'

import './style.scss'

const Bookmarks: React.FC = (): JSX.Element => {
  const {bookmarks} = useSelector((state: RootState) => state.bookmarksState)
  const {search} = useSelector((state: RootState) => state.appState)
  const [searchResults, setSearchResults] = useState<INews[]>(bookmarks)

  useEffect(() => {
    const results = bookmarks.filter((bookmark: INews) => bookmark.headline.toLowerCase().includes(search))
    setSearchResults(results)
  }, [search])

  return (
    <div className="bookmarks">
      {
        isEmpty(searchResults)
          ? <p className="no-data">No data</p>
          : (
            <div className="content">
              <div className="all-bookmarks">
                {
                  searchResults.map((item: INews): JSX.Element => <Card key={item.id} item={item} size="small" type="default" />)
                }
              </div>
            </div>
          )
      }
    </div>
  )
}

export default Bookmarks
