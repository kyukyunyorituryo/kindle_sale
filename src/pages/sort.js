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

              <List url="https://amzn.to/3Uw1Ag3" title="【最大50％OFF】Kindle 語学・教育関連本キャンペーン　２月２２日 まで" />

              <List url="https://amzn.to/3HSnVN4" title="【最大70%OFF】計2,500点以上！幻冬舎電本フェス本祭　２月２２日 まで" />

              <List url="https://amzn.to/3I0rukm" title="【最大50％還元】Kindle本ポイントキャンペーン　２月２９日 まで" />

              <List url="https://amzn.to/3wr3vIA" title="【最大50％還元】Kindle本ポイントキャンペーン : SBクリエイティブ　２月２９日 まで" />

              <List url="https://amzn.to/42I6CIk" title="【最大50％還元】Kindle本ポイントキャンペーン : 日経BP　２月２９日 まで" />

              <List url="https://amzn.to/3I0Rz2U" title="【Kindle50%ポイント還元】東洋経済のビジネス&実用書 2023年 ベスト200　２月２９日 まで" />

              <List url="https://amzn.to/3I4dpCy" title="【最大60%OFF】　計9,000点以上！ カドカワ祭ウィンター　２月２９日 まで" />

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
