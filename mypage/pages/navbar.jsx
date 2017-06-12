import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

 class NabBar extends React.Component {
  render() {
    return (
      <div>
        <ul>
            <li>
                <Link to={prefixLink('/')}>About Me</Link>
            </li>
            <li>
                <Link to={prefixLink('/page-2/')}>Contacts</Link>
            </li>
        </ul>
      </div>
    )
  }
}
export default NabBar;