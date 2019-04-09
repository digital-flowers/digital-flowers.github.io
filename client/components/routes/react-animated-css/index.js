import React from "react";
import {connect} from "react-redux";
import Highlight from "react-highlight.js/dist/main";
import {Animated} from "react-animated-css";

const animations = [
  "bounce",
  "flash",
  "pulse",
  "rubberBand",
  "shake",
  "headShake",
  "swing",
  "tada",
  "wobble",
  "jello",
  "bounceIn",
  "bounceInDown",
  "bounceInLeft",
  "bounceInRight",
  "bounceInUp",
  "bounceOut",
  "bounceOutDown",
  "bounceOutLeft",
  "bounceOutRight",
  "bounceOutUp",
  "fadeIn",
  "fadeInDown",
  "fadeInDownBig",
  "fadeInLeft",
  "fadeInLeftBig",
  "fadeInRight",
  "fadeInRightBig",
  "fadeInUp",
  "fadeInUpBig",
  "fadeOut",
  "fadeOutDown",
  "fadeOutDownBig",
  "fadeOutLeft",
  "fadeOutLeftBig",
  "fadeOutRight",
  "fadeOutRightBig",
  "fadeOutUp",
  "fadeOutUpBig",
  "flipInX",
  "flipInY",
  "flipOutX",
  "flipOutY",
  "lightSpeedIn",
  "lightSpeedOut",
  "rotateIn",
  "rotateInDownLeft",
  "rotateInDownRight",
  "rotateInUpLeft",
  "rotateInUpRight",
  "rotateOut",
  "rotateOutDownLeft",
  "rotateOutDownRight",
  "rotateOutUpLeft",
  "rotateOutUpRight",
  "hinge",
  "jackInTheBox",
  "rollIn",
  "rollOut",
  "zoomIn",
  "zoomInDown",
  "zoomInLeft",
  "zoomInRight",
  "zoomInUp",
  "zoomOut",
  "zoomOutDown",
  "zoomOutLeft",
  "zoomOutRight",
  "zoomOutUp",
  "slideInDown",
  "slideInLeft",
  "slideInRight",
  "slideInUp",
  "slideOutDown",
  "slideOutLeft",
  "slideOutRight",
  "slideOutUp"
];

const inAnimations = animations.filter(animation => !(/out/gi).test(animation));

const outAnimations = animations.filter(animation => !(/in/gi).test(animation));

@connect()
export default class extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      animationIn: "lightSpeedIn",
      animationOut: "zoomOutDown",
      duration: 1000,
      isVisible: true
    }
  }

  render() {
    const {animationIn, animationOut, duration, isVisible} = this.state;
    const code = `import {Animated} from "react-animated-css";
<Animated animationIn="${animationIn}" animationOut="${animationOut}" animationInDuration={${duration}} animationOutDuration={${duration}} isVisible={${isVisible}}>
    <img src="/public/images/demo.jpg"/>
</Animated>`;
    return (
      <div>
        <header className="inner">
          <h1>react-animated-css</h1>
        </header>
        <div className="row">
          <div className="col m6">
            <div className="field">
              <div className="row">
                <div className="col s5">
                  <label htmlFor="animation-in">Animation In</label>
                </div>
                <div className="col s7">
                  <div className="select-wrapper">
                    <select name="animation-in"
                            id="animation-in"
                            value={animationIn}
                            onChange={evt => this.setState({isVisible: true, animationIn: evt.target.value})}>
                      {inAnimations.map(animation => (
                        <option value={animation}>
                          {animation}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="field">
              <div className="row">
                <div className="col s5">
                  <label htmlFor="animation-out">Animation Out</label>
                </div>
                <div className="col s7">
                  <div className="select-wrapper">
                    <select name="animation-out"
                            id="animation-out"
                            value={animationOut}
                            onChange={evt => this.setState({isVisible: false, animationOut: evt.target.value})}>
                      {outAnimations.map(animation => (
                        <option value={animation}>
                          {animation}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="field">
              <div className="row">
                <div className="col s5">
                  <label htmlFor="animation-out">Duration</label>
                </div>
                <div className="col s7">
                  <div className="select-wrapper">
                    <select name="animation-out"
                            id="animation-out"
                            value={duration}
                            onChange={evt => this.setState({duration: evt.target.value})}>
                      {[400, 800, 1000, 1400, 1800, 2000, 3000].map(time => (
                        <option value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="field">
              <div className="row">
                <div className="col s5">
                  <label htmlFor="is-visible">Is Visible</label>
                </div>
                <div className="col s7">
                  <div className="switch">
                    <label>
                      Off
                      <input type="checkbox"
                             name="is-visible"
                             checked={isVisible}
                             onChange={() => this.setState({isVisible: !isVisible})}/>
                      <span className="lever"/>
                      On
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col s6">
            <Animated animationIn={animationIn} animationOut={animationOut}
                      animationInDuration={duration}
                      animationOutDuration={duration}
                      isVisible={isVisible}>
              <img src="/public/images/demo.jpg"/>
            </Animated>
          </div>
        </div>
        <div>
          <Highlight language="javascript">{code}</Highlight>
        </div>
      </div>
    )
  }
}
