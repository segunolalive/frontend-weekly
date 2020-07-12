import React from 'react'
import { Helmet } from 'react-helmet'
import base from './base.css'
import SEO from './SEO'
import Header from './header'

export default function Layout (props) {
    const { location, children } = props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div class="page">
        <SEO />
        <Helmet>
          <link rel="icon" type="image/png" href="fw_logo.png" />
          <script
            async
            defer
            src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"
          ></script>
        </Helmet>
        <Header />
        {children}
      </div>
    )
  }
