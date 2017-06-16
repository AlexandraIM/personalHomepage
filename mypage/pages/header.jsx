import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import FontAwesome from 'react-fontawesome'
import me from './img/me.jpeg'


 class NabBar extends React.Component {
  render() {
    return (
      <div className="navigation" >
        <div className="wideDiv">
          <ul>
              <li>
                  <Link to={prefixLink('/')}>About Me</Link>
              </li>
              <li>
                <Link to={prefixLink('/experiance/')}>Experiance</Link>
              </li>
              <li>
                  <Link to={prefixLink('/contacts/')}>Contacts</Link>
              </li>
          </ul>
        </div>
        <div className="navNarrow">
            <FontAwesome name='bars' size='2x' onClick={this.toggle}/>
              <ul className="links">
                  <li>
                      <Link to={prefixLink('/')} onClick={this.toggle}>About Me</Link>
                  </li>
                  <li>
                    <Link to={prefixLink('/experiance/')}  onClick={this.toggle}>Experiance</Link>
                  </li>
                  <li>
                      <Link to={prefixLink('/contacts/')}  onClick={this.toggle}>Contacts</Link>
                  </li>
              </ul>
        </div>
      </div>
    )
    
  }
  toggle(){
      let links = document.querySelector('.links');
        if (links.style.display === 'block') {
            links.style.display = 'none';
        } else {
            links.style.display = 'block';
        }
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


