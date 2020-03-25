import React, { Component } from "react"

class GoogleAd extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  }

  render() {
    return (
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1063328225356164"
        data-ad-slot="5092374925"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    )
  }
}

export default GoogleAd
