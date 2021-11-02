// eslint-disable-next-line no-undef
import React from "react"
import { Card } from "antd"
import axios from "axios"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./detail.scss"

var parseQueryString = function () {
  var str = window.location.search
  var objURL = {}

  str.replace(
    new RegExp("([^?=&]+)(=([^&]*))?", "g"),
    function ($0, $1, $2, $3) {
      objURL[$1] = $3
    }
  )
  return objURL
}

class Detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      content: "",
    }
  }
  componentDidMount() {
    var params = parseQueryString()
    console.log(params["id"])
    const that = this
    axios
      // .get("http://www.dell-lee.com/react/api/detail.json?id=" + params["id"])
      .get(
        "https://www.fastmock.site/mock/3a60302423a5db4ee8b58db290fdcafc/test/detail_react?id=" +
          params["id"]
      )
      .then(function (response) {
        console.log(response.data.data.content)
        that.setState({
          content: response.data.data.userInfo.content,
          title: response.data.data.userInfo.title,
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render() {
    return (
      <Layout>
        <SEO title={this.state.title} description={this.state.title} />
        <div className="detailTile d-md-none d-block"></div>
        <div className="container">
          <Card
            title={this.state.title}
            bordered={false}
            headStyle={{ textAlign: "center", fontSize: "32px" }}
          >
            <div dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
          </Card>
        </div>
      </Layout>
    )
  }
}
export default Detail
