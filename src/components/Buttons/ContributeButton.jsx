import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ContributeButton extends Component {
  render() {
    return (
      <a href="https://github.com/andrewdetorres/quickgradient">
        <button className="btn btn-github text-white py-1 my-1">
          <FontAwesomeIcon icon={['fab', 'github']} className="mr-2 my-auto"/>
          Contribute
        </button>
      </a>
    )
  }
}

export default ContributeButton;