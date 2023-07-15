import { Component } from "react";

class Header extends Component{
    render(){
        return <header>
        <div className="container">
          <div className="header-data">
            <div className="logo">
              <a href="./index.html" title=""
                ><img src="./images/lec.png" alt=""
              /></a>
            </div>
            <div className="search-bar">
              <form>
                <input type="text" name="search" placeholder="Search..." />
                <button type="submit"><i className="la la-search"></i></button>
              </form>
            </div>
            <nav>
              <ul>
                <li>
                  <a href="./index.html" title="">
                    <span><img src="./images/icon1.png" alt="" /></span>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/#" title="" className="not-box-openm">
                    <span><img src="./images/icon6.png" alt="" /></span>
                    Messages
                  </a>
                  <div className="notification-box msg" id="message">
                    <div className="nt-title">
                      <h4>Setting</h4>
                      <a href="./index.html#" title="">Clear all</a>
                    </div>
                    <div className="nott-list">
                      <div className="notfication-details">
                        <div className="noty-user-img">
                          <img src="./images/ny-img1.png" alt="" />
                        </div>
                        <div className="notification-info">
                          <h3>
                            <a href="./messages.html" title=""
                              >Jassica William</a
                            >
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do.
                          </p>
                          <span>2 min ago</span>
                        </div>
                      </div>
                      <div className="notfication-details">
                        <div className="noty-user-img">
                          <img src="./images/ny-img2.png" alt="" />
                        </div>
                        <div className="notification-info">
                          <h3>
                            <a href="./messages.html" title=""
                              >Jassica William</a
                            >
                          </h3>
                          <p>Lorem ipsum dolor sit amet.</p>
                          <span>2 min ago</span>
                        </div>
                      </div>
                      <div className="notfication-details">
                        <div className="noty-user-img">
                          <img src="./images/ny-img3.png" alt="" />
                        </div>
                        <div className="notification-info">
                          <h3>
                            <a href="./messages.html" title=""
                              >Jassica William</a
                            >
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempo incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                          <span>2 min ago</span>
                        </div>
                      </div>
                      <div className="view-all-nots">
                        <a href="./messages.html" title=""
                          >View All Messsages</a
                        >
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <a href="/#" title="" className="not-box-open">
                    <span><img src="./images/icon7.png" alt="" /></span>
                    Notification
                  </a>
                  <div className="notification-box noti" id="notification">
                    <div className="nt-title">
                      <h4>Setting</h4>
                      <a href="/#" title="">Clear all</a>
                    </div>
                    <div className="nott-list">
                      <div className="notfication-details">
                        <div className="noty-user-img">
                          <img src="./images/ny-img1.png" alt="" />
                        </div>
                        <div className="notification-info">
                          <h3>
                            <a href="/#" title="">Jassica William</a>
                            Comment on your post.
                          </h3>
                          <span>2 min ago</span>
                        </div>
                      </div>
                      <div className="notfication-details">
                        <div className="noty-user-img">
                          <img src="./images/ny-img2.png" alt="" />
                        </div>
                        <div className="notification-info">
                          <h3>
                            <a href="/#" title="">Jassica William</a>
                            Comment on your post.
                          </h3>
                          <span>2 min ago</span>
                        </div>
                      </div>
                      <div className="notfication-details">
                        <div className="noty-user-img">
                          <img src="./images/ny-img3.png" alt="" />
                        </div>
                        <div className="notification-info">
                          <h3>
                            <a href="/#" title="">Jassica William</a>
                            Comment on your post.
                          </h3>
                          <span>2 min ago</span>
                        </div>
                      </div>
                      <div className="notfication-details">
                        <div className="noty-user-img">
                          <img src="./images/ny-img2.png" alt="" />
                        </div>
                        <div className="notification-info">
                          <h3>
                            <a href="/#" title="">Jassica William</a>
                            Comment on your post.
                          </h3>
                          <span>2 min ago</span>
                        </div>
                      </div>
                      <div className="view-all-nots">
                        <a href="/#" title="">View All Notification</a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
            <div className="menu-btn">
              <a href="./index.html#" title=""><i className="fa fa-bars"></i></a>
            </div>
            <div className="user-account">
              <div className="user-info">
                <img src="./images/me.jpg" alt="" />
                <a href="./index.html#" title="">Saubhagya</a>
                <i className="la la-sort-down"></i>
              </div>
              <div className="user-account-settingss" id="users">
                <h3>Online Status</h3>
                <ul className="on-off-status">
                  <li>
                    <div className="fgt-sec">
                      <input type="radio" name="cc" id="c5" />
                      <label htmlFor="c5">
                        <span></span>
                      </label>
                      <small>Online</small>
                    </div>
                  </li>
                  <li>
                    <div className="fgt-sec">
                      <input type="radio" name="cc" id="c6" />
                      <label htmlFor="c6">
                        <span></span>
                      </label>
                      <small>Offline</small>
                    </div>
                  </li>
                </ul>
                <h3>Custom Status</h3>
                <div className="search_form">
                  <form>
                    <input type="text" name="search" />
                    <button type="submit">Ok</button>
                  </form>
                </div>
                <h3>Setting</h3>
                <ul className="us-links">
                  <li>
                    <a href="./profile-account-setting.html" title=""
                      >Account Setting</a
                    >
                  </li>
                  <li><a href="./index.html#" title="">Privacy</a></li>
                  <li><a href="./index.html#" title="">Faqs</a></li>
                  <li>
                    <a href="./index.html#" title="">Terms &amp; Conditions</a>
                  </li>
                </ul>
                <h3 className="tc"><a href="./sign-in.html" title="">Logout</a></h3>
              </div>
            </div>
          </div>
        </div>
      </header>
    }
}
export default Header;