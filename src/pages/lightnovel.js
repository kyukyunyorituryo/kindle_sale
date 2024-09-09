// src/pages/page.js
import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Share from "../components/share"

const LightNovel = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allFile.nodes
  const catesafe =data.site.siteMetadata.catesafe
  return (
      <Layout location={location} title={siteTitle}>

                  <h1 class="main-heading">kindleのライトノベルセール一覧</h1>
                  <ol style={{ listStyle: `none` }}
      >
        {posts.map(post => {
          const title = post.childJson.Saletitle || post.fields.slug
          var pubtag=post.childJson.Pubtag.split(',')
          var catetag=post.childJson.Catetag.split(',')
          catetag=catetag.filter(x => catesafe.includes(x))
          pubtag.length=10
          catetag.length=5
          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.childJson.Date}</small>
                  <div className="tags-article">
                   出版社：{pubtag && pubtag.length > 0 && pubtag.map(pubtag => {
                  return (
                  //<Link to={`/tags/${kebabCase(tag)}/`} itemProp="url">
                    <label>{pubtag}</label>
                  //</Link>
                      )
                    })}
                   カテゴリ：{catetag && catetag.length > 0 && catetag.map(catetag => {
                  return (
                  //<Link to={`/tags/${kebabCase(tag)}/`} itemProp="url">
                    <label>{catetag}</label>
                  //</Link>
                      )
                    })}
                </div>
                </header>
              </article>
            </li>
          )
        })}
      </ol>
        <Share
          title={`kindleのライトノベルセール一覧`}
          url={`${data.site.siteMetadata.siteUrl}/lightnovel`}
          description={`kindleのライトノベルセール一覧`}
          />
            <Bio />
          </Layout>
  )
}

export default LightNovel

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="kindleのライトノベルセール一覧、kindle本セール品を一覧で表示する「kindleセールチェック」" 
description={`kindleのライトノベルセール一覧、kindleセール品の中でライトノベルのものを一覧で表示します。`}/>

export const pageQuery = graphql`
query MyQuery {
  site {
    siteMetadata {
      title
      catesafe
      siteUrl
    }
  }
  allFile(
    sort: {fields: {slug: ASC}}
    limit: 1000
    filter: {extension: {eq: "json"}, childJson: {Catetag: {regex: "/ライトノベル/"}}}
  ) {
    nodes {
      childJson {
        Saletitle
        Day
        Title
        Date(formatString: "YYYY年MM月DD日")
        Catetag
        Pubtag
      }
      fields {
        slug
      }
    }
  }
}
`
