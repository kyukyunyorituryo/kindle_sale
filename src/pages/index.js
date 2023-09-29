// src/pages/page.js
import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allFile.nodes

  return (
      <Layout location={location} title={siteTitle}>
<p>Kindle本のセールを一覧で表示するサイトです。アマゾン以外のセール品と比較することで、アマゾンサイトで紹介されていないセール品まで網羅しています。<a rel="noreferrer" target="_blank" href="index2.html">旧ページはこちら</a></p>
<h1 class="main-heading"><a aria-current="page" class="" href="/">Amazon主催のセール</a></h1>
      <ol style={{ listStyle: `none` }}
      >
                 <li >
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                <a rel="noreferrer" target="_blank" href="https://amzn.to/3ZmSnqz">
                    ４社合同　池井戸潤フェア　最大30％オフ　９月２９日 まで
                </a>
                  </h2>
                </header>
              </article>
            </li>                 <li >
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                <a rel="noreferrer" target="_blank" href="https://amzn.to/3EZOoXP">
                    講談社　フィクション本　6,000冊以上　50％ポイント還元　１０月１２日 まで
                </a>
                  </h2>
                </header>
              </article>
            </li>
                  </ol>
                  <h1 class="main-heading"><a aria-current="page" class="" href="/">出版社別のセール</a></h1>
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

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="kindle本セール品を一覧で表示する「kindleセールチェック」" />

export const pageQuery = graphql`
query MyQuery {
   site {
      siteMetadata {
        title
      }
    }
  allFile(
    sort: {fields: {slug: ASC}}
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
