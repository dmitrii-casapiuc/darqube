import React from 'react'
import classNames from 'classnames'
import moment from 'moment'

import { INews } from 'interfaces/news.interface'
import './style.scss'

interface ICardProps {
  item: INews
  size: string
  type: string
}

const Card: React.FC<ICardProps> = ({item, size, type}): JSX.Element => {
  const cardClasses = (): string => {
    return classNames({
      'news-card': true,
      big: size === 'big',
      small: size === 'small'
    })
  }

  return (
    <div
      className={cardClasses()}
      style={{
        background: `linear-gradient(rgba(0,0,0, 0.40), rgba(0,0,0, 0.40)), url("${item.image}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="header">
        <span className="related">{item.related}</span>
        {
          type === 'last'
            ? <span className="latest-research">latest research</span>
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
          <div className="bookmark">
            <i className="material-icons">bookmark_border</i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
