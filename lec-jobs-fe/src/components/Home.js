import { Component } from "react";
import Header from "./Header";
import UserData from "./UserData";
import RightSideBar from "./RightSideBar";
import MainSection from "./MainSection";

class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <main>
          <div className="main-section">
            <div className="container">
              <div className="main-section-data">
                <div className="row">
                    <UserData />
                    <MainSection/>
                  < RightSideBar/>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="post-popup pst-pj">
          <div className="post-project">
            <h3>Post a project</h3>
            <div className="post-project-fields">
              <form>
                <div className="row">
                  <div className="col-lg-12">
                    <input type="text" name="title" placeholder="Title" />
                  </div>
                  <div className="col-lg-12">
                    <div className="inp-field">
                      <select>
                        <option>Category</option>
                        <option>Category 1</option>
                        <option>Category 2</option>
                        <option>Category 3</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <input type="text" name="skills" placeholder="Skills" />
                  </div>
                  <div className="col-lg-12">
                    <div className="price-sec">
                      <div className="price-br">
                        <input type="text" name="price1" placeholder="Price" />
                        <i className="la la-dollar"></i>
                      </div>
                      <span>To</span>
                      <div className="price-br">
                        <input type="text" name="price1" placeholder="Price" />
                        <i className="la la-dollar"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      name="description"
                      placeholder="Description"
                    ></textarea>
                  </div>
                  <div className="col-lg-12">
                    <ul>
                      <li>
                        <button className="active" type="submit" value="post">
                          Post
                        </button>
                      </li>
                      <li>
                        <a href="./index.html#" title="">
                          Cancel
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
            <a href="./index.html#" title="">
              <i className="la la-times-circle-o"></i>
            </a>
          </div>
        </div>
        <div className="post-popup job_post">
          <div className="post-project">
            <h3>Post a job</h3>
            <div className="post-project-fields">
              <form>
                <div className="row">
                  <div className="col-lg-12">
                    <input type="text" name="title" placeholder="Title" />
                  </div>
                  <div className="col-lg-12">
                    <div className="inp-field">
                      <select>
                        <option>Category</option>
                        <option>Category 1</option>
                        <option>Category 2</option>
                        <option>Category 3</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <input type="text" name="skills" placeholder="Skills" />
                  </div>
                  <div className="col-lg-6">
                    <div className="price-br">
                      <input type="text" name="price1" placeholder="Price" />
                      <i className="la la-dollar"></i>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="inp-field">
                      <select>
                        <option>Full Time</option>
                        <option>Half time</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      name="description"
                      placeholder="Description"
                    ></textarea>
                  </div>
                  <div className="col-lg-12">
                    <ul>
                      <li>
                        <button className="active" type="submit" value="post">
                          Post
                        </button>
                      </li>
                      <li>
                        <a href="./index.html#" title="">
                          Cancel
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
            <a href="./index.html#" title="">
              <i className="la la-times-circle-o"></i>
            </a>
          </div>
        </div>
        <div
          className="chatbox-list"
          style={{ right: "270px", display: "none" }}
        >
          <div className="chatbox">
            <div className="chat-mg">
              <a href="./index.html#" title="">
                <img src="./images/usr-img1.png" alt="" />
              </a>
              <span>2</span>
            </div>
            <div className="conversation-box">
              <div className="con-title mg-3">
                <div className="chat-user-info">
                  <img src="./images/us-img1.png" alt="" />
                  <h3>
                    Saroj Shakya <span className="status-info"></span>
                  </h3>
                </div>
                <div className="st-icons">
                  <a href="./index.html#" title="">
                    <i className="la la-cog"></i>
                  </a>
                  <a href="./index.html#" title="" className="close-chat">
                    <i className="la la-minus-square"></i>
                  </a>
                  <a href="./index.html#" title="" className="close-chat">
                    <i className="la la-close"></i>
                  </a>
                </div>
              </div>
              <div
                className="chat-hist mCustomScrollbar _mCS_1"
                data-mcs-theme="dark"
              >
                <div
                  id="mCSB_1"
                  className="mCustomScrollBox mCS-dark mCSB_vertical mCSB_inside"
                  style={{ maxHeight: "none" }}
                  tabIndex="0"
                >
                  <div
                    id="mCSB_1_container"
                    className="mCSB_container"
                    style={{ position: "relative", top: 0, left: 0 }}
                    dir="ltr"
                  >
                    <div className="chat-msg">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec rutrum congue leo eget malesuada. Vivamus suscipit
                        tortor eget felis porttitor.
                      </p>
                      <span>Sat, Aug 23, 1:10 PM</span>
                    </div>
                    <div className="date-nd">
                      <span>Sunday, August 24</span>
                    </div>
                    <div className="chat-msg st2">
                      <p>Cras ultricies ligula.</p>
                      <span>5 minutes ago</span>
                    </div>
                    <div className="chat-msg">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec rutrum congue leo eget malesuada. Vivamus suscipit
                        tortor eget felis porttitor.
                      </p>
                      <span>Sat, Aug 23, 1:10 PM</span>
                    </div>
                  </div>
                  <div
                    id="mCSB_1_scrollbar_vertical"
                    className="mCSB_scrollTools mCSB_1_scrollbar mCS-dark mCSB_scrollTools_vertical"
                    style={{ display: "block" }}
                  >
                    <div className="mCSB_draggerContainer">
                      <div
                        id="mCSB_1_dragger_vertical"
                        className="mCSB_dragger"
                        style={{
                          position: "absolute",
                          minHeight: "30px",
                          display: "block",
                          height: "198px",
                          maxHeight: "270px",
                          top: "0px",
                        }}
                      >
                        <div
                          className="mCSB_dragger_bar"
                          style={{ lineHeight: "30px" }}
                        ></div>
                      </div>
                      <div className="mCSB_draggerRail"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="typing-msg">
                <form>
                  <textarea placeholder="Type a message here"></textarea>
                  <button type="submit">
                    <i className="fa fa-send"></i>
                  </button>
                </form>
                <ul className="ft-options">
                  <li>
                    <a href="./index.html#" title="">
                      <i className="la la-smile-o"></i>
                    </a>
                  </li>
                  <li>
                    <a href="./index.html#" title="">
                      <i className="la la-camera"></i>
                    </a>
                  </li>
                  <li>
                    <a href="./index.html#" title="">
                      <i className="fa fa-paperclip"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="chatbox">
            <div className="chat-mg">
              <a href="./index.html#" title="">
                <img src="./images/usr-img2.png" alt="" />
              </a>
            </div>
            <div className="conversation-box">
              <div className="con-title mg-3">
                <div className="chat-user-info">
                  <img src="./images/us-img1.png" alt="" />
                  <h3>
                    Saroj Shakya <span className="status-info"></span>
                  </h3>
                </div>
                <div className="st-icons">
                  <a href="./index.html#" title="">
                    <i className="la la-cog"></i>
                  </a>
                  <a href="./index.html#" title="" className="close-chat">
                    <i className="la la-minus-square"></i>
                  </a>
                  <a href="./index.html#" title="" className="close-chat">
                    <i className="la la-close"></i>
                  </a>
                </div>
              </div>
              <div
                className="chat-hist mCustomScrollbar _mCS_2"
                data-mcs-theme="dark"
              >
                <div
                  id="mCSB_2"
                  className="mCustomScrollBox mCS-dark mCSB_vertical mCSB_inside"
                  style={{ maxHeight: "none" }}
                  tabIndex="0"
                >
                  <div
                    id="mCSB_2_container"
                    className="mCSB_container"
                    style={{ position: "relative", top: 0, left: 0 }}
                    dir="ltr"
                  >
                    <div className="chat-msg">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec rutrum congue leo eget malesuada. Vivamus suscipit
                        tortor eget felis porttitor.
                      </p>
                      <span>Sat, Aug 23, 1:10 PM</span>
                    </div>
                    <div className="date-nd">
                      <span>Sunday, August 24</span>
                    </div>
                    <div className="chat-msg st2">
                      <p>Cras ultricies ligula.</p>
                      <span>5 minutes ago</span>
                    </div>
                    <div className="chat-msg">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec rutrum congue leo eget malesuada. Vivamus suscipit
                        tortor eget felis porttitor.
                      </p>
                      <span>Sat, Aug 23, 1:10 PM</span>
                    </div>
                  </div>
                  <div
                    id="mCSB_2_scrollbar_vertical"
                    className="mCSB_scrollTools mCSB_2_scrollbar mCS-dark mCSB_scrollTools_vertical"
                    style={{ display: "block" }}
                  >
                    <div className="mCSB_draggerContainer">
                      <div
                        id="mCSB_2_dragger_vertical"
                        className="mCSB_dragger"
                        style={{
                          position: "absolute",
                          minHeight: "30px",
                          display: "block",
                          height: "198px",
                          maxHeight: "270px",
                          top: "0px",
                        }}
                      >
                        <div
                          className="mCSB_dragger_bar"
                          style={{ lineHeight: "30px" }}
                        ></div>
                      </div>
                      <div className="mCSB_draggerRail"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="typing-msg">
                <form>
                  <textarea placeholder="Type a message here"></textarea>
                  <button type="submit">
                    <i className="fa fa-send"></i>
                  </button>
                </form>
                <ul className="ft-options">
                  <li>
                    <a href="./index.html#" title="">
                      <i className="la la-smile-o"></i>
                    </a>
                  </li>
                  <li>
                    <a href="./index.html#" title="">
                      <i className="la la-camera"></i>
                    </a>
                  </li>
                  <li>
                    <a href="./index.html#" title="">
                      <i className="fa fa-paperclip"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="chatbox">
            <div className="chat-mg bx">
              <a href="./index.html#" title="">
                <img src="./images/chat.png" alt="" />
              </a>
              <span>2</span>
            </div>
            <div className="conversation-box">
              <div className="con-title">
                <h3>Messages</h3>
                <a href="./index.html#" title="" className="close-chat">
                  <i className="la la-minus-square"></i>
                </a>
              </div>
              <div className="chat-list">
                <div className="conv-list active">
                  <div className="usrr-pic">
                    <img src="./images/usy1.png" alt="" />
                    <span className="active-status activee"></span>
                  </div>
                  <div className="usy-info">
                    <h3>Saroj Shakya</h3>
                    <span>
                      Lorem ipsum dolor <img src="./images/smley.png" alt="" />
                    </span>
                  </div>
                  <div className="ct-time">
                    <span>1:55 PM</span>
                  </div>
                  <span className="msg-numbers">2</span>
                </div>
                <div className="conv-list">
                  <div className="usrr-pic">
                    <img src="./images/usy2.png" alt="" />
                  </div>
                  <div className="usy-info">
                    <h3>Saroj Shakya</h3>
                    <span>
                      Lorem ipsum dolor <img src="./images/smley.png" alt="" />
                    </span>
                  </div>
                  <div className="ct-time">
                    <span>11:39 PM</span>
                  </div>
                </div>
                <div className="conv-list">
                  <div className="usrr-pic">
                    <img src="./images/usy3.png" alt="" />
                  </div>
                  <div className="usy-info">
                    <h3>Saroj Shakya</h3>
                    <span>
                      Lorem ipsum dolor <img src="./images/smley.png" alt="" />
                    </span>
                  </div>
                  <div className="ct-time">
                    <span>0.28 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
