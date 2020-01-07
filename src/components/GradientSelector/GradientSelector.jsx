import React, { Component } from 'react'
import { SketchPicker } from 'react-color';
import { CopyBlock } from 'react-code-blocks'
import atomOneLight from 'react-code-blocks/build/cjs/themes/atom-one-light';

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

    const firstButtonStyle = {
      background: `rgba(${this.state.firstBackground.r},${this.state.firstBackground.g},${this.state.firstBackground.b},${this.state.firstBackground.a})`
    };

    const secondButtonStyle = {
      background: `rgba(${this.state.secondBackground.r},${this.state.secondBackground.g},${this.state.secondBackground.b},${this.state.secondBackground.a})`
    };

    const code = `
      background: linear-gradient(rgba(${this.state.firstBackground.r},${this.state.firstBackground.g},${this.state.firstBackground.b},${this.state.firstBackground.a}),rgba(${this.state.secondBackground.r},${this.state.secondBackground.g},${this.state.secondBackground.b},${this.state.secondBackground.a}))
    `;

    return (
      <div className="main-container d-flex justify-content-center align-items-center" style={backgroundStyle}>
        <div className="card w-50">
          <div className="card-body">
            <div className="row my-3">
              <div className="col-md-6 col-12 text-center">
              </div>
            </div>
            <div className="row justify-content-center my-3">
              <div className="col-2 text-center">
                <button onClick={ this.handleClick } className="color-button border-0" style={firstButtonStyle}></button>
                {firstPicker}
              </div>
              <div className="col-2 text-center">
                <button onClick={ this.handleSecondClick } className="color-button border-0" style={secondButtonStyle}></button>
                {secondPicker}
              </div>
            </div>
            <div className="row justify-content-center my-3">
              <CopyBlock
                text={code}
                language="text"
                theme={atomOneLight}
                showLineNumbers={false}
                />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GradientSelector;