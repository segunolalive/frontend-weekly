import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Footer from '../components/footer'
import Layout from '../components/layout'
import SessionList from '../components/sessionList'
import Container from '../components/common/container'

export default function HomePage(props) {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const sessions = get(props, 'data.allContentfulSession.edges')

  return (
    <Layout location={props.location}>
      <Helmet title={siteTitle} />
      <Hero />
      <Container as="main" id="main-content">
        <SessionList sessions={sessions} />
      </Container>
      <Footer />
    </Layout>
  )
}

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
          slug
          title
          sessionDate
          videoUrl
          slides
        }
      }
    }
  }
`
