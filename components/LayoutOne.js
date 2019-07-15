import Link from 'next/link'

const newStatic = [
  {
    urlToImage: '/static/frontinsampa.jpg',
    author: 'Front In Sampa 2019',
    title: 'A 8º e maior edição do mais tradicional evento de Front-end do Brasil.',
    url: 'https://www.frontinsampa.com.br'
  },
  {
    urlToImage: '/static/nextjs-9.png',
    author: 'Zeit',
    title: 'Nova versão do nextjs.',
    url: 'https://nextjs.org/blog/next-9'
  },
  {
    urlToImage: '/static/newsapi.png',
    author: 'News API',
    title: 'API de notícias por país.',
    url: 'https://newsapi.org/'
  }
]

const LayoutOne = () => (
  <div>
    <div className='container'>
      <div>
        <article>
          <Link prefetch href={ newStatic[0].url }>
            <a target='_blank'>
              <figure className='main-image'>
                <img src={ newStatic[0].urlToImage } alt="news" />
              </figure>
              <footer className='article-info'>
                <span>{ newStatic[0].author }</span>
                <h2 className='article-title big'>
                  { newStatic[0].title }
                </h2>
              </footer>
            </a>
          </Link>
        </article>
      </div>
      <div>
        <article>
          <Link prefetch href={ newStatic[0].url }>
            <a target='_blank'>
              <figure className='figure-right'>
                <img src={ newStatic[1].urlToImage } alt="news" />
              </figure>
              <footer className='article-info'>
                <span>{ newStatic[1].author }</span>
                <h2 className='article-title'>
                  { newStatic[1].title }
                </h2>
              </footer>
            </a>
          </Link>
        </article>
        <article>
          <Link prefetch href={ newStatic[2].url }>
            <a target='_blank'>
              <figure className='figure-right'>
                <img src={ newStatic[2].urlToImage } alt="news" />
              </figure>
              <footer className='article-info'>
                <span>{ newStatic[2].author }</span>
                <h2 className='article-title'>
                  { newStatic[2].title }
                </h2>
              </footer>
            </a>
          </Link>
        </article>
      </div>
    </div>
    <style jsx>{`
      .container {
        display: block;
      }
      .figure-right {
        height: 202px;
      }
      .main-image {
        height: 420px;
      }
      img {
        width: 100%;
        height: 100%;
      }
      article {
        position: relative;
      }
      .article-info {
        position: absolute;
        margin-left: 20px;
        margin-right: 20px;

        bottom: 0;
        padding: 1rem 1.25rem 1.3rem 1.25rem;
        color: #fff;
        z-index: 1;
      }
      .article-title {
        margin-bottom: 0;
        margin-top: 0.5rem;
        font-family: 'Roboto', sans-serif;
      }
      .big {
        font-size: 42px;
        font-weight: bold;
        line-height: 1;
      }
      span {
        font-size: 13px;
        font-family: 'Lato', sans-serif;
      }
      figure {
        margin-left: 20px;
        margin-right: 20px;
      }
      @media screen and (min-width: 800px) {
        .container {
          display: grid;
          grid-template-columns: 2fr 1fr;
        }
      }
    `}</style>
  </div>
)

export default LayoutOne