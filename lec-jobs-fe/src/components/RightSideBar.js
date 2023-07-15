import { Component } from "react";

class RightSideBar extends Component{
    render(){
        return <div className="col-lg-3 pd-right-none no-pd">
        <div className="right-sidebar">
          <div
            className="widget widget-about"
            style={{ display: "none" }}
          >
            <img src="./images/lec.png" alt="" />
            <h3>Track Time on LEC</h3>
            <span>Pay only for the Hours worked</span>
            <div className="sign_link">
              <h3>
                <a href="./sign-in.html" title="">
                  Sign up
                </a>
              </h3>
              <a href="./index.html#" title="">
                Learn More
              </a>
            </div>
          </div>
          <div
            className="widget widget-jobs"
            style={{ display: "none" }}
          >
            <div className="sd-title">
              <h3>Top Jobs</h3>
              <i className="la la-ellipsis-v"></i>
            </div>
            <div className="jobs-list">
              <div className="job-info">
                <div className="job-details">
                  <h3>Senior Product Designer</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit..
                  </p>
                </div>
                <div className="hr-rate">
                  <span>$25/hr</span>
                </div>
              </div>
              <div className="job-info">
                <div className="job-details">
                  <h3>Senior UI / UX Designer</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit..
                  </p>
                </div>
                <div className="hr-rate">
                  <span>$25/hr</span>
                </div>
              </div>
              <div className="job-info">
                <div className="job-details">
                  <h3>Junior Seo Designer</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit..
                  </p>
                </div>
                <div className="hr-rate">
                  <span>$25/hr</span>
                </div>
              </div>
              <div className="job-info">
                <div className="job-details">
                  <h3>Senior PHP Designer</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit..
                  </p>
                </div>
                <div className="hr-rate">
                  <span>$25/hr</span>
                </div>
              </div>
              <div className="job-info">
                <div className="job-details">
                  <h3>Senior Developer Designer</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit..
                  </p>
                </div>
                <div className="hr-rate">
                  <span>$25/hr</span>
                </div>
              </div>
            </div>
          </div>
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
          <div
            className="widget widget-jobs"
            style={{ display: "none" }}
          >
            <div className="sd-title">
              <h3>Most Viewed This Week</h3>
              <i className="la la-ellipsis-v"></i>
            </div>
            <div className="jobs-list">
              <div className="job-info">
                <div className="job-details">
                  <h3>Senior Product Designer</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit..
                  </p>
                </div>
                <div className="hr-rate">
                  <span>$25/hr</span>
                </div>
              </div>
              <div className="job-info">
                <div className="job-details">
                  <h3>Senior UI / UX Designer</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit..
                  </p>
                </div>
                <div className="hr-rate">
                  <span>$25/hr</span>
                </div>
              </div>
              <div className="job-info">
                <div className="job-details">
                  <h3>Junior Seo Designer</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit..
                  </p>
                </div>
                <div className="hr-rate">
                  <span>$25/hr</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="widget suggestions full-width"
            style={{ display: "none" }}
          >
            <div className="sd-title">
              <h3>Most Viewed People</h3>
              <i className="la la-ellipsis-v"></i>
            </div>
            <div className="suggestions-list">
              <div className="suggestion-usd">
                <img src="./images/s1.png" alt="" />
                <div className="sgt-text">
                  <h4>Jessica William</h4>
                  <span>Graphic Designer</span>
                </div>
                <span>
                  <i className="la la-plus"></i>
                </span>
              </div>
              <div className="suggestion-usd">
                <img src="./images/s2.png" alt="" />
                <div className="sgt-text">
                  <h4>Saroj Shakya</h4>
                  <span>PHP Developer</span>
                </div>
                <span>
                  <i className="la la-plus"></i>
                </span>
              </div>
              <div className="suggestion-usd">
                <img src="./images/s3.png" alt="" />
                <div className="sgt-text">
                  <h4>Poonam</h4>
                  <span>Wordpress Developer</span>
                </div>
                <span>
                  <i className="la la-plus"></i>
                </span>
              </div>
              <div className="suggestion-usd">
                <img src="./images/s4.png" alt="" />
                <div className="sgt-text">
                  <h4>Bill Gates</h4>
                  <span>C &amp; C++ Developer</span>
                </div>
                <span>
                  <i className="la la-plus"></i>
                </span>
              </div>
              <div className="suggestion-usd">
                <img src="./images/s5.png" alt="" />
                <div className="sgt-text">
                  <h4>Jessica William</h4>
                  <span>Graphic Designer</span>
                </div>
                <span>
                  <i className="la la-plus"></i>
                </span>
              </div>
              <div className="suggestion-usd">
                <img src="./images/s6.png" alt="" />
                <div className="sgt-text">
                  <h4>Saroj Shakya</h4>
                  <span>PHP Developer</span>
                </div>
                <span>
                  <i className="la la-plus"></i>
                </span>
              </div>
              <div className="view-more">
                <a href="./index.html#" title="">
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
}
export default RightSideBar;