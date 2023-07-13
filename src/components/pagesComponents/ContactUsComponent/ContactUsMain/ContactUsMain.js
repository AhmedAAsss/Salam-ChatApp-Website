import React from 'react'
import classes from './ContactUsMain.module.css'
import DarkLayout from '../../../Layout/DarkLayout/DarkLayout'
import mail from '../../../../asses/other/mail.svg'
import help from '../../../../asses/other/help.svg'

const ContactUsMain = () => {
  return (
    <DarkLayout>
      <div className={classes.ContactUsMain_container}>
        <h2>Contact Us</h2>
        <p>Have any questions? Don't hesitate to reach out.</p>
        <br /><br />
        <img src={mail} alt="" width="50px" />
        <br />
        <span>contactus@salamchat.me</span>
        <br /><br /><br />

        <div className={classes.ContactUsMain_box}>
          <br />
          <img src={help} alt="" width="35px" />
          <h3>About Us</h3>
          <p>If you have any questions about us check out our <a href='/home'>Main site</a> for more information</p>
        </div>
      </div>
    </DarkLayout>
  )
}

export default ContactUsMain
