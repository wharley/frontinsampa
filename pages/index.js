import Header from '../components/Header'
import HeadMeta from '../components/HeadMeta'
import LayoutOne from '../components/LayoutOne'
import LayoutTwo from '../components/LayoutTwo'

import { pageWrapper } from '../hocs/pageWrapper'

const Home = ({ news }) => (
  <div>
    <HeadMeta />
    <div className='container'>
      <Header />
      <LayoutOne />
      <LayoutTwo news={ news } />
    </div>
    <style jsx global>{`
      body {
        margin: 0;
      }
      .container {
        max-width: 1260px;
        margin-left: auto;
        margin-right: auto;
      }
    `}</style>
  </div>
)

export default pageWrapper(Home)