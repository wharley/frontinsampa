import Link from 'next/link'

const Header = () => (
  <div>
    <div className='header'>
      <div className='menu'>
        <div className='sub-menu'>
          <ul>
            <li>
              <Link prefetch href='/?country=us' as='/'><a>USA</a></Link>
            </li>
            <li>
              <Link prefetch href='/brasil?country=br' as='/brasil'><a>Brasil</a></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <style jsx>{`
      .menu {
        display: inline-block;
        width: 100%;
        padding: 5px 0px;

        background-color: #ffffff;
      }
      .header {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 100%;
        box-sizing: border-box;
        top: 0;
        text-align: center;
        transition: all 250ms;
        z-index: 99;
      }
      .sub-menu {
        display: flex;
        justify-content: space-between;
      }
      ul {
        margin: 0px;
        padding: 0px;
        overflow: hidden;

        list-style-type: none;
        margin-left: 0.5rem;
      }
      li {
        float: left;
        font-size: 17px;
        font-weight: bold;

        position: relative;
      }
      li:nth-child(2n)::before {

        position: absolute;
        width: 2px;
        height: 18px;

        top: 15px;
        content: "";
        background-color: #dedede;
        left: 0px;
      }
      a {
        display: block;
        color: #717171;
        text-align: center;

        padding: 14px;
        text-decoration: none;
      }
    `}</style>
  </div>
)

export default Header