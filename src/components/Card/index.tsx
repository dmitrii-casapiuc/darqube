import React from 'react'
import classNames from 'classnames'
import moment from 'moment'
import {useDispatch, useSelector} from 'react-redux'
import {isEmpty} from 'lodash'

import {INews} from 'interfaces/news.interface'
import {RootState} from 'store/reducers/rootReducer'
import {addBookmarkAction, deleteBookmarkAction} from 'store/actions/booksmarksActions'

import './style.scss'

interface ICardProps {
  item: INews
  size: string
  type: string
}

const Card: React.FC<ICardProps> = ({item, size, type}): JSX.Element => {
  const {bookmarks} = useSelector((state: RootState) => state.bookmarksState)
  const dispatch = useDispatch()

  const cardClasses = (): string => {
    return classNames({
      'news-card': true,
      big: size === 'big',
      small: size === 'small'
    })
  }

  const handleBookmark = (item: INews) => {
    if (isEmpty(isBookmark(item))) {
      dispatch(addBookmarkAction(item))
    } else {
      dispatch(deleteBookmarkAction(item))
    }
  }

  const isBookmark = (item: INews) => bookmarks.find((bookmark: INews) => bookmark.id === item.id)

  return (
    <div
      className={cardClasses()}
      style={{
        background: `linear-gradient(rgba(28,58,82,0), rgba(5,20,27,1)), url("${item.image}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="header">
        <span className="related">{item.related}</span>
        {
          type === 'last'
            ? <span className="latest-research">latest news</span>
            : ''
        }
      </div>
      <div className="content">
        <div className="headline">
          <a
            href={item.url}
            target="_blank"
          >
            {item.headline}
          </a>
        </div>
        <div className="actions">
          {
            type === 'last'
              ? (
                <div className="read">
                  <a
                    href={item.url}
                    target="_blank"
                  >
                    <i className="material-icons">play_circle_outline</i>
                    Read the research
                  </a>
                </div>
              )
              : ''
          }
          <div className="date">{moment(item.datetime).format('DD MMM')}</div>
          <div className="last-read">6 min read</div>
          <div className="source"><i className="material-icons">call_split</i></div>
          <div className="bookmark">
            <i
              className="material-icons"
              onClick={() => handleBookmark(item)}
            >
              {isBookmark(item) ? 'bookmark' : 'bookmark_border'}
            </i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
