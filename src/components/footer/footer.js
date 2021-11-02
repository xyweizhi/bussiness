import * as React from "react"
import PropTypes from "prop-types"
import "./style.scss"

const Footer = ({ siteTitle }) => (
  <footer
    className="footer"
    css={{
      background: `#565D66`,
    }}
  >
    <div className="container">
      <div className="text">
        vOne
        提供全球物流，航空运输和远程信息的一站式咨询服务。如果您担心用户的接收体验不佳，请与我们联系。联系人电子邮件：
        <span className="text email">services@vone.com</span>
      </div>
      <div className="text mobile-email">services@vone.com</div>
      <div css={{ color: "#ffffff", margin: "5px 0" }}>
        Copyright ©2021 vone, Inc.
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
