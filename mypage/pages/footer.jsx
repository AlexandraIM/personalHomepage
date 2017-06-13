import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'


export default class Footer extends React.Component{
  render(){
    return(
      <div className='footer'>
        <Link to={'https://www.linkedin.com/in/alexandra-imereli-52435129/'}>by AlexIM</Link>
      </div>
    )
  }
}