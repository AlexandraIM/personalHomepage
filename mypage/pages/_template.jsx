import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import Header from '../pages/header'
import Footer from '../pages/footer'

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.any
  }
  
  render() {
   
    return (
      <div className="body">
        <Helmet
          title={config.siteTitle}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        />
        <Header/>
        <div className="section">     
          {this.props.children}
        </div>
        <Footer/>
      </div>
    )
  }
}
