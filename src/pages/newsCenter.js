import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { List, Card } from "antd"
import axios from "axios"
import Layout from "../components/layout"
import Seo from "../components/seo"

// import { withRouter } from "react-router-dom"

// import "./news_center.scss"

const { Meta } = Card
const listData = []
for (let i = 0; i < 23; i++) {
  listData.push({
    href: "https://ant.design",
    title: `ant design part ${i}`,
    avatar: "https://joeschmoe.io/api/v1/random",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  })
}

class newsCenter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newsData: [],
      totalSize: 12,
    }

    this.onItemClick = this.onItemClick.bind(this)
  }

  componentDidMount() {
    const that = this
    axios
      .get(
        "https://www.fastmock.site/mock/3a60302423a5db4ee8b58db290fdcafc/test/all_new_react?page=1"
      )
      .then(function (response) {
        console.log(response.data.data.userInfo)
        that.setState({
          newsData: response.data.data.userInfo,
        })
      })
      .catch(function (error) {
        console.log(error)
      })

    this.onPageChange = this.onPageChange.bind(this)
    this.onItemClick = this.onItemClick.bind(this)
  }

  componentWillUnmount() {}

  onPageChange(page, pageSize) {
    console.log("this onPageChange = " + page)
    const that = this
    axios
      .get(
        "https://www.fastmock.site/mock/3a60302423a5db4ee8b58db290fdcafc/test/all_new_react?page=" +
          page
      )
      .then(function (response) {
        console.log(response.data.data.userInfo)
        that.setState({
          newsData: response.data.data.userInfo,
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  onItemClick(index) {
    console.log("onItemClick:" + index.title)
  }
  render() {
    const { newsData, totalSize } = this.state
    const that = this
    return (
      <Layout>
        <Seo title="新闻中心" />
        <div>
          <StaticImage
            className="d-md-block d-none"
            loading="lazy"
            placeholder="blurred"
            src="../assets/images/newscenter.jpg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="新闻中心"
            title="新闻中心"
          />
          <StaticImage
            className="d-md-none d-block"
            loading="lazy"
            placeholder="blurred"
            src="../assets/images/ydd-newscenter.jpg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="新闻中心"
            title="新闻中心"
          />
        </div>
        <div className="news container">
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 4,
              xxl: 4,
            }}
            itemLayout="vertical"
            size="large"
            split={false}
            pagination={{
              onChange: page => {
                console.log(page)
                that.onPageChange(page)
              },
              pageSize: 8,
              total: 12,
              hideOnSinglePage: true,
            }}
            dataSource={newsData}
            header={<div className="news__newsTitle">新闻中心</div>}
            //   footer={
            //     <div>
            //       <b>ant design</b> footer part
            //     </div>
            //   }
            renderItem={(item, index) => (
              <List.Item key={item.title} className="news__listItem">
                <Card
                  onClick={() => {
                    console.log("onClick:" + item.id)
                    window.location.href = "/train/detail?id=" + (item.id % 10)
                    // this.onItemClick(item)
                  }}
                  hoverable
                  // style={{ width: 300 }}
                  cover={
                    <img
                      className="news__listItemImage"
                      alt="example"
                      src={item.avatar}
                    />
                  }
                >
                  <Meta title={item.showTitle} description={item.description} />
                </Card>
              </List.Item>
            )}
          />
        </div>
      </Layout>
    )
  }
}

export default newsCenter

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
    if (!res.ok) {
      throw new Error(`Response failed`)
    }
    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      headers: {
        status: 500,
      },
      props: {},
    }
  }
}
