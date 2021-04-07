import React, {useState, useEffect} from 'react'
import {AxiosResponse} from 'axios'
import {isEmpty} from 'lodash'

import { INews } from 'interfaces/news.interface'
import { fetchNews } from 'api/news'
import Preloader from 'components/Preloader'
import Card from 'components/Card'
import CustomPagination from 'components/Pagination'

import './style.scss'

const News: React.FC = (): JSX.Element => {
  const [news, setNews] = useState<INews[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [newsPerPage] = useState<number>(6)

  useEffect(() => {
    fetch()
  }, [])

  const fetch = async (): Promise<void> => {
    setLoading(true)

    try {
      const {data}: AxiosResponse<INews[]> = await fetchNews()
      setNews(data)
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  // Get current news
  const indexOfLastNews = currentPage * newsPerPage
  const indexOfFirstNews = indexOfLastNews - newsPerPage
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews)

  const handlePageClick = (page: number): void => {
    setCurrentPage(page)
  }

  return (
    <div className="news">
      {
        loading
          ? <Preloader />
          : isEmpty(news)
            ? <p className="no-data">No data</p>
            : (
              <div className="wrapper-content">
                <div className="last-news"><Card item={news[0]} size="big" type="last" /></div>
                <div className="content">
                  <div className="all-news">
                    {
                      currentNews.map((item: INews): JSX.Element => <Card key={item.id} item={item} size="small" type="default" />)
                    }
                  </div>
                  <CustomPagination
                    handlePageClick={handlePageClick}
                    current={currentPage}
                    total={news.length}
                    defaultPageSize={newsPerPage}
                  />
                </div>
              </div>
            )
      }
    </div>
  )
}

export default News
