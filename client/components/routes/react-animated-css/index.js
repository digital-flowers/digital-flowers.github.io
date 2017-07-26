import React from "react";
import {connect} from "react-redux";
import Highlight from "react-highlight.js/dist/main";

@connect()
export default class extends React.Component {
  render() {
    const code = `
      import {Animated} from "react-animated-css";
      <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
          <div>
              hello world ;)
          </div>
      </Animated>  
    `;
    return (
      <div>
        <div>
          <Highlight language="javascript">{code}</Highlight>
        </div>
      </div>
    )
  }
}
