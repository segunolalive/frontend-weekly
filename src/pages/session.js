import React from 'react'
import { useQueryParam, StringParam } from 'use-query-params'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'

export default function Session(props) {
  const [id] = useQueryParam('id', StringParam)
  console.log(props);
  return (
    <>
      <div>Session Page. Current page is {id}.</div>
      <code>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </code>
    </>
  )
}

// export const pageQuery = graphql`
//   query SessionQuery($id: String!) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     contentfulSession(id: { eq: $id }) {
//       id
//       slides
//       videoUrl
//       title
//     }
//   }
// `
