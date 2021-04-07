import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import {isEmpty} from 'lodash'

import Card from 'components/Card'
import CustomPagination from 'components/Pagination'
import {RootState} from 'store/reducers/rootReducer'
import { INews } from 'interfaces/news.interface'

import './style.scss'

const Bookmarks: React.FC = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [newsPerPage] = useState<number>(8)
  const {bookmarks} = useSelector((state: RootState) => state.bookmarksState)

  const handlePageClick = (page: number): void => {
    setCurrentPage(page)
  }
  
  const indexOfLastNews = currentPage * newsPerPage
  const indexOfFirstNews = indexOfLastNews - newsPerPage
  const currentNews = bookmarks.slice(indexOfFirstNews, indexOfLastNews)

  return (
    <div className="bookmarks">
      {
        isEmpty(bookmarks)
          ? <p className="no-data">No data</p>
          : (
            <div className="content">
              <div className="all-bookmarks">
                {
                  currentNews.map((item: INews): JSX.Element => <Card key={item.id} item={item} size="small" type="default" />)
                }
              </div>
              {
                bookmarks.length > 8
                  ? (
                    <CustomPagination
                      handlePageClick={handlePageClick}
                      current={currentPage}
                      total={bookmarks.length}
                      defaultPageSize={newsPerPage}
                    />
                  )
                  : ''
              }
            </div>
          )
      }
    </div>
  )
}

export default Bookmarks
