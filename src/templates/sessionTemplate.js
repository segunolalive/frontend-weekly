import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'

import Footer from '../components/footer'
import Layout from '../components/layout'
import Container from '../components/common/container'

import styles from './sessionTemplate.module.css'

export default function SessionTemplate({ data, ...props }) {
  const { sessionDate, slides, title, videoUrl } = data.contentfulSession
  const siteTitle = get(props, 'data.site.siteMetadata.title')

  return (
    <Layout location={props.location}>
      <Helmet title={siteTitle} />
      <Container as="main" id="main-content">
        <div className={styles.all}>
          <article className={styles.wrapper}>
            <div className={styles.videoContainer}>
              <div
                className={`${styles.video} fb-video`}
                data-href={videoUrl}
                data-width=""
                data-show-text="false"
                data-allowfullscreen="true"
              />
            </div>

            <div className={styles.metadata}>
              <p>{new Date(sessionDate).toDateString()}</p>
              <h1 className={styles.title}>{title}</h1>
              {slides && (
                <a className={styles.slides} href={slides} target="_blank" rel="nofollow noopener">
                  SLIDES
                </a>
              )}
            </div>
          </article>
        </div>
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
