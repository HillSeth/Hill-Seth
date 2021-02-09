import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ul>
    {
      DataCue.allContentfulBlogPost.edges.map(edge => (
        <li>
          <Link to={edge.node.slug} key={edge.node.id}>{edge.node.title}</Link>
        </li>
      ))
    }
    </ul>
  </Layout>
)

export default IndexPage
export const query = graphql`
{
  allContentfulBlogPost {
    edges {
      node {
        id
        title
        slug
      }
    }
  }
}
`