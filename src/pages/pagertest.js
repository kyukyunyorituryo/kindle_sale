import React from 'react';
import {  graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Share from "../components/share"
import Paginate from "../components/paginate"
const Free = ({
  data,
  location,
}) => {


var book = data.allJson.nodes
 const catesafe =data.site.siteMetadata.catesafe
 if(data.allJson.nodes[0].Pubtag){
var pubtag=data.allJson.nodes[0].Pubtag.split(',')
}else {
  pubtag=["出版社なし"]
}
 if(data.allJson.nodes[0].Catetag){
var catetag=data.allJson.nodes[0].Catetag.split(',')
}else {
  catetag=["カテゴリーなし"]
}
catetag=catetag.filter(x => catesafe.includes(x))
var freetitle=`無料本まとめ`
pubtag.length=10
catetag.length=10
console.log(book.length)//.slice(2, 5))
const siteTitle = data.site.siteMetadata?.title || `Title`
  // Example items, to simulate fetching from another resources.
  

    return (
    <>
        <Layout location={location} title={siteTitle}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline"> {`「Kindleセール」`+ freetitle}</h1>
          {}
        </header>
        <Paginate itemsPerPage={10} items={book} />
        <hr />
        <Share
          title={freetitle}
          url={`${data.site.siteMetadata.siteUrl}/free`}
          />
        <footer>
          <Bio />
        </footer>
          </article>
        </Layout>
        </>
    )
}
export const Head = ({ data}) => {
  return (
    <Seo
      title={`kindle無料本まとめ`}
      ogpimage={data.allJson.nodes[0].ImageURL}
      description={`kindle無料本まとめ、kindleセール品の中で無料のものを一覧で表示します。`}
    />
  )
}

export default Free

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
//export const Head = () => <Seo title="kindle本セール品を一覧で表示する「kindleセールチェック」" />

export const pageQuery = graphql`
query MyQuery {
  allJson(filter: {Price: {eq: 0}}) {
    nodes {
      Asin
      Booktype
      Category
      Contributor
      ImageURL
      Points
      Price
      Publisher
      Title
      URL
      Saletitle
      Date(formatString: "YYYY年MM月DD日")
      Catetag
      Pubtag
    }
  }      site {
      siteMetadata {
        title
        siteUrl
        catesafe
      }
    }
}
`
