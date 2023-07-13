import React from 'react'
import classes from './DarkSection.module.css'
import check from '../../../../asses/adv_svg/check.svg'
import img from '../../../../asses/adv_svg/shield_check.svg'


const DarkSection = () => {
  return (
    // <div className={classes.DarkSection_container}>
    <div className={classes.DarkSection}>
      <div className={classes.DarkSection_context}>
        <label>Secured information</label>
        <h2>Keep all your data hidden. Your information is save & secure . </h2>
        <br />
        <div><img className={classes.CheckMark_img} src={check} width="30px" alt="none" /><p>We don't sell any personal data or content in any way.</p></div>
      </div>

      <div className={classes.DetailsGroup}>
        <div className={classes.Details_icon}>
          <img src={img} style={{ padding: "13px" }} alt="none" width="64px" height="64px" />
        </div>
        <h3>Privacy of user data</h3>
        <p>At Salam Messenger, your personal data and content are never sold, rented, or monetized in any manner. We place the highest importance on safeguarding your information, employing end-to-end encryption to guarantee the protection of your messages and content. Rest assured, your privacy is our utmost priority.</p>
        <a href='/'>Learn more</a>
      </div>
    </div>
    // </div>
  )
}

export default DarkSection
