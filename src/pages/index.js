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
<List url="https://amzn.to/3xzNNfu" title="Gakkenグループ大感謝フェア　40%ポイントバック　７月１７日 まで" />
<List url="https://amzn.to/45Pp57r" title="Prime Day 「ヤングジャンプ」大人気シリーズが最大50%ポイント還元　７月１７日 まで" />
<List url="https://amzn.to/3L1ysYc" title="【Prime Day】 最大80%OFF Kindle本(電子書籍) セール　７月１７日 まで" />
<List url="https://amzn.to/4eCTDxa" title="【Prime Day】マンガ・コミックのおすすめタイトル　最大80%OFF　７月１７日 まで" />
<List url="https://amzn.to/45NArbZ" title="【Prime Day】秋田書店のおすすめタイトル　最大80%OFF　７月１７日 まで" />
<List url="https://amzn.to/3zf1iSe" title="【Prime Day】一迅社のおすすめタイトル　最大80%OFF　７月１７日 まで" />
<List url="https://amzn.to/3VHE3Yf" title="【Prime Day】早川書房のおすすめタイトル　最大80%OFF　７月１７日 まで" />
<List url="https://amzn.to/4aC9ucd" title="Kindle Unlimited定額読み放題" />


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
