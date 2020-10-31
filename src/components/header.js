import { Link } from 'gatsby';
import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="navbar" style={{height: 80}}>
        <div className="container">
          <div className="row">
            <div className="col s3">
              <div className="content-left">
                <a href="#slide-out" data-activates="slide-out" className="sidebar">
                  <i className="fa fa-bars" />
                </a>
              </div>
            </div>
            <div className="col s6">
              <div className="content-center">
                <div id="”content-mobile”">
                  <a href="index.html">
                    <h1>M-PLAY</h1>
                  </a>
                </div>
              </div>
            </div>
            <div className="col s3">
              <div className="content-right">
                <a href="#slide-out-right" data-activates="slide-out-right" className="sidebar-search">
                  <i className="fa fa-search" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-panel">
        <ul id="slide-out" className="collapsible side-nav">
          <li>
            <div className="user-view">
              <div className="background">
                <img src="images/bg-banner.jpg" alt="" />
              </div>
              <img className="circle responsive-img" src="images/profile.png" alt="" />
              <span className="white-text name">John Roe</span>
            </div>
          </li>
          <li><Link to="index"><i className="fa fa-home" />Home</Link>
              
             </li>
             <li>
            <a href="contact.html">
              <i className="fa fa-envelope-o" />Contact Us</a>
          </li>
             <li>
           <Link to="blog"><i className="fa fa-rss-square" />Blog</Link>
              
          </li>
          <li>
            <div className="collapsible-header">
              <i className="fa fa-list" />Categories
              <span>
                <i className="fa fa-caret-right right" />
              </span>
            </div>
            <div className="collapsible-body">
              <ul>
                <li>
                  <a href="categories.html">computer science</a>
                </li>
                <li>
                  <a href="categories-page.html">Micro Biology</a>
                </li>
                <li>
                  <a href="categories.html">office technology</a>
                </li>
                <li>
                  <a href="categories-page.html">mechnical Eng</a>
                </li>
                <li>
                  <a href="categories.html">Elect Elect</a>
                </li>
                <li>
                  <a href="categories-page.html">chemical Eng</a>
                </li>
              </ul>
            </div>
          </li>
        
          <li>
            <a href="sign-in.html">
              <i className="fa fa-sign-in" />Sign In</a>
          </li>
          <li>
            <a href="sign-up.html">
              <i className="fa fa-user-plus" />Sign Up</a>
          </li>
          <li>
            <a href="index.html">
              <i className="fa fa-share" />Log Out</a>
          </li>
        </ul>
      </div>
      <div className="sidebar-panel sidebar-search">
        <ul id="slide-out-right" className="collapsible side-nav">
          <li>
            <div className="form">
              <input type="search" />
              <button className="button">
                <i className="fa fa-search" />
              </button>
            </div>
            <div className="clear" />
          </li>
          <li>
            <h5>Popular Search</h5>
          </li>
          <li>
            <a href>Football</a>
          </li>
          <li>
            <a href>Entertainment</a>
          </li>
          <li>
            <a href>Funny</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Header