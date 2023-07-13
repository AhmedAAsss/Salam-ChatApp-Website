import React from 'react'
import classes from './LightContext.module.css'
import light_chat from '../../../../asses/other/light_chat.svg'
import info from '../../../../asses/other/info.svg'

const LightContext = () => {
  return (
    <div className={classes.LightContext_container}>
      <div className={classes.LightContext}>
        <img src={info} alt="" width="40px" />
        <div>
          <h4>About Us</h4>
          <p>For any questions about the company you can find more information about our works and achievements you can find it in the main website. </p>
          <a href='/home'>more information --{'>'}</a>
        </div>
      </div>
      <div className={classes.LightContext}>
        <img src={light_chat} alt="" width="40px" />
        <div>
          <h4>Contact Us</h4>
          <p>Feel free to contact us for any thing you need to know about Salam Messenger or the company via E-mail or any social media available.</p>
          <a href='/home'>more information --{'>'}</a>
        </div>
      </div>
    </div>
  )
}

export default LightContext
