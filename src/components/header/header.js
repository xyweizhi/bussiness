import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import DrawerMenu from "../drawerMenu/drawerMenu"
import "./style.scss"

const Header = ({ siteTitle }) => (
  <header
    id="header"
    style={{
      backgroundColor: `#181015`,
      padding: "20px 0",
    }}
  >
    <div className="container" style={{}}>
      <div className="row justify-content-between align-items-center">
        <div
          className="headerMenu"
          className="d-block d-md-none"
          style={{ cursor: "pointer", paddingLeft: "15px" }}
        >
          <DrawerMenu>
            <StaticImage
              width={25}
              className="d-block d-md-none"
              loading="lazy"
              src="../../assets/images/菜单图标.png"
              objectFit="unset"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="menu"
              title="menu"
            />
          </DrawerMenu>
        </div>
        <h1
          style={{
            margin: 0,
            color: "transparent",
            fontSize: "0",
            paddingLeft: "15px",
            paddingRight: "15px",
          }}
          className="webName"
        >
          vOne
          <Link
            to="/"
            style={{
              textDecoration: `none`,
            }}
          >
            <StaticImage
              className="d-none d-md-block"
              loading="lazy"
              placeholder="blurred"
              src="../../assets/images/logo.png"
              objectFit="unset"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="vOne"
              title="vOne"
            />
            <StaticImage
              className="d-block d-md-none"
              loading="lazy"
              width={80}
              src="../../assets/images/logo.png"
              objectFit="unset"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="vOne"
              title="vOne"
            />
          </Link>
        </h1>
        <ul
          className="headerNav d-md-block  d-none"
          style={{ marginBottom: 0 }}
        >
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/newsCenter">新闻中心</Link>
          </li>
          <li>
            <Link to="/about">关于我们</Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
