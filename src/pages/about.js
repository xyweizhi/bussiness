// eslint-disable-next-line no-undef
import React, { useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import "./style.scss"

const About = () => {
  useEffect(() => {
    window.onLoad = function () {
      var map = new AMap.Map("mapContainer", {
        zoom: 18,
        center: [119.241222, 26.053007],
      })
      var marker = new AMap.Marker({
        position: new AMap.LngLat(119.241222, 26.053007), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: "vOne",
      })
      map.add(marker)
      // 同时引入工具条插件，比例尺插件和鹰眼插件
      AMap.plugin(
        [
          "AMap.ToolBar",
          "AMap.Scale",
          "AMap.OverView",
          "AMap.MapType",
          "AMap.Geolocation",
        ],
        function () {
          // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
          map.addControl(new AMap.ToolBar())
          // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
          map.addControl(new AMap.Scale())
        }
      )
    }
    var url =
      "https://webapi.amap.com/maps?v=1.4.15&key=cc01a22d08aed6b256a793859fef83fe&callback=onLoad"
    var jsapi = document.createElement("script")
    jsapi.charset = "utf-8"
    jsapi.src = url
    document.head.appendChild(jsapi)
  }, [])

  return (
    <Layout>
      <SEO title="关于我们" description="关于我们" />
      <div id="contactWrap">
        <div className="aboutTitle">
          <div className="banner">
            <StaticImage
              className="d-md-block d-none"
              loading="lazy"
              placeholder="blurred"
              src="../assets/images/aboutus.jpg"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="关于我们"
              title="关于我们"
            />
            <StaticImage
              className="d-md-none d-block"
              loading="lazy"
              placeholder="blurred"
              src="../assets/images/ydd-aboutus.jpg"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="关于我们"
              title="关于我们"
            />
          </div>
          <div className="aboutTitle__text">关于我们</div>
        </div>
        <div className="container contactMain">
          <div className="row align-items-center flex-md-row-reverse ">
            <div className="col-md-6 col-12 mapWrap">
              <div style={{ zIndex: 1 }} id="mapContainer"></div>
            </div>
            <div className="contactContent col-md-6 col-12">
              <div className="aboutText">
                中企网络通信技术有限公司，简称中企通信，是中信集团旗下的子公司，于2000年8月成立，总部位于北京，在上海、苏州、广州、深圳、东莞、天津、杭州、武汉、成都、重庆等地设有分公司或办事处，致力为企业提供可信赖及综合的一站式信息通信技术（ICT）服务。
              </div>
              <div>
                <StaticImage
                  loading="lazy"
                  src="../assets/images/i-地址.png"
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="关于我们"
                  title="关于我们"
                />
                公司地址：
                <p> 福建省福州市仓山区特力林大厦3层</p>
              </div>
              <div>
                <StaticImage
                  loading="lazy"
                  src="../assets/images/i-邮箱.png"
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="关于我们"
                  title="关于我们"
                />
                邮箱：
                <p>services@vone.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
