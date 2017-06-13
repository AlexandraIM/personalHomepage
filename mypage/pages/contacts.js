import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import FontAwesome from 'react-fontawesome'

export default class Index extends React.Component {
  
  render() {
    return (
      <div className="contacts">
          <h5>You can contact me by Email or Facebook.</h5>
          <p>Also some of my works you can find on GitHub and CodePen</p>
          <p><FontAwesome name='envelope-o' size='2x' /> alexandra.imereli@gamil.com </p>
          <p><FontAwesome name='facebook' size='2x'/> link to facebook</p>
          <p><FontAwesome name='github' size='2x'/> link to GitHub</p>     
          <p><FontAwesome name="codepen" size='2x'/> link to code pen</p>
      </div>
    )
  }
}
