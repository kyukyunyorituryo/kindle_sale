
import React from "react"
import { graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Amazons from "../components/amazons"
import Share from "../components/share"

const BlogPostTemplate = ({
  data,
  location,
}) => {
var book = data.file.childrenJson
const siteTitle = data.site.siteMetadata?.title || `Title`
    return (
    <>
        <Layout location={location} title={siteTitle}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">「Kindleセール」　{data.file.childrenJson[0].Saletitle}</h1>
          <p>{data.file.childrenJson[0].Date}</p>
        </header>
        <Amazons book={book} />
        <hr />
        <Share
          title={data.file.childrenJson[0].Saletitle}
          url={`${data.site.siteMetadata.siteUrl}${data.file.fields.slug}`}
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
      title={data.file.childrenJson[0].Saletitle}
      ogpimage={data.file.childrenJson[0].ImageURL}
    />
  )
}

export default BlogPostTemplate


export  const query = graphql`
query MyQuery($slug: String!)  {
  file(extension: {eq: "json"},fields: {slug: { eq: $slug } }) {
    childrenJson {
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
    }
      fields {
      slug
    }
  }
      site {
      siteMetadata {
        title
        siteUrl
      }
    }
}`
