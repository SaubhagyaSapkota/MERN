import { Component } from "react";

class MainSection extends Component{
    render(){
        return <div className="col-lg-6 col-md-8 no-pd">
        <div className="main-ws-sec">
          <div className="post-topbar">
            <div className="user-picy">
              <img src="./images/me.jpg" alt="" />
            </div>
            <div className="post-st">
              <ul>
                <li>
                  <a
                    className="post-jb active"
                    href="./index.html#"
                    title=""
                  >
                    Post a Job
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="posts-section">
            <div className="post-bar">
              <div className="post_topbar">
                <div className="usy-dt">
                  <img src="./images/me.jpg" alt="" />
                  <div className="usy-name">
                    <h3>Saubhagya Sapkota</h3>
                    <span>2 min ago</span>
                  </div>
                </div>
                <div className="ed-opts">
                  <a
                    href="./index.html#"
                    title=""
                    className="ed-opts-open"
                  >
                    <i className="la la-ellipsis-v"></i>
                  </a>
                  <ul className="ed-options">
                    <li>
                      <a href="./index.html#" title="">
                        Edit Post
                      </a>
                    </li>
                    <li>
                      <a href="./index.html#" title="">
                        Unsaved
                      </a>
                    </li>
                    <li>
                      <a href="./index.html#" title="">
                        Unbid
                      </a>
                    </li>
                    <li>
                      <a href="./index.html#" title="">
                        Close
                      </a>
                    </li>
                    <li>
                      <a href="./index.html#" title="">
                        Hide
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="epi-sec">
                <ul className="descp">
                  <li>
                    <img src="./images/icon8.png" alt="" />
                    <span>Epic Coder</span>
                  </li>
                  <li>
                    <img src="./images/icon9.png" alt="" />
                    <span>India</span>
                  </li>
                </ul>
                <ul
                  className="bk-links"
                  style={{ display: "none" }}
                >
                  <li>
                    <a href="./index.html#" title="">
                      <i className="la la-bookmark"></i>
                    </a>
                  </li>
                  <li>
                    <a href="./index.html#" title="">
                      <i className="la la-envelope"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="job_descp">
                <h3>Senior Wordpress Developer</h3>
                <ul className="job-dt">
                  <li>
                    <a href="./index.html#" title="">
                      Full Time
                    </a>
                  </li>
                  <li>
                    <span>$30 / hr</span>
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Aliquam luctus hendrerit metus, ut
                  ullamcorper quam finibus at. Etiam id magna sit
                  amet...
                  <a href="./index.html#" title="">
                    view more
                  </a>
                </p>
                <ul className="skill-tags">
                  <li>
                    <a href="./index.html#" title="">
                      HTML
                    </a>
                  </li>
                  <li>
                    <a href="./index.html#" title="">
                      PHP
                    </a>
                  </li>
                  <li>
                    <a href="./index.html#" title="">
                      CSS
                    </a>
                  </li>
                  <li>
                    <a href="./index.html#" title="">
                      Javascript
                    </a>
                  </li>
                  <li>
                    <a href="./index.html#" title="">
                      Wordpress
                    </a>
                  </li>
                </ul>
              </div>
              <div className="job-status-bar">
                <ul className="like-com">
                  <li>
                    <a href="./index.html#">
                      <i className="fas fa-heart"></i> Like
                    </a>
                    <img src="./images/liked-img.png" alt="" />
                    <span>25</span>
                  </li>
                  <li>
                    <a href="./index.html#" className="com">
                      <i className="fas fa-comment-alt"></i> Comment
                      15
                    </a>
                  </li>
                </ul>
                <a href="./index.html#">
                  <i className="fas fa-eye"></i>Views 50
                </a>
              </div>
            </div>
            <div
              className="top-profiles"
              style={{ display: "none" }}
            >
              <div className="pf-hd">
                <h3>Top Profiles</h3>
                <i className="la la-ellipsis-v"></i>
              </div>
              <div className="profiles-slider slick-initialized slick-slider">
                <span
                  className="slick-previous slick-arrow"
                  style={{ display: " inline" }}
                ></span>
                <div className="slick-list draggable">
                  <div
                    className="slick-track"
                    style={{
                      opacity: 1,
                      width: "2415px",
                      transform: "translate3d(-805px, 0px, 0px)",
                      transition: "transform 500ms ease 0s",
                    }}
                  >
                    <div
                      className="user-profy slick-slide slick-cloned"
                      data-slick-index="-3"
                      aria-hidden="true"
                      style={{ width: "153px" }}
                      tabIndex="-1"
                    >
                      <img src="./images/user1.png" alt="" />
                      <h3>Saroj Shakya</h3>
                      <span>Graphic Designer</span>
                      <ul>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="followw"
                            tabIndex="-1"
                          >
                            Follow
                          </a>
                        </li>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="envlp"
                            tabIndex="-1"
                          >
                            <img
                              src="./images/envelop.png"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="hire"
                            tabIndex="-1"
                          >
                            hire
                          </a>
                        </li>
                      </ul>
                      <a
                        href="./index.html#"
                        title=""
                        tabIndex="-1"
                      >
                        View Profile
                      </a>
                    </div>
                    <div
                      className="user-profy slick-slide slick-cloned"
                      data-slick-index="-2"
                      aria-hidden="true"
                      style={{ width: "153px" }}
                      tabIndex="-1"
                    >
                      <img src="./images/user2.png" alt="" />
                      <h3>Saroj Shakya</h3>
                      <span>Graphic Designer</span>
                      <ul>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="followw"
                            tabIndex="-1"
                          >
                            Follow
                          </a>
                        </li>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="envlp"
                            tabIndex="-1"
                          >
                            <img
                              src="./images/envelop.png"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="hire"
                            tabIndex="-1"
                          >
                            hire
                          </a>
                        </li>
                      </ul>
                      <a
                        href="./index.html#"
                        title=""
                        tabIndex="-1"
                      >
                        View Profile
                      </a>
                    </div>
                    <div
                      className="user-profy slick-slide slick-cloned"
                      data-slick-index="-1"
                      aria-hidden="true"
                      style={{ width: "153px" }}
                      tabIndex="-1"
                    >
                      <img src="./images/user3.png" alt="" />
                      <h3>Saroj Shakya</h3>
                      <span>Graphic Designer</span>
                      <ul>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="followw"
                            tabIndex="-1"
                          >
                            Follow
                          </a>
                        </li>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="envlp"
                            tabIndex="-1"
                          >
                            <img
                              src="./images/envelop.png"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="hire"
                            tabIndex="-1"
                          >
                            hire
                          </a>
                        </li>
                      </ul>
                      <a
                        href="./index.html#"
                        title=""
                        tabIndex="-1"
                      >
                        View Profile
                      </a>
                    </div>
                    <div
                      className="user-profy slick-slide"
                      data-slick-index="0"
                      aria-hidden="true"
                      style={{ width: "153px" }}
                      tabIndex="-1"
                    >
                      <img src="./images/user1.png" alt="" />
                      <h3>Saroj Shakya</h3>
                      <span>Graphic Designer</span>
                      <ul>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="followw"
                            tabIndex="-1"
                          >
                            Follow
                          </a>
                        </li>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="envlp"
                            tabIndex="-1"
                          >
                            <img
                              src="./images/envelop.png"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="hire"
                            tabIndex="-1"
                          >
                            hire
                          </a>
                        </li>
                      </ul>
                      <a
                        href="./index.html#"
                        title=""
                        tabIndex="-1"
                      >
                        View Profile
                      </a>
                    </div>
                    <div
                      className="user-profy slick-slide"
                      data-slick-index="1"
                      aria-hidden="true"
                      style={{ width: "153px" }}
                      tabIndex="0"
                    >
                      <img src="./images/user2.png" alt="" />
                      <h3>Saroj Shakya</h3>
                      <span>Graphic Designer</span>
                      <ul>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="followw"
                            tabIndex="0"
                          >
                            Follow
                          </a>
                        </li>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="envlp"
                            tabIndex="0"
                          >
                            <img
                              src="./images/envelop.png"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="hire"
                            tabIndex="0"
                          >
                            hire
                          </a>
                        </li>
                      </ul>
                      <a href="./index.html#" title="" tabIndex="0">
                        View Profile
                      </a>
                    </div>
                    <div
                      className="user-profy slick-slide slick-current slick-active"
                      data-slick-index="2"
                      aria-hidden="false"
                      style={{ width: "153px" }}
                      tabIndex="0"
                    >
                      <img src="./images/user3.png" alt="" />
                      <h3>Saroj Shakya</h3>
                      <span>Graphic Designer</span>
                      <ul>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="followw"
                            tabIndex="0"
                          >
                            Follow
                          </a>
                        </li>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="envlp"
                            tabIndex="0"
                          >
                            <img
                              src="./images/envelop.png"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="hire"
                            tabIndex="0"
                          >
                            hire
                          </a>
                        </li>
                      </ul>
                      <a href="./index.html#" title="" tabIndex="0">
                        View Profile
                      </a>
                    </div>
                    <div
                      className="user-profy slick-slide slick-active"
                      data-slick-index="3"
                      aria-hidden="false"
                      style={{ width: "153px" }}
                      tabIndex="0"
                    >
                      <img src="./images/user1.png" alt="" />
                      <h3>Saroj Shakya</h3>
                      <span>Graphic Designer</span>
                      <ul>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="followw"
                            tabIndex="0"
                          >
                            Follow
                          </a>
                        </li>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="envlp"
                            tabIndex="0"
                          >
                            <img
                              src="./images/envelop.png"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="hire"
                            tabIndex="0"
                          >
                            hire
                          </a>
                        </li>
                      </ul>
                      <a href="./index.html#" title="" tabIndex="0">
                        View Profile
                      </a>
                    </div>
                    <div
                      className="user-profy slick-slide slick-active"
                      data-slick-index="4"
                      aria-hidden="false"
                      style={{ width: "153px" }}
                      tabIndex="-1"
                    >
                      <img src="./images/user2.png" alt="" />
                      <h3>Saroj Shakya</h3>
                      <span>Graphic Designer</span>
                      <ul>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="followw"
                            tabIndex="-1"
                          >
                            Follow
                          </a>
                        </li>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="envlp"
                            tabIndex="-1"
                          >
                            <img
                              src="./images/envelop.png"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="hire"
                            tabIndex="-1"
                          >
                            hire
                          </a>
                        </li>
                      </ul>
                      <a
                        href="./index.html#"
                        title=""
                        tabIndex="-1"
                      >
                        View Profile
                      </a>
                    </div>
                    <div
                      className="user-profy slick-slide"
                      data-slick-index="5"
                      aria-hidden="true"
                      style={{ width: "153px" }}
                      tabIndex="-1"
                    >
                      <img src="./images/user3.png" alt="" />
                      <h3>Saroj Shakya</h3>
                      <span>Graphic Designer</span>
                      <ul>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="followw"
                            tabIndex="-1"
                          >
                            Follow
                          </a>
                        </li>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="envlp"
                            tabIndex="-1"
                          >
                            <img
                              src="./images/envelop.png"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="hire"
                            tabIndex="-1"
                          >
                            hire
                          </a>
                        </li>
                      </ul>
                      <a
                        href="./index.html#"
                        title=""
                        tabIndex="-1"
                      >
                        View Profile
                      </a>
                    </div>
                    <div
                      className="user-profy slick-slide slick-cloned"
                      data-slick-index="6"
                      aria-hidden="true"
                      style={{ width: "153px" }}
                      tabIndex="-1"
                    >
                      <img src="./images/user1.png" alt="" />
                      <h3>Saroj Shakya</h3>
                      <span>Graphic Designer</span>
                      <ul>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="followw"
                            tabIndex="-1"
                          >
                            Follow
                          </a>
                        </li>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="envlp"
                            tabIndex="-1"
                          >
                            <img
                              src="./images/envelop.png"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="hire"
                            tabIndex="-1"
                          >
                            hire
                          </a>
                        </li>
                      </ul>
                      <a
                        href="./index.html#"
                        title=""
                        tabIndex="-1"
                      >
                        View Profile
                      </a>
                    </div>
                    <div
                      className="user-profy slick-slide slick-cloned"
                      data-slick-index="7"
                      aria-hidden="true"
                      style={{ width: "153px" }}
                      tabIndex="-1"
                    >
                      <img src="./images/user2.png" alt="" />
                      <h3>Saroj Shakya</h3>
                      <span>Graphic Designer</span>
                      <ul>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="followw"
                            tabIndex="-1"
                          >
                            Follow
                          </a>
                        </li>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="envlp"
                            tabIndex="-1"
                          >
                            <img
                              src="./images/envelop.png"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="hire"
                            tabIndex="-1"
                          >
                            hire
                          </a>
                        </li>
                      </ul>
                      <a
                        href="./index.html#"
                        title=""
                        tabIndex="-1"
                      >
                        View Profile
                      </a>
                    </div>
                    <div
                      className="user-profy slick-slide slick-cloned"
                      data-slick-index="8"
                      aria-hidden="true"
                      style={{ width: "153px" }}
                      tabIndex="-1"
                    >
                      <img src="./images/user3.png" alt="" />
                      <h3>Saroj Shakya</h3>
                      <span>Graphic Designer</span>
                      <ul>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="followw"
                            tabIndex="-1"
                          >
                            Follow
                          </a>
                        </li>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="envlp"
                            tabIndex="-1"
                          >
                            <img
                              src="./images/envelop.png"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="hire"
                            tabIndex="-1"
                          >
                            hire
                          </a>
                        </li>
                      </ul>
                      <a
                        href="./index.html#"
                        title=""
                        tabIndex="-1"
                      >
                        View Profile
                      </a>
                    </div>
                    <div
                      className="user-profy slick-slide slick-cloned"
                      data-slick-index="9"
                      aria-hidden="true"
                      style={{ width: "153px" }}
                      tabIndex="-1"
                    >
                      <img src="./images/user1.png" alt="" />
                      <h3>Saroj Shakya</h3>
                      <span>Graphic Designer</span>
                      <ul>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="followw"
                            tabIndex="-1"
                          >
                            Follow
                          </a>
                        </li>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="envlp"
                            tabIndex="-1"
                          >
                            <img
                              src="./images/envelop.png"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="hire"
                            tabIndex="-1"
                          >
                            hire
                          </a>
                        </li>
                      </ul>
                      <a
                        href="./index.html#"
                        title=""
                        tabIndex="-1"
                      >
                        View Profile
                      </a>
                    </div>
                    <div
                      className="user-profy slick-slide slick-cloned"
                      data-slick-index="10"
                      aria-hidden="true"
                      style={{ width: "153px" }}
                      tabIndex="-1"
                    >
                      <img src="./images/user2.png" alt="" />
                      <h3>Saroj Shakya</h3>
                      <span>Graphic Designer</span>
                      <ul>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="followw"
                            tabIndex="-1"
                          >
                            Follow
                          </a>
                        </li>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="envlp"
                            tabIndex="-1"
                          >
                            <img
                              src="./images/envelop.png"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="hire"
                            tabIndex="-1"
                          >
                            hire
                          </a>
                        </li>
                      </ul>
                      <a
                        href="./index.html#"
                        title=""
                        tabIndex="-1"
                      >
                        View Profile
                      </a>
                    </div>
                    <div
                      className="user-profy slick-slide slick-cloned"
                      data-slick-index="11"
                      aria-hidden="true"
                      style={{ width: "153px" }}
                      tabIndex="-1"
                    >
                      <img src="./images/user3.png" alt="" />
                      <h3>Saroj Shakya</h3>
                      <span>Graphic Designer</span>
                      <ul>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="followw"
                            tabIndex="-1"
                          >
                            Follow
                          </a>
                        </li>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="envlp"
                            tabIndex="-1"
                          >
                            <img
                              src="./images/envelop.png"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="./index.html#"
                            title=""
                            className="hire"
                            tabIndex="-1"
                          >
                            hire
                          </a>
                        </li>
                      </ul>
                      <a
                        href="./index.html#"
                        title=""
                        tabIndex="-1"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>

                <span
                  className="slick-nexti slick-arrow"
                  style={{ display: " inline" }}
                ></span>
              </div>
            </div>
            <div className="post-bar">
              <div className="post_topbar">
                <div className="usy-dt">
                  <img src="./images/me.jpg" alt="" />
                  <div className="usy-name">
                    <h3>Saubhagya Sapkota</h3>
                    <span>4 min ago</span>
                  </div>
                </div>
                <div className="ed-opts">
                  <a
                    href="./index.html#"
                    title=""
                    className="ed-opts-open"
                  >
                    <i className="la la-ellipsis-v"></i>
                  </a>
                  <ul className="ed-options">
                    <li>
                      <a href="./index.html#" title="">
                        Edit Post
                      </a>
                    </li>
                    <li>
                      <a href="./index.html#" title="">
                        Unsaved
                      </a>
                    </li>
                    <li>
                      <a href="./index.html#" title="">
                        Unbid
                      </a>
                    </li>
                    <li>
                      <a href="./index.html#" title="">
                        Close
                      </a>
                    </li>
                    <li>
                      <a href="./index.html#" title="">
                        Hide
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="epi-sec">
                <ul className="descp">
                  <li>
                    <img src="./images/icon8.png" alt="" />
                    <span>Epic Coder</span>
                  </li>
                  <li>
                    <img src="./images/icon9.png" alt="" />
                    <span>India</span>
                  </li>
                </ul>
                <ul
                  className="bk-links"
                  style={{ display: "none" }}
                >
                  <li>
                    <a href="./index.html#" title="">
                      <i className="la la-bookmark"></i>
                    </a>
                  </li>
                  <li>
                    <a href="./index.html#" title="">
                      <i className="la la-envelope"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="job_descp">
                <h3>Senior Wordpress Developer</h3>
                <ul className="job-dt">
                  <li>
                    <a href="./index.html#" title="">
                      Full Time
                    </a>
                  </li>
                  <li>
                    <span>$30 / hr</span>
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Aliquam luctus hendrerit metus, ut
                  ullamcorper quam finibus at. Etiam id magna sit
                  amet...
                  <a href="./index.html#" title="">
                    view more
                  </a>
                </p>
                <ul className="skill-tags">
                  <li>
                    <a href="./index.html#" title="">
                      HTML
                    </a>
                  </li>
                  <li>
                    <a href="./index.html#" title="">
                      PHP
                    </a>
                  </li>
                  <li>
                    <a href="./index.html#" title="">
                      CSS
                    </a>
                  </li>
                  <li>
                    <a href="./index.html#" title="">
                      Javascript
                    </a>
                  </li>
                  <li>
                    <a href="./index.html#" title="">
                      Wordpress
                    </a>
                  </li>
                </ul>
              </div>
              <div className="job-status-bar">
                <ul className="like-com">
                  <li>
                    <a href="./index.html#">
                      <i className="fas fa-heart"></i> Like
                    </a>
                    <img src="./images/liked-img.png" alt="" />
                    <span>25</span>
                  </li>
                  <li>
                    <a href="./index.html#" className="com">
                      <i className="fas fa-comment-alt"></i> Comment
                      15
                    </a>
                  </li>
                </ul>
                <a href="./index.html#">
                  <i className="fas fa-eye"></i>Views 50
                </a>
              </div>
            </div>
            <div className="posty">
              <div className="post-bar no-margin">
                <div className="post_topbar">
                  <div className="usy-dt">
                    <img src="./images/me.jpg" alt="" />
                    <div className="usy-name">
                      <h3>Saubhagya Sapkota</h3>
                      <span>6 min ago</span>
                    </div>
                  </div>
                  <div className="ed-opts">
                    <a
                      href="./index.html#"
                      title=""
                      className="ed-opts-open"
                    >
                      <i className="la la-ellipsis-v"></i>
                    </a>
                    <ul className="ed-options">
                      <li>
                        <a href="./index.html#" title="">
                          Edit Post
                        </a>
                      </li>
                      <li>
                        <a href="./index.html#" title="">
                          Unsaved
                        </a>
                      </li>
                      <li>
                        <a href="./index.html#" title="">
                          Unbid
                        </a>
                      </li>
                      <li>
                        <a href="./index.html#" title="">
                          Close
                        </a>
                      </li>
                      <li>
                        <a href="./index.html#" title="">
                          Hide
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="epi-sec">
                  <ul className="descp">
                    <li>
                      <img src="./images/icon8.png" alt="" />
                      <span>Epic Coder</span>
                    </li>
                    <li>
                      <img src="./images/icon9.png" alt="" />
                      <span>India</span>
                    </li>
                  </ul>
                  <ul
                    className="bk-links"
                    style={{ display: "none" }}
                  >
                    <li>
                      <a href="./index.html#" title="">
                        <i className="la la-bookmark"></i>
                      </a>
                    </li>
                    <li>
                      <a href="./index.html#" title="">
                        <i className="la la-envelope"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="job_descp">
                  <h3>Senior Wordpress Developer</h3>
                  <ul className="job-dt">
                    <li>
                      <a href="./index.html#" title="">
                        Full Time
                      </a>
                    </li>
                    <li>
                      <span>$30 / hr</span>
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Aliquam luctus hendrerit metus,
                    ut ullamcorper quam finibus at. Etiam id magna
                    sit amet...
                    <a href="./index.html#" title="">
                      view more
                    </a>
                  </p>
                  <ul className="skill-tags">
                    <li>
                      <a href="./index.html#" title="">
                        HTML
                      </a>
                    </li>
                    <li>
                      <a href="./index.html#" title="">
                        PHP
                      </a>
                    </li>
                    <li>
                      <a href="./index.html#" title="">
                        CSS
                      </a>
                    </li>
                    <li>
                      <a href="./index.html#" title="">
                        Javascript
                      </a>
                    </li>
                    <li>
                      <a href="./index.html#" title="">
                        Wordpress
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="job-status-bar">
                  <ul className="like-com">
                    <li>
                      <a href="./index.html#">
                        <i className="fas fa-heart"></i> Like
                      </a>
                      <img src="./images/liked-img.png" alt="" />
                      <span>25</span>
                    </li>
                    <li>
                      <a href="./index.html#" className="com">
                        <i className="fas fa-comment-alt"></i>{" "}
                        Comment 15
                      </a>
                    </li>
                  </ul>
                  <a href="./index.html#">
                    <i className="fas fa-eye"></i>Views 50
                  </a>
                </div>
              </div>
              <div
                className="comment-section"
                style={{ display: "none" }}
              >
                <a href="./index.html#" className="plus-ic">
                  <i className="la la-plus"></i>
                </a>
                <div className="comment-sec">
                  <ul>
                    <li>
                      <div className="comment-list">
                        <div className="bg-img">
                          <img src="./images/bg-img1.png" alt="" />
                        </div>
                        <div className="comment">
                          <h3>Saubhagya Sapkota</h3>
                          <span>
                            <img src="./images/clock.png" alt="" />{" "}
                            3 min ago
                          </span>
                          <p>Lorem ipsum dolor sit amet,</p>
                          <a
                            href="./index.html#"
                            title=""
                            className="active"
                          >
                            <i className="fa fa-reply-all"></i>Reply
                          </a>
                        </div>
                      </div>
                      <ul>
                        <li>
                          <div className="comment-list">
                            <div className="bg-img">
                              <img
                                src="./images/bg-img2.png"
                                alt=""
                              />
                            </div>
                            <div className="comment">
                              <h3>Saubhagya Sapkota</h3>
                              <span>
                                <img
                                  src="./images/clock.png"
                                  alt=""
                                />
                                3 min ago
                              </span>
                              <p>Hi John</p>
                              <a href="./index.html#" title="">
                                <i className="fa fa-reply-all"></i>
                                Reply
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="comment-list">
                        <div className="bg-img">
                          <img src="./images/bg-img3.png" alt="" />
                        </div>
                        <div className="comment">
                          <h3>Saubhagya Sapkota</h3>
                          <span>
                            <img src="./images/clock.png" alt="" />{" "}
                            3 min ago
                          </span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Aliquam luctus
                            hendrerit metus, ut ullamcorper quam
                            finibus at.
                          </p>
                          <a href="./index.html#" title="">
                            <i className="fa fa-reply-all"></i>Reply
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="post-comment">
                  <div className="cm_img">
                    <img src="./images/bg-img4.png" alt="" />
                  </div>
                  <div className="comment_box">
                    <form>
                      <input
                        type="text"
                        placeholder="Post a comment"
                      />
                      <button type="submit">Send</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="process-comm">
              <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
}
export default MainSection;