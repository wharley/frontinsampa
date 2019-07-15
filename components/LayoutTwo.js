import Link from 'next/link'

const LayoutTwo = ({ news }) => (
  <div>
    <div className='container'>
      { news && news.map((item, index) => (
        <article className='wrapper' key={ index }>
          <Link prefetch href={ item.url }>
            <a target='_blank'>
              <figure className='figure-right'>
                <img src={ item.urlToImage } alt="news" />
              </figure>
              <footer className='article-info'>
                <span>{ item.source.name || '' }</span>
                <h2 className='article-title'>
                  { item.title }
                </h2>
              </footer>
            </a>
          </Link>
        </article>
      )) }
    </div>
    <style jsx>{`
      .container {
        display: block;
      }
      .wrapper {
        margin-bottom: 1.5rem;
      }
      .figure-right {
        height: 202px;
      }
      img {
        width: 100%;
        height: 100%;
      }
      .article-info {
        margin-left: 20px;
        margin-right: 20px;
      }
      .article-title {
        margin-bottom: 0;
        margin-top: 0.5rem;
        font-family: 'Roboto', sans-serif;

        font-size: 18px;
        line-height: 1.11;
        color: #242425;
      }
      .big {
        font-size: 42px;
        font-weight: bold;
        line-height: 1;
      }
      span {
        font-size: 13px;
        font-family: 'Roboto', sans-serif;
        color: #e11b22;
      }
      figure {
        margin-left: 20px;
        margin-right: 20px;
      }
      a {
        text-decoration: none;
      }
      @media screen and (min-width: 800px) {
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
      }
    `}</style>
  </div>
)

export default LayoutTwo