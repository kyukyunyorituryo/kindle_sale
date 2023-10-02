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
<p>Kindle本のセールを一覧で表示するサイトです。アマゾン以外のセール品と比較することで、アマゾンサイトで紹介されていないセール品まで網羅しています。<a rel="noreferrer" target="_blank" href="index2.html">旧ページはこちら</a></p>
<h1 class="main-heading"><a aria-current="page" class="" href="/">Amazon主催のセール</a></h1>
      <ol style={{ listStyle: `none` }}
      >

      <List url="https://amzn.to/3EZOoXP" title="講談社　フィクション本　6,000冊以上　50％ポイント還元　１０月１２日 まで" />
      <List url="https://amzn.to/3tfKQht" title="ニコニコカドカワ祭り 第１弾 【最大50%OFF】　計10,000点以上!" />
      <List url="https://amzn.to/3REf6MY" title="ニコニコカドカワ祭り 第１弾 コミック/ コミックエッセイ 最大50%OFF" />
      <List url="https://amzn.to/46cOvew" title="ニコニコカドカワ祭り 第１弾 ライトノベル 最大50%OFF" />
      <List url="https://amzn.to/3EYx5pU" title="ニコニコカドカワ祭り 第１弾  小説 エッセイ 最大50%OFF" />
      <List url="https://amzn.to/3EYXqEy" title="ニコニコカドカワ祭り 第１弾  ビジネス 趣味・実用 最大50%OFF" />
      <List url="https://amzn.to/45hrc1M" title="Kindle本読書の秋キャンペーン　最大50％OFF　１０月１２日 まで" />
      <List url="https://amzn.to/46c5uxA" title="薬屋のひとりごとTVアニメ放映開始＆最新刊配信！　 ヒーロー文庫11周年記念Kindle Unlimited読み放題フェア　最大90％OFF　１０月１５日 まで" />
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
