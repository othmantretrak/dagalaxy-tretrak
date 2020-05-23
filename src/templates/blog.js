import React from "react"
import stripHtml from "string-strip-html"
import { graphql, Link } from "gatsby"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share"
import { FacebookProvider, Page } from "react-facebook"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RelatedPost from "../components/related"
//import GoogleAd from "../components/GoogleAd"
//import InArticleAd from "../components/inArticleAd"

export const query = graphql`
  query($id: ID!) {
    swapi {
      article(id: $id) {
        title
        tags
        author
        cat {
          title
          slug
          articles(limit: 4) {
            id
            title
            imgUri
            slug
          }
        }
        excerpt
        imgUri
        content
      }
    }
  }
`

const Blog = props => {
  //const [hide, sethide] = React.useState("none")
  const related = props.data.swapi.article.cat.articles.filter(function(ele) {
    return ele.id !== props.pageContext.id
  })

  return (
    <Layout>
      <SEO
        title={props.data.swapi.article.title}
        keywords={props.data.swapi.article.tags}
        image={props.data.swapi.article.imgUri}
        description={`${stripHtml(props.data.swapi.article.excerpt).substring(
          0,
          160
        )}...`}
      />
      <div className="wrap blog">
        <h1>{props.data.swapi.article.title}</h1>
        <div className="thumb">
          <picture>
            <source
              media="(min-width: 1200px)"
              srcSet={`${props.data.swapi.article.imgUri}?w=800&fit=fill&fm=webp`}
              type="image/webp"
            />
            <source
              media="(min-width: 992px)"
              srcSet={`${props.data.swapi.article.imgUri}?w=600&fit=fill&fm=webp`}
              type="image/webp"
            />

            <img
              src={`${props.data.swapi.article.imgUri}?w=400&fit=fill&fm=webp`}
              alt={props.data.swapi.article.title}
            />
          </picture>
        </div>

        <div className="badgelist">
          <div>
            <span>Category: </span>
            <Link to={`/category/${props.data.swapi.article.cat.slug}`}>
              <p className="badge">{props.data.swapi.article.cat.title}</p>
            </Link>
          </div>
          <p className="badge">{props.data.swapi.article.author}</p>
        </div>
        <div className="content">
          <p
            dangerouslySetInnerHTML={{
              __html: props.data.swapi.article.excerpt,
            }}
          />
          <div className="ads-more">
            <div className="ads1">{/* <InArticleAd /> */}</div>
          </div>

          <div
            className="body-post"
            dangerouslySetInnerHTML={{
              __html: props.data.swapi.article.content,
            }}
          />

          <div className="ads1">{/* <GoogleAd /> */}</div>
        </div>
        <h3>Share This Post</h3>
        <div className="share">
          <FacebookShareButton
            quote={props.data.swapi.article.title}
            url={props.location.href}
          >
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <TwitterShareButton
            title={props.data.swapi.article.title}
            url={props.location.href}
          >
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
          <WhatsappShareButton
            title={props.data.swapi.article.title}
            url={props.location.href}
          >
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
        </div>

        <div className="page-fb">
          <span>Follow Us on Facebook</span>
          <FacebookProvider appId="991319730968312" language="en_EN">
            <Page
              href="https://www.facebook.com/Buzzbuzzu.magazine"
              tabs="timeline"
            />
          </FacebookProvider>
        </div>

        <RelatedPost related={related} />
        {props.data.swapi.article.tags.length > 0 && (
          <>
            <h3>Tags: </h3>
            <div className="blog-footer">
              <div className="tags">
                {props.data.swapi.article.tags.map(t => (
                  <Link to={`/tag/${t}`} key={t}>
                    <div className="badge">{t}</div>
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}

export default Blog
