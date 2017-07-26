import React from "react";
import {connect} from "react-redux";
import ReactAnimatedCSS from "./react-animated-css";
import {HashScroll, Route, Switch} from "../custom";

@connect()
export default class extends React.Component {
  render() {
    return (
      <div>
        <HashScroll/>
        <div>
          <div id="wrapper">
            <section id="main">
              <Switch>
                <Route path={"/react-animated-css.html"} component={ReactAnimatedCSS}/>
                <Route exact>
                  <div>
                    <header>
                      <span className="avatar"><img src="/public/images/avatar.png" alt=""/></span>
                      <h1>Fareed Alnamrouti</h1>
                      <p>Full Stack Developer</p>
                    </header>
                    <hr/>
                    <div>
                      <img src="/public/images/lol.jpg"/>
                    </div>
                    <ul className="actions">
                      <li><a href="/react-animated-css.html" className="button">React Animated CSS</a></li>
                    </ul>
                    <hr/>
                    <footer>
                      <ul className="icons">
                        <li>
                          <a href="https://www.linkedin.com/in/fareednamrouti" className="fa-linkedin" target="_blank">
                            LinkedIn
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/digital_flowers" className="fa-twitter" target="_blank">
                            Twitter
                          </a>
                        </li>
                        <li>
                          <a href="https://www.facebook.com/fareed.alnamrouti" className="fa-facebook" target="_blank">
                            Facebook
                          </a>
                        </li>
                      </ul>
                    </footer>
                  </div>
                </Route>
              </Switch>
            </section>
            <footer id="footer">
              <ul className="copyright">
                <li>&copy; Fareed Alnamrouti</li>
                <li>Design: <a href="http://html5up.net" target="_blank">HTML5 UP</a></li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
