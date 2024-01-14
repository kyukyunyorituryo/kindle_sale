// src/pages/page.js
import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import List from "../components/list"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allFile.nodes

  return (
      <Layout location={location} title={siteTitle}>
<p>Kindle本のセールを一覧で表示するサイトです。アマゾン以外のセール品と比較することで、アマゾンサイトで紹介されていないセール品まで網羅しています。<a rel="noreferrer" target="_blank" href="index2.html">旧ページはこちら</a>、<a rel="noreferrer" target="_blank" href="sort">新しい順番に表示</a></p>
<h1 class="main-heading">Amazon主催のセール</h1>
      <ol style={{ listStyle: `none` }}
      >
              <List url="https://amzn.to/3RZq7Hd" title="【最大70％OFF】Kindle ビジネス・ファイナンス本 セール　１月２５日 まで" />
              <List url="https://amzn.to/3RW1prj" title="SBクリエイティブ　ビジネス書キャンペーン 50％OFF　１月２５日 まで" />
              <List url="https://amzn.to/3u0PAI3" title="Kindle Unlimited定額読み放題" />
                  </ol>
                  <h1 class="main-heading">出版社別のセール</h1>
                  <ol style={{ listStyle: `none` }}
      >
        {posts.map(post => {
          const title = post.childJson.Saletitle || post.fields.slug
          var pubtag=post.childJson.Pubtag.split(',')
          var catetag=post.childJson.Catetag.split(',')
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
                    <button>{pubtag}</button>
                  //</Link>
                      )
                    })}
                   カテゴリ：{catetag && catetag.length > 0 && catetag.map(catetag => {
                  return (
                  //<Link to={`/tags/${kebabCase(tag)}/`} itemProp="url">
                    <button>{catetag}</button>
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
