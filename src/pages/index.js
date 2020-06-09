import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Footer from '../components/footer'
import Layout from '../components/layout'
import SessionList from '../components/sessionList'
import Container from '../components/common/container'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const sessions = get(this, 'props.data.allContentfulSession.edges')

    return (
      <Layout location={this.props.location}>
          <Helmet title={siteTitle} />
          <Hero />
          <Container as="main" id="main-content">
            <SessionList sessions={sessions} />
          </Container>
          <Footer />
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
          slides
        }
      }
    }
  }
`
