import { Component } from "react";

class TagsSection extends Component {
  render() {
    return (
      <div className="tags-sec full-width">
        <ul>
          <li>
            <a href="./help-center.html" title="">
              Help Center
            </a>
          </li>
          <li>
            <a href="./about.html#" title="">
              About
            </a>
          </li>
          <li>
            <a href="./index.html#" title="">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="./index.html#" title="">
              Community Guidelines
            </a>
          </li>
          <li>
            <a href="./index.html#" title="">
              Cookies Policy
            </a>
          </li>
          <li>
            <a href="./index.html#" title="">
              Career
            </a>
          </li>
          <li>
            <a href="./index.html#" title="">
              Language
            </a>
          </li>
          <li>
            <a href="./index.html#" title="">
              Copyright Policy
            </a>
          </li>
        </ul>
        <div className="cp-sec">
          <img src="./images/lec-full.png" alt="" />
          <p>
            <img src="./images/cp.png" alt="" />
            Copyright 2019
          </p>
        </div>
      </div>
    );
  }
}

export default TagsSection;
