import React from 'react'
import Pagination from 'rc-pagination'

import 'rc-pagination/assets/index.css'
import './style.scss'

interface IPaginationProps {
  current: number
  total: number
  defaultPageSize: number
  handlePageClick: (page: number) => void
}

const CustomPagination: React.FC<IPaginationProps> = (props): JSX.Element => {
  const {
    handlePageClick,
    current,
    total,
    defaultPageSize,
  } = props

  const textItemRender = (page: number, type: string, element: React.ReactNode) => {
    if (type === 'prev') {
      return 'Previous'
    }

    if (type === 'next') {
      return 'Next'
    }

    return element
  }

  return (
    <Pagination
      className="custom-pagination"
      onChange={handlePageClick}
      current={current}
      total={total}
      defaultPageSize={defaultPageSize}
      itemRender={textItemRender}
      showTotal={(total, range) => {
        return (
          <>
            {`${range[0]} - ${range[1]}`}
            <span>{`out of ${total}`}</span>
          </>
        )
      }}
    />
  )
}

export default CustomPagination
