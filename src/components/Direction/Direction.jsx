import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Direction extends Component {
  render() {

    return (
      <>
        <div onClick={this.props.function} className={this.props.class}>
          <FontAwesomeIcon icon={['fas', 'arrow-up']} className="my-auto"/>
        </div>
      </>
    )
  }
}

export default Direction;