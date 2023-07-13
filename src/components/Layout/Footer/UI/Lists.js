import React from 'react'
import classes from './Lists.module.css'

const Lists = () => {

  return (
    <>
      <div className={classes.ul_container}>
        <ul className={classes.ul}>
          <li className={classes.li}>Salam Messenger
            {/* <img src={logo} alt='none' width="100px" height="50px" /> */}
          </li>
          <br />
        </ul >
        <ul className={classes.ul}>
          <li className={classes.li}>Digital Content</li>
          <li className={classes.li}><a href='/home'>Home</a></li>
          <li className={classes.li}><a href='/download'>Download</a></li>
          <li className={classes.li}><a href='/features'>Features</a></li>
          <li className={classes.li}><a href='/'>About Us</a></li>
          <br />
        </ul >
        <ul className={classes.ul}>
          <li className={classes.li}>COMPANY</li>
          <li className={classes.li}><a href='/Contact_us'>Contact us</a></li>
          <li className={classes.li}><a href='/'>About Company</a></li>
          <li className={classes.li}><a href='/home'>Privacy Policy</a></li>
          <br />
          <br />
          <br />
        </ul>
        <ul className={classes.ul}>
          <li className={classes.li}>DOWNLOAD</li>
          <li className={classes.li}><a href='/download'>Android</a></li>
          <li className={classes.li}><a href='/download'>IOS Apple</a></li>
          <br />
        </ul>
        {/* <ul className={classes.ul} style={{ position: "relative" }}>
          <li className={classes.li} style={{ margin: "0px" }}><DropdownMenu /></li>
          {/* <div className={classes.li} style={{ display: "grid", gridTemplateColumns: "repeat(2, 40px)", justifyContent: "left", alignItems: "center" }}><i className="fa fa-envelope fa-2x"></i>Email5000@EmailThing.com</div> *

          <li className={classes.li} style={{ position: "absolute", fontSize: "12px", alignItems: "flex-end", bottom: "0px", margin: "0px" }}>
            <ul className={classes.socialMediaList} >
              <li><a href="/"><FontAwesomeIcon icon={faFacebookF} />Facebook</a></li>
              <li><a href="/"><FontAwesomeIcon icon={faTwitter} />Twitter</a></li>
              <li><a href="/"><FontAwesomeIcon icon={faInstagram} />Instagram</a></li>
              <li><a href="/"><FontAwesomeIcon icon={faLinkedinIn} />Linkedin</a></li>
            </ul>
            <p style={{ fontSize: "12px" }}>© 2023 Salam Messenger Media</p>
          </li>
        </ul> */}
      </div>
      <hr className={classes.hr} style={{ margin: "0 5rem", border: "#3C3D3E solid 1px" }} />
      <div className={classes.ul_container}>
        <ul className={classes.ul} style={{ width: "50%", color: "#3C3D3E" }}>
          <li className={classes.li} style={{ fontSize: "16px" }}>© Copyright 2023 Salam Messenger. All rights reserved.</li>
          <br />
          <br />
          <br />
        </ul>
        <ul className={classes.ul} style={{ width: "50%" }}>
          <li className={classes.li} style={{ color: "#00C69E" }}>DOWNLOAD ---{'>'}</li>
          <li className={`${classes.li} ${classes.li_context} `}>Salam Messenger helps you communication with you friends, family and the people you like with reliable & fast platform to save you time and effort.</li>
          {/* <li className={`${classes.li} ${classes.li_context} `}>
            OpenCode Technologies,<br />
            Via San Faustino, 1<br />
            20134 Milano (MI)<br />
            Italy
          </li> */}
          <br />
        </ul>
      </div>
    </>
  )
}

export default Lists
