import React from 'react'
import classes from './HomeMainComponent.module.css'
import DarkLayout from '../../../Layout/DarkLayout/DarkLayout'
import feature from '../../../../asses/feature.svg'

const HomeMainComponent = () => {
  return (
    <div className={classes.FeatureMain_container}>
      <DarkLayout >
        <div className={classes.FeatureMain}>
          <div>
            {/* <div className={classes.bg_overlay}></div> */}
            <label>Improve your communication </label>
            <h1>Salam Messenger</h1>
            <p >A new communication application that enables you to place FREE calls and send FREE messages anytime and anywhere, 24/7.</p>
            <br /><br />
            <a href='/download' className={classes.main_btn}>Go to Download</a>
          </div>
          <div className={classes.FeatureMain_img}>
            <img src={feature} alt="none" />
          </div>
        </div>
      </DarkLayout>
    </div>
  )
}

export default HomeMainComponent
