import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="notfound">
      <h1>Sorry!</h1>
      <h3>
        We couldn't find that page.
        <Link to="/">go to Home page.</Link>
      </h3>
    </div>
  </Layout>
)

export default NotFoundPage
