import React, { Component } from 'react'
import { SketchPicker } from 'react-color';

class GradientSelector extends Component {
  state = {
    firstBackground: {
      r: 51,
      g: 51,
      b: 51,
      a: 1
    },
    secondBackground: {
      r: 51,
      g: 51,
      b: 51,
      a: 1
    },
    displayColorPicker: false,
    displaySecondColorPicker: false,
  };

  handleFirstChangeComplete = (color) => {
    console.log(color);
    this.setState({ firstBackground: color.rgb });
  };

  handleSecondChangeComplete = (color) => {
    console.log(color);
    this.setState({ secondBackground: color.rgb });
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleSecondClick = () => {
    this.setState({ displaySecondColorPicker: !this.state.displaySecondColorPicker })
  };

  handleSecondClose = () => {
    this.setState({ displaySecondColorPicker: false })
  };

  render() {

    const firstPicker = this.state.displayColorPicker ?
    (
    <div className="popover-first">
      <div className="cover-first" onClick={ this.handleClose }/>
      <SketchPicker
        color={ this.state.firstBackground }
        onChangeComplete={ this.handleFirstChangeComplete }
      />
    </div>
    )
    : null;

    const secondPicker = this.state.displaySecondColorPicker ?
    (
    <div className="popover-first">
      <div className="cover-first" onClick={ this.handleSecondClose }/>
      <SketchPicker
        color={ this.state.secondBackground }
        onChangeComplete={ this.handleSecondChangeComplete }
      />
    </div>
    )
    : null;
    return (
      <>
        <button onClick={ this.handleClick }>Pick Color</button>
        {firstPicker}
        <button onClick={ this.handleSecondClick }>Pick Color</button>
        {secondPicker}
        <p>First: {this.state.firstBackground.r}, {this.state.firstBackground.g}, {this.state.firstBackground.b}, {this.state.firstBackground.a}</p>
        <p>Second: {this.state.secondBackground.r}, {this.state.secondBackground.g}, {this.state.secondBackground.b}, {this.state.secondBackground.a}</p>
      </>
    );
  }
}

export default GradientSelector;