import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Bounce } from "react-reveal"
import "./style.scss"

const Superiority = ({}) => {
  const query = useStaticQuery(graphql`
    query {
      icon51: file(relativePath: { eq: "i-量身定制.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      icon52: file(relativePath: { eq: "i-开发规范.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      icon53: file(relativePath: { eq: "i-设计人性化.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      icon54: file(relativePath: { eq: "i-安全稳定.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      icon55: file(relativePath: { eq: "i-完整交付.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      icon56: file(relativePath: { eq: "i-完善售后.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `)

  const data = [
    {
      title: "综合规划及执行",
      describe:
        "按企业独特要求而设计的一站式专用私有云解决方案；可与中企云时代®SmartCLOUD Compute整合，实现高效能表现的混合云解决方案。",
      img: query.icon51.childImageSharp.gatsbyImageData,
    },
    {
      title: "定制迅速",
      describe:
        "可轻易按企业需求扩展，是全面的定制化智能解决方案，符合现今商业的实际环境",
      img: query.icon52.childImageSharp.gatsbyImageData,
    },
    {
      title: "弹性付费",
      describe: "弹性月费付款模式，免除前期投资风险。",
      img: query.icon53.childImageSharp.gatsbyImageData,
    },
    {
      title: "高度可靠",
      describe:
        "建基于已获取可信云、TL9000、ISO9001、ISO14001、ISO20000、ISO27001及ISO27017认证的云端基建。",
      img: query.icon54.childImageSharp.gatsbyImageData,
    },
    {
      title: "完整交付",
      describe:
        "域名/空间/备案等账号，源代码，技术文档等所有的输出物全部交付给甲方。",
      img: query.icon55.childImageSharp.gatsbyImageData,
    },
    {
      title: "售后客户及技术支援",
      describe: "包括硬件替换及7x24客户服务热线支持。",
      img: query.icon56.childImageSharp.gatsbyImageData,
    },
  ]
  return (
    <div
      css={{
        backgroundColor: "#fff",
      }}
    >
      <div className="container">
        <div className="superiority">
          <div className="title" css={{ textAlign: "center" }}>
            <h3>我们的优势</h3>
          </div>
          <div className="box row" css={{ overflow: "hidden" }}>
            {data.map((item, d) => (
              <div key={item.title} className="col-6 col-md-4 rcol">
                <Bounce top fraction={0.2} delay={d * 100} ssrFadeout>
                  <div className="box-item">
                    <GatsbyImage
                      image={item.img}
                      alt={item.describe}
                      title={item.title}
                    />
                    <h3>{item.title}</h3>
                    <p>{item.describe}</p>
                  </div>
                </Bounce>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Superiority
