import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'

import Session from '../components/session'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const sessions = get(this, 'props.data.allContentfulSession.edges')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <Hero />
          <div className="wrapper">
            <h2 className="section-headline">Recent videos</h2>
            <ul className="article-list">
              {sessions.map(({ node }) => {
                const { id, title, videoUrl, sessionDate, slides } = node
                return (
                  <li key={id}>
                    <Session
                      url={videoUrl}
                      title={title}
                      slides={slides}
                      date={sessionDate}
                    />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulSession(sort: { fields: [sessionDate], order: DESC }) {
      edges {
        node {
          id
          title
          videoUrl
          sessionDate
        }
      }
    }
  }
`
