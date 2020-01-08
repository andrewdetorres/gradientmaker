import React, { Component } from 'react'

class SupportButton extends Component {
  render() {
    return (
      <a href="https://www.buymeacoffee.com/8jtaCdy">
        <button className="btn btn-coffee text-white py-1 mx-3">
          <img
            src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
            alt="Buy me a coffee"
            class="mr-2 my-auto"
            style={{"height":"22px"}}
          />
          Buy me a coffee
        </button>
      </a>
    )
  }
}

export default SupportButton;