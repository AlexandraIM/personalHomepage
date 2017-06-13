import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Experiance extends React.Component {
  
  render() {
    return (
      <div className="experiance">

          <h4>Experiance</h4>
          <h5>C#/.Net/Javascript Developer</h5>
          <p><b>Intercomputer Global Services GmbH&Co.KG</b></p>
          <ul>
            <li>Participation in the development of information systems, in accordance with the objectives derived from the technical project manager</li>
            <li>tasks to support and optimize the existing information systems</li>
            <li>performance testing and optimization of emerging and existing information systems</li>
            <li>preparation of technical documentation</li>
            <li>develop client side of SharePoint Site</li>
          </ul>
          <hr/>
          <h5>Junior c#/Javascript developer</h5>
          <p><b>iBPM Service LLC</b></p>
          <ul>
            <li>Desing and develop corporate site for company</li>
            <li>Implement responsive design</li>
            <li>implement multilingual site interface</li>
          </ul>
          <hr/>
          <h5>Leading Distribution and Product Planing Specialist</h5>
            <p><b>Astelit</b></p>
            <ul>
              <li>Product Planning: SP, SIM card, raw materials, packing (production, warehouses, market)</li>
              <li>Provide information about customers’ sales and stocks of company partners</li>
              <li>Prepare reporting of shipment and its target fulfillment by regions</li>
              <li>Analysis of Partners’ activities and KASE results</li>
              <li>Analysis of reports data, presentation preparation and summary providing for business solutions</li>
              <li>Supporting in Ad hocs and requests of management and other functional groups</li>
            </ul>
      </div>
    )
  }
}