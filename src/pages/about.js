import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About Us" />
      <h1>About Us </h1>
      <p>
        If you have any questions about this Privacy Policy, please contact us
      </p>
      <p>
        <Link to="/contact">Contact Us</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
