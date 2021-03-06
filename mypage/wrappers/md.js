import React from 'react'
import PropTypes from 'prop-types'
import 'css/style.css'
import 'css/font-awesome.min.css'
import Helmet from 'react-helmet'
import { config } from 'config'


export default class Markdown extends React.Component {
  static propTypes = {
    router: PropTypes.object,
  }

  render() {
    const post = this.props.route.page.data
    return (
      <div className="markdown">
        <Helmet title={`${config.siteTitle} | ${post.title}`} />
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
    )
  }
}
