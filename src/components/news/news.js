import * as React from "react"
import { List, Card, Space } from "antd"
import "./style.scss"

const { Meta } = Card

const imgData = [
  "http://inews.gtimg.com/newsapp_ls/0/14127046424_640330/0",
  "http://inews.gtimg.com/newsapp_ls/0/14126457208_640330/0",
  "http://inews.gtimg.com/newsapp_ls/0/14126442702_640330/0",
  "http://inews.gtimg.com/newsapp_ls/0/14127161275_640330/0",
  "http://inews.gtimg.com/newsapp_ls/0/14118428256_640330/0",
  "http://inews.gtimg.com/newsapp_ls/0/14127135687_640330/0",
  "http://inews.gtimg.com/newsapp_ls/0/14125333431_640330/0",
  "http://inews.gtimg.com/newsapp_ls/0/14125934353_640330/0",
]

const titleData = [
  "小米汽车薪酬曝光",
  "苹果不送充电头了？",
  "OPPO之朋友圈",
  "国产电动车有没有核心技术？",
  "算法注入价值观？",
  "涌入“夕阳”房地产？",
  "元宇宙",
  "外媒：脸书=“死亡”？",
]
const descriptionData = [
  "小米汽车经理级工程师薪酬曝光，年薪60万配100万期权",
  "苹果手机为什么不送充电头了？",
  "OPPO“扩列”汽车朋友圈",
  "这一届国产电动车企，有没有核心技术？",
  "科技巨头该为算法推荐注入价值观吗？",
  "互联网大厂高管，为何涌入“夕阳”房地产？",
  "元宇宙是不是蓄谋已久的资本骗局？20分钟深度解析",
  "外媒：脸书公司新名称和希伯来语“死亡”读音相似",
]

const listData = []
for (let i = 0; i < 8; i++) {
  listData.push({
    id: i + 1,
    href: "https://ant.design",
    title: `ant design part ${i}`,
    avatar: imgData[i], //`https://joeschmoe.io/api/v1/random${i}`,
    showTitle: titleData[i],
    description: descriptionData[i],
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  })
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
)

const Mynews = () => (
  <div className="news container">
    <List
      grid={{
        gutter: 10,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 4,
        xxl: 4,
      }}
      itemLayout="vertical"
      size="large"
      dataSource={listData}
      split={false}
      header={<div className="news__newsTitle">新闻中心</div>}
      renderItem={item => (
        <List.Item key={item.title} className="news__listItem">
          <Card
            onClick={() => {
              window.location.href = "/train/detail?id=" + (item.id % 10)
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
)
export default Mynews
