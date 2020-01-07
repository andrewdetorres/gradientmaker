import React, { Component } from 'react'
import { SketchPicker } from 'react-color';
import { CopyBlock } from 'react-code-blocks'

class GradientSelector extends Component {
  state = {
    firstBackground: {
      r: 41,
      g: 128,
      b: 185,
      a: 1
    },
    secondBackground: {
      r: 109,
      g: 213,
      b: 250,
      a: 1
    },
    displayColorPicker: false,
    displaySecondColorPicker: false,
    codeBlock: ""
  };

  handleFirstChangeComplete = (color) => {
    console.log(color);
    this.setState({ firstBackground: color.rgb });
  };

  handleSecondChangeComplete = (color) => {
    console.log(color);
    this.setState({ secondBackground: color.rgb });
    // this.setState({
    //   codeBlock:
    // });

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

    const backgroundStyle = {
      background: `linear-gradient(rgba(${this.state.firstBackground.r},${this.state.firstBackground.g},${this.state.firstBackground.b},${this.state.firstBackground.a}),rgba(${this.state.secondBackground.r},${this.state.secondBackground.g},${this.state.secondBackground.b},${this.state.secondBackground.a}))`
    };

    const code = `
      background: linear-gradient(rgba(${this.state.firstBackground.r},${this.state.firstBackground.g},${this.state.firstBackground.b},${this.state.firstBackground.a}),rgba(${this.state.secondBackground.r},${this.state.secondBackground.g},${this.state.secondBackground.b},${this.state.secondBackground.a}))
    `;

    return (
      <div className="main-container" style={backgroundStyle}>
        <div className="row">
          <div className="col-md-6 col-12 text-center">
            <button onClick={ this.handleClick } className="btn btn-outline-dark">Pick Color</button>
            {firstPicker}
            <p>First: rgba({this.state.firstBackground.r}, {this.state.firstBackground.g}, {this.state.firstBackground.b}, {this.state.firstBackground.a})</p>
          </div>
          <div className="col-md-6 col-12 text-center">
            <button onClick={ this.handleSecondClick }>Pick Color</button>
            {secondPicker}
            <p>Second: rgba({this.state.secondBackground.r}, {this.state.secondBackground.g}, {this.state.secondBackground.b}, {this.state.secondBackground.a})</p>
          </div>
        </div>
        <div className="row">
          <CopyBlock
            text={code}
            language="bash"
            showLineNumbers={false}
            />
        </div>
      </div>
    );
  }
}

export default GradientSelector;