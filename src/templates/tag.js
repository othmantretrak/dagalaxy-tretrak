import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query($tag: String!) {
    swapi {
      tagArticles(tag: $tag) {
        id
        title
        slug
        imgUri
      }
    }
  }
`
const Tag = props => {
  return (
    <Layout>
      <SEO
        title={props.pageContext.tag}
        keywords={[`${props.pageContext.tag}`, `Dagalaxy`, `تغريدة `]}
      />
      <div className="wrap">
        <h2 className="heading-h2">
          <span className="heading-span">{props.pageContext.tag}</span>
        </h2>
        <div className="card-list">
          {props.data.swapi.tagArticles.map(article => {
            return (
              <div key={article.slug} className="card">
                <Link to={`/${article.slug}`}>
                  <div className="thumb">
                    <img src={article.imgUri} alt={article.title} />
                  </div>

                  <div className="info">
                    <h4>{article.title}></h4>
                    <div className="meta">
                      <span>More...</span>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Tag
