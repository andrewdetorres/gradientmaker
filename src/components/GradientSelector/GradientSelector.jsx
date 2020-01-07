import React, { Component } from 'react'
import { SketchPicker } from 'react-color';
import { CopyBlock } from 'react-code-blocks'
import atomOneLight from 'react-code-blocks/build/cjs/themes/atom-one-light';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    direction: "to bottom,",
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

  ChangeDirectionTop = () => {
    this.setState({direction: 'to top,'})
  }
  ChangeDirectionTopRight = () => {
    this.setState({direction: 'to top right,'})
  }
  ChangeDirectionRight = () => {
    this.setState({direction: 'to right,'})
  }
  ChangeDirectionBottomRight = () => {
    this.setState({direction: 'to bottom right,'})
  }
  ChangeDirectionBottom = () => {
    this.setState({direction: 'to bottom,'})
  }
  ChangeDirectionBottomLeft = () => {
    this.setState({direction: 'to bottom left,'})
  }
  ChangeDirectionLeft = () => {
    this.setState({direction: 'to left,'})
  }
  ChangeDirectionTopLeft = () => {
    this.setState({direction: 'to top left,'})
  }

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
      background: `linear-gradient(${this.state.direction}rgba(${this.state.firstBackground.r},${this.state.firstBackground.g},${this.state.firstBackground.b},${this.state.firstBackground.a}),rgba(${this.state.secondBackground.r},${this.state.secondBackground.g},${this.state.secondBackground.b},${this.state.secondBackground.a}))`
    };

    const firstButtonStyle = {
      background: `rgba(${this.state.firstBackground.r},${this.state.firstBackground.g},${this.state.firstBackground.b},${this.state.firstBackground.a})`
    };

    const secondButtonStyle = {
      background: `rgba(${this.state.secondBackground.r},${this.state.secondBackground.g},${this.state.secondBackground.b},${this.state.secondBackground.a})`
    };

    const code = `
    background: rgba(${this.state.firstBackground.r},${this.state.firstBackground.g},${this.state.firstBackground.b},${this.state.firstBackground.a});
    background: -webkit-linear-gradient(${this.state.direction}rgba(${this.state.firstBackground.r},${this.state.firstBackground.g},${this.state.firstBackground.b},${this.state.firstBackground.a}),rgba(${this.state.secondBackground.r},${this.state.secondBackground.g},${this.state.secondBackground.b},${this.state.secondBackground.a}));
    background: linear-gradient(${this.state.direction}rgba(${this.state.firstBackground.r},${this.state.firstBackground.g},${this.state.firstBackground.b},${this.state.firstBackground.a}),rgba(${this.state.secondBackground.r},${this.state.secondBackground.g},${this.state.secondBackground.b},${this.state.secondBackground.a}));
    `;

    return (
      <div className="main-container d-flex justify-content-center align-items-center" style={backgroundStyle}>
        <div className="card w-50 border-0 shadow">
          <div className="card-body">
            <div className="row my-3">
              <div className="col w-auto text-center my-3">
                <h1>Quick Gradient</h1>
              </div>
            </div>
            <div className="row justify-content-center my-3">
              <div className="col w-auto text-center">
                <button onClick={ this.handleClick } className="color-button border-0" style={firstButtonStyle}></button>
                {firstPicker}
                <p>1st</p>
              </div>
              <div className="col w-auto text-center">
                <button onClick={ this.handleSecondClick } className="color-button border-0" style={secondButtonStyle}></button>
                {secondPicker}
                <p>2nd</p>
              </div>
            </div>

            <div className="row justify-content-around my-3">
              <div onClick={this.ChangeDirectionTop} className="grad grad-top">
                <FontAwesomeIcon icon={['fas', 'arrow-up']} className="my-auto"/>
              </div>
              <div onClick={this.ChangeDirectionTopRight} className="grad grad-top-right">
                <FontAwesomeIcon icon={['fas', 'arrow-up']} className="my-auto"/>
              </div>
              <div onClick={this.ChangeDirectionRight} className="grad grad-right">
                <FontAwesomeIcon icon={['fas', 'arrow-up']} className="my-auto"/>
              </div>
              <div onClick={this.ChangeDirectionBottomRight} className="grad grad-bottom-right">
                <FontAwesomeIcon icon={['fas', 'arrow-up']} className="my-auto"/>
              </div>
              <div onClick={this.ChangeDirectionBottom} className="grad grad-bottom">
                <FontAwesomeIcon icon={['fas', 'arrow-up']} className="my-auto"/>
              </div>
              <div onClick={this.ChangeDirectionBottomLeft} className="grad grad-bottom-left">
                <FontAwesomeIcon icon={['fas', 'arrow-up']} className="my-auto"/>
              </div>
              <div onClick={this.ChangeDirectionLeft} className="grad grad-left">
                <FontAwesomeIcon icon={['fas', 'arrow-up']} className="my-auto"/>
              </div>
              <div onClick={this.ChangeDirectionTopLeft} className="grad grad-top-left">
                <FontAwesomeIcon icon={['fas', 'arrow-up']} className="my-auto"/>
              </div>
            </div>
            <div className="row justify-content-center my-3 mx-auto">
              <CopyBlock
                text={code}
                language="text"
                theme={atomOneLight}
                showLineNumbers={false}
                wrapLines
                />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GradientSelector;