import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <List width={[1, 1 / 2, 2 / 3]} p={2}>
    {
      data.allContentfulBlogPost.edges.map(edge => (
        <li>
          <Link to={edge.node.slug} key={edge.node.id}>{edge.node.title}</Link>
          <div>
            <img src={edge.node.heroImage.fluid.src} alt="hero image" />
          </div>
          <div>{edge.node.body.childMarkdownRemark.excerpt}</div>
        </li>
      ))
    }
    </List>
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
        heroImage {
          fluid(maxWidth: 600) {
            src
          }
        }
        body {
          childMarkdownRemark {
            excerpt
          }
        }
      }
    }
  }
}
`