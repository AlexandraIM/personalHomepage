import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import NavBar from '../pages/navbar'

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.any
  }
  
  render() {
   
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        />
        <NavBar/>
        <div>     
          {this.props.children}
        </div>
      </div>
    )
  }
}
