import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ShareButton extends Component {
  render() {
    return (
      <a href="https://twitter.com/intent/tweet?text=I%20used%20QuickGradient%20to%20generate%20my%20CSS,%20check%20it%20out%20at%20https://quickgradient.com">
        <button className="btn btn-twitter text-white py-1">
          <FontAwesomeIcon icon={['fab', 'twitter']} className="mr-2 my-auto"/>
          Share
        </button>
      </a>
    )
  }
}

export default ShareButton;