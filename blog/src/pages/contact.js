import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ABout = ({ data }) => {
    const {name, company} = data.site.siteMetadata.contact;
    return (
        <Layout>
        <SEO title="Contact" />
        <h1>Contact Us</h1>
        <p>Please send all inquiries to: </p>
        <div>{company}</div>
        <div>{`C/O ${name}`}</div>
        <div>{address}</div>

        <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
            <Image />
        </div>
        <Link to="/">Home</Link>
        </Layout>
    )
}

export default contact
export const query = graphql`
query {
    site {
        siteMetadata {
            contact {
                name
                company
                address
            }
        }
    }
}
`