import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import Head from '../components/head'
import postStyle from './blog.module.scss'
import { DiscussionEmbed } from "disqus-react"


export const query = graphql`
  query($slug: String!) {
      contentfulBlogPost(slug: {eq: $slug }) {
          title
          slug
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

    const disqusConfig = {
        shortname: process.env.GATSBY_DISQUS_NAME,
        config: { title: props.data.contentfulBlogPost.title, identifier: props.data.contentfulBlogPost.slug },
    }

    return (
        <Layout className={postStyle.post}>
            <div className={postStyle.post}>
            <Head title={props.data.contentfulBlogPost.title} />
            <h2 className={postStyle.post}>{props.data.contentfulBlogPost.title}</h2>
            <div className={postStyle.post}>{documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}</div>          
            <p className={postStyle.post}>{props.data.contentfulBlogPost.publishedDate}</p>
            <DiscussionEmbed {...disqusConfig} />
            </div>
            
        </Layout>
        
    )
}

export default Blog