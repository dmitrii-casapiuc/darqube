import request from 'utils/request'

export function fetchNews() {
  return request({
    url: '/api/v1/company-news?symbol=AAPL&from=2021-03-01&to=2021-03-15&token=bpjsf67rh5r9328ecgvg',
    method: 'get',
  })
}
