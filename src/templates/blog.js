import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import Head from '../components/head'
import postStyle from './blog.module.scss'

export const query = graphql`
  query($slug: String!) {
      contentfulBlogPost(slug: {eq: $slug }) {
          title
          publishedDate(formatString: "MMMM Do, YYYY")
          body {
              json
          }
      }
  }
`

const Blog = (props) => {

    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url} />
            }
        }
    }

    return (
        <Layout className={postStyle.post}>
            <div className={postStyle.post}>
            <Head title={props.data.contentfulBlogPost.title} />
            <h1 className={postStyle.post}>{props.data.contentfulBlogPost.title}</h1>
            <p className={postStyle.post}>{props.data.contentfulBlogPost.publishedDate}</p>
            <div className={postStyle.post}>{documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}</div>
            </div>
        </Layout>
    )
}

export default Blog