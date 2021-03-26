import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { H1 } from '../components/Heading'

const BlogPost = ({ data }) => {
    const ( title ) = data.contentfulBlogPost;

    return (
        <Layout>
        <h1>{title}</h1>
        <div dangerousSetInnerHTML={{__html: body.childMArkdownRemark.html}}></div>
        </Layout>
    );
}

export default BlogPost;

export const pageQuery = graphql`
query blogPostQuery($slug: String!) {
    contentfulBLogPost(slug: {eq: $slug}) {
        title
        slug
        body {
            childMarkdownRemark {
                html
            }
        }
    }
}
`