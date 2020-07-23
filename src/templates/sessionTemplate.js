import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'

import Footer from '../components/footer'
import Layout from '../components/layout'
import Session from '../components/session'
import Container from '../components/common/container'

export default function SessionTemplate({ data, ...props }) {
  const { title } = data.contentfulSession
  const siteTitle = get(data, 'site.siteMetadata.title')

  const pageTitle = `${siteTitle} | ${title}`

  return (
    <Layout location={props.location}>
      <Helmet title={pageTitle} />
      <Container>
        <Session {...data.contentfulSession} />
      </Container>
      <Footer />
    </Layout>
  )
}

export const pageQuery = graphql`
  query SessionQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulSession(slug: { eq: $slug }) {
      slides
      videoUrl
      title
      sessionDate
    }
  }
`
