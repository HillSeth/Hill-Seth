import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 error" />
    <h1>404: Page Not Found</h1>
    <p>You just hit a route that does&#39;not exist...</p>
  </Layout>
)

export default NotFoundPage
