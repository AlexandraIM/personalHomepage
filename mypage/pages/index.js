import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Index extends React.Component {
  render() {
    return (
      <div className="about">
        <h2>
          Hi I'm Alexandra
        </h2>
        <p>I'm a web developer with experience in analitic.</p>
        <p>Technologies I like to use are:</p>
        <ul>
          <li>JavaScript</li>
          <li>C#</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>jQuery</li>
          <li>Bootstrap</li>
          <li>Font Awesome</li>
        </ul>
        <p>Also always like to learn new and interesting frameworks.</p>
      </div>
    )
  }
}
