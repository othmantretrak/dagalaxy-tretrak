import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div className="contact">
        <div className="email">
          <h1>Contact Us</h1>
          <p>Email:</p>
          <h3>contact@dagalaxy.com</h3>
        </div>
        <form className="myForm">
          <div className="contact">
            <label htmlFor="name">
              Name
              <input type="text" id="name" />
            </label>

            <label htmlFor="email">
              Email
              <input type="email" id="email" />
            </label>

            <button type="submit">Send</button>
          </div>
          <div className="message">
            <label>Message </label>
            <textarea id="msg" />
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default ContactPage
