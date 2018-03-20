import React from "react";
import {connect} from "react-redux";
import Highlight from "react-highlight.js/dist/main";
import {AnimatedOnScroll} from "react-animated-css-onscroll";

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

const randomAnimations = [];

for (let i = 0; i < 10; i++) {
  randomAnimations.push(inAnimations.splice(Math.floor(Math.random() * inAnimations.length), 1)[0]);
}

@connect()
export default class extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>react-animated-css-onscroll</h1>
        </header>
        {randomAnimations.map(animationIn => (
            <div className="row" style={{padding: "100px 0"}}>
              <div className="col m6">
                <Highlight language="javascript">
                  {`import {AnimatedOnScroll} from "react-animated-css-onscroll";
<AnimatedOnScroll animationIn="${animationIn}">
    <img src="/public/images/demo.jpg"/>
</AnimatedOnScroll>`}
                </Highlight>
              </div>
              <div className="col m6">
                <AnimatedOnScroll animationIn={animationIn}>
                  <img src="/public/images/demo.jpg"/>
                </AnimatedOnScroll>
              </div>
            </div>
          )
        )}
      </div>
    )
  }
}
