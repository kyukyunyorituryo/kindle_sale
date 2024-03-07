// src/pages/page.js
import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import List from "../components/list"

const Sort = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allFile.nodes

  return (
      <Layout location={location} title={siteTitle}>
<p>Kindle本のセールを一覧で表示するサイトです。アマゾン以外のセール品と比較することで、アマゾンサイトで紹介されていないセール品まで網羅しています。<a rel="noreferrer" target="_blank" href="../index2.html">旧ページはこちら</a></p>
<h1 class="main-heading">Amazon主催のセール</h1>
      <ol style={{ listStyle: `none` }}
      >

              <List url="https://amzn.to/3u0PAI3" title="Kindle Unlimited定額読み放題" />
                  </ol>
                  <h1 class="main-heading">出版社別のセール</h1>
                  <ol style={{ listStyle: `none` }}
      >
        {posts.map(post => {
          const title = post.childJson.Saletitle || post.fields.slug

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
                </header>
              </article>
            </li>
          )
        })}
      </ol>
            <Bio />
          </Layout>
  )
}

export default Sort

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="追加日順に並べ替え「kindleセールチェック」" />

export const pageQuery = graphql`
query MyQuery {
  site {
    siteMetadata {
      title
    }
  }
  allFile(
    sort: {childJson: {Date: DESC}}
    limit: 1000
    filter: {extension: {eq: "json"}}
  ) {
    nodes {
      childJson {
        Saletitle
        Day
        Title
        Date(formatString: "YYYY年MM月DD日")
      }
      fields {
        slug
      }
    }
  }
}
`
