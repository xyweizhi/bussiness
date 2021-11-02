import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Link } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

import "./style.scss"

const DrawerMenu = ({ children, show }) => {
  const query = useStaticQuery(graphql`
    query {
      home: file(relativePath: { eq: "ydd-首页图标.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 25)
        }
      }
      about: file(relativePath: { eq: "ydd-企业简介图标-min.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 25)
        }
      }
      product: file(relativePath: { eq: "ydd-产品服务图标.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 25)
        }
      }
      contact: file(relativePath: { eq: "ydd-联系我们图标.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 25)
        }
      }
      join: file(relativePath: { eq: "ydd-招贤纳士图标.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 25)
        }
      }
      next: file(relativePath: { eq: "ydd-下一步.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 16, height: 18)
        }
      }
    }
  `)
  const meneLink = [
    {
      title: "首页",
      url: "/",
      img: query.home.childImageSharp.gatsbyImageData,
    },
    {
      title: "新闻中心",
      url: "/newsCenter",
      img: query.product.childImageSharp.gatsbyImageData,
    },
    {
      title: "关于我们",
      url: "/about",
      img: query.about.childImageSharp.gatsbyImageData,
    },
  ]

  const [onOff, setOnOff] = useState(show)

  const closeMenu = () => {
    document.querySelector("body").style.overflowY = "auto"
    setOnOff(false)
  }
  const showMenu = () => {
    document.querySelector("body").style.overflowY = "hidden"
    setOnOff(true)
  }

  return (
    <div className="drawerMenuWrap">
      <div className="showBtn" onClick={showMenu}>
        {children}
      </div>
      <div
        className="drawerMenu "
        style={{ display: onOff ? "block" : "none" }}
        onClick={closeMenu}
      >
        <div className="container">
          <div className="closeBtn">
            <StaticImage
              style={{ cursor: "pointer" }}
              loading="lazy"
              placeholder="blurred"
              src="../../assets/images/ydd-关闭图标.png"
              objectFit="unset"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="menu"
              title="menu"
            />
          </div>
          <ul className="menuLink">
            {meneLink.map(item => (
              <li key={item.title}>
                <Link to={item.url}>
                  <GatsbyImage
                    image={item.img}
                    alt={item.title}
                    title={item.title}
                  />
                  <span>{item.title}</span>
                  <GatsbyImage
                    style={{ float: "right" }}
                    image={query.next.childImageSharp.gatsbyImageData}
                    alt={item.title}
                    title={item.title}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DrawerMenu
