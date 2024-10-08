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

<h1 class="main-heading">Amazon主催のセール</h1>
      <ol style={{ listStyle: `none` }}
      >
<List url="https://amzn.to/3TUgImn" title="秋マン!!2024 ジャンプコミックス 50%ポイント還元" />
<List url="https://amzn.to/47Vcgta" title="秋マン!!2024 ジャンプコミックス 50%ポイント還元　１０月１６日まで" />
<List url="https://amzn.to/3Y2tlgu" title="Gakkenグループ 秋の特大フェア １０月１７日まで" />
<List url="https://amzn.to/3XHkQXO" title="【最大70％OFF】Kindle本(電子書籍) 読書の秋セール　１０月１０日まで" />
<List url="https://amzn.to/3zCDGHC" title="【50%OFF】　計8,000点以上!　ニコニコカドカワ祭2024　第１弾　１０月１０日まで" />
<List url="https://amzn.to/4eIFcHg" title="講談社 Kindle本フェア" />
<List url="https://amzn.to/4gtBWAS" title="Amazonマンガ　セール＆キャンペーン" />
<List url="https://amzn.to/3XJ3OcV" title="出版社おすすめ セール＆キャンペーン" />


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
export const Head = ({data}) => <Seo title="kindle本セール品を一覧で表示する「kindleセールチェック」"  ogpimage="https://kyukyunyorituryo.github.io/i/densho512.png" description={data.site.siteMetadata.description}/>

export const pageQuery = graphql`
query MyQuery {
  site {
    siteMetadata {
      title
      catesafe
      siteUrl
      description
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
