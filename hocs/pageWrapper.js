
import fetch from 'isomorphic-unfetch'

import { apiKey } from '../config'

export const pageWrapper = (Page) => {
  const PageWrapper = (props) => <Page { ...props } />

  PageWrapper.getInitialProps = async ({ query: { country = 'us' } }) => {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`)
    const json = await res.json()
    return { news: json.articles }
  }

  return PageWrapper
}