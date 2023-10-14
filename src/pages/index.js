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
<h1 class="main-heading">Amazon主催のセール</h1>
      <ol style={{ listStyle: `none` }}
      >
              <List url="https://t.co/sStXmdvrMn" title="Prime感謝祭｜KADOKAWAのKindle本ポイントキャンペーン　50％還元　１０月１５日まで" />
              <List url="https://t.co/fJKjZTxS5h" title="Kindle本ストア11周年キャンペーン　最大60％OFF　１０月２６日まで" />
              <List url="https://t.co/B6LiXPBhHm" title="Prime感謝祭｜ Kindle本キャンペーン　最大70％OFF　１０月１５日まで" />
              <List url="https://amzn.to/46c5uxA" title="薬屋のひとりごとTVアニメ放映開始＆最新刊配信！　 ヒーロー文庫11周年記念Kindle Unlimited読み放題フェア　最大90％OFF　１０月１５日 まで" />
              <List url="https://amzn.to/3tqxJKz" title="Gakkenグループ 秋の特大フェア　最大70％OFF　1,000冊 以上　１０月１９日 まで" />
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
