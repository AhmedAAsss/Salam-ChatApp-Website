import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import classes from "./DarkHeader.module.css";
import logo from "../../../asses/salam_logo.svg"
import menu from "../../../asses/header_menu.svg"
import x from "../../../asses/header_x.svg"

const DarkHeader = () => {
  const [showNav, setShowNav] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
      screenWidth > 770 && setShowNav(false)
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenWidth]);

  return (
    <>
      <div className={`${screenWidth <= 770 && showNav ? classes.mobile_flex_container : classes.flex_container}`}>
        <div className={classes.first_item}><a href="/home"><img src={logo} alt="not found" width="120px" height="50px" /></a></div>
        {screenWidth <= 770 && !showNav ? null : <ul className={classes.flex_ul}>
          {/* {screenWidth <= 770 ? <li className={classes.center_item}><a href="/home">Home</a></li> : null} */}
          <li className={classes.center_item}><a className={pathname === "/home" ? classes.select_path : null} href="/home">Home</a></li>
          <li className={classes.center_item}><a className={pathname === "/download" ? classes.select_path : null} href="/download">Download</a></li>
          <li className={classes.center_item}><a className={pathname === "/features" ? classes.select_path : null} href="/features">Features</a></li>
          <li className={classes.center_item}><a className={pathname === "/About" ? classes.select_path : null} href="/">About us</a></li>
        </ul>}
        {screenWidth > 770 && <div className={classes.last_item}><a href="/">Download</a></div>}
        {screenWidth <= 770 ? <div className={classes.mobile_toggle}>
          <i aria-hidden="true" onClick={() => setShowNav(!showNav)}>{!showNav ? <img src={menu} alt="none" width="30px" /> : <img src={x} alt='none' width="30px" />}</i>
        </div> : null}
      </div>
    </>
  )
}

export default DarkHeader