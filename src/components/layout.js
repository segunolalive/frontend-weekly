import React from 'react'
import { Helmet } from 'react-helmet'
import '../styles/base.css'
import SEO from './SEO'
import Header from './header'

export default function Layout (props) {
    const { location, children } = props
    
    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div className="page">
        <SEO />
        <Helmet>
          <link rel="icon" type="image/png" href="/fw_logo.png" />
        </Helmet>
        <Header />
        {children}
      </div>
    )
  }
