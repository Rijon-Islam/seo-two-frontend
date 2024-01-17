import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import HeaderBottom from "../HomePage/HeaderBottom";

const NavBar = () => {
  const [categories, setCategories] = useState([]);
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  const [users, setUser] = useState([]);
  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);


  useEffect(() => {
    fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/users`)
      .then((res) => res.json())
      .then((info) => setUser(info));
  }, []);



  useEffect(() => {
    fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/categories`)
      .then((res) => res.json())
      .then((info) => setCategories(info));
  }, []);
  return (

    <>
      <HeaderBottom></HeaderBottom>
      <header className="template-header absolute-header navbar-left sticky-header">
        <div className="topbar">
          <p>Let's make something great together.</p>
        </div>
        <div className="container">
          <div className="header-inner">
            <div className="header-left">
              {
                logo.map(e => <div className="site-logo">
                  <a href="/">
                    <img src={e.logo} alt="Logo" />
                  </a>
                </div>)
              }

              <nav className="nav-menu d-none d-xl-block">
                <ul className="primary-menu">
                  <li><a href="/" className="active">Home</a></li>
                  <li><a href="/service">Services</a> </li>
                  <li><a href="/pricing">Pricing</a> </li>
                  <li><a href="/contact">Contact</a></li>


                </ul>
              </nav>
            </div>
            <div className="header-right">
              <ul className="header-extra">
                {
                  user ?
                    <li className="header-btns d-none d-md-block" > <Link to='/dashboard' className="template-btn" >Dashboard</Link></li>
                    :

                    <li className="header-btns d-none d-md-block">
                      <Link to='login' className="template-btn">
                        Login
                        <i className="far fa-long-arrow-right" />
                      </Link>
                    </li>

                }

                {
                  users.filter(u => u.userEmail === user?.email).length === 1 &&
                  <li className="header-btns d-none d-md-block" > <Link to='/admin/' className="template-btn" >Admin</Link></li>
                }




                <li className="d-xl-none">
                  <div className="navbar-toggler">
                    <span />
                    <span />
                    <span />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="slide-panel mobile-slide-panel">
          <div className="panel-overlay" />
          <div className="panel-inner">
            <div className="panel-logo">
              {
                logo.map(e => <div className="site-logo">
                  <a href="/">
                    <img src={e.logo} alt="Logo" />
                  </a>
                </div>)
              }
            </div>
            <nav className="mobile-menu">
              <ul className="primary-menu">
                <li><a href="/" className="active">Home</a></li>
                <li><a href="/service">Services</a> </li>
                <li><a href="/pricing">Pricing</a> </li>
                <li><a href="/contact">Contact</a></li>


              </ul>
            </nav>
            <a href="/" className="panel-close">
              <i className="fal fa-times" />
            </a>
          </div>
        </div>
      </header>


    </>
  );
};

export default NavBar;
