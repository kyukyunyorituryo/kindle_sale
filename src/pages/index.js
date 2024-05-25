// src/pages/page.js
import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import List from "../components/list"
import Share from "../components/share"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allFile.nodes
  const catesafe =data.site.siteMetadata.catesafe
  return (
      <Layout location={location} title={siteTitle}>
<p>Kindle本のセールを一覧で表示するサイトです。アマゾン以外のセール品と比較することで、アマゾンサイトで紹介されていないセール品まで網羅しています。<br/><Link to="/sort">新しい順番に表示</Link>、<Link to="/free">無料本まとめ</Link></p>

<p>出版社ごとのセール一覧：<Link to="/kadokawa">KADOKAWA</Link>、<Link to="/kodansha">講談社</Link>、<Link to="/akitashoten">秋田書店</Link>、<Link to="/hakusensha">白泉社</Link>、<Link to="/shueisha">集英社</Link>、<Link to="/tokuma">徳間書店</Link>、<Link to="/shougakukan">小学館</Link></p>
<p>カテゴリごとのセール一覧：<Link to="/manga">漫画</Link>、<Link to="/lightnovel">ライトノベル</Link>、<Link to="/novel">小説</Link></p>
<h1 class="main-heading">Amazon主催のセール</h1>
      <ol style={{ listStyle: `none` }}
      >
              <List url="https://amzn.to/4apng1E" title="【最大50％還元】Kindle本 ポイントキャンペーン　５月３０日 まで" />
              <List url="https://amzn.to/4arwXN7" title="【最大50％還元】Kindle本 ポイントキャンペーン｜SBクリエイティブ特集　５月３０日 まで" />
              <List url="https://amzn.to/3yqBZvV" title="【最大50％還元】Kindle本 ポイントキャンペーン　漫画　５月３０日 まで" />
              <List url="https://amzn.to/3K6r4tN" title="【最大50％還元】Kindle本 ポイントキャンペーン　ライトノベル　５月３０日 まで" />
              <List url="https://amzn.to/3wIQY3P" title="【最大50％還元】Kindle本 ポイントキャンペーン　小説　５月３０日 まで" />
              <List url="https://amzn.to/4bJD4gF" title="【最大50％還元】Kindle本 ポイントキャンペーン　趣味・実用　５月３０日 まで" />
              <List url="https://amzn.to/4ax2hK9" title="【最大50％還元】Kindle本 ポイントキャンペーン　タレント写真集　５月３０日 まで" />

              <List url="https://amzn.to/3Ka1l3G" title="【最大50％還元】Kindle本 ポイントキャンペーン　竹書房のおすすめ　５月３０日 まで" />
              <List url="https://amzn.to/3K3YV6V" title="【最大50％還元】Kindle本 ポイントキャンペーン　文藝春秋のおすすめ　５月３０日 まで" />


                  </ol>
                  <h1 class="main-heading">出版社別のセール</h1>
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
        <Share
          title={siteTitle}
          url={`${data.site.siteMetadata.siteUrl}`}
          />
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
      catesafe
      siteUrl
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
