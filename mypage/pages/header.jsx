import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import me from './img/me.jpeg'


 class NabBar extends React.Component {
  render() {
    return (
      <div className="navigation" >
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
export default class Header extends React.Component{

  render(){
    return(
      <div >
        <div className="header ">
          <Link to={prefixLink('/')} >Alexandra Imereli</Link>
          <img src={me} alt='My Photo'/>
        </div>
        <NabBar/>
      </div>
    )
  }
}