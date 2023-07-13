import React from 'react'
import classes from './TwoSidesSection.module.css'
import DarkLayout from '../../../Layout/DarkLayout/DarkLayout'
import android from '../../../../asses/other/dwn_android.svg'
import ios from '../../../../asses/other/dwn_ios.svg'

const TwoSidesSection = () => {
  return (
    <DarkLayout >
      <div className={classes.TwoSidesSection}>
        <div className={classes.TwoSidesSection_side}>
          <h1>Download for Android</h1>
          <p>Available</p><br />

          <a href='/' className={classes.main_btn}>Start Download</a>
          <br />
          <br />
          <br />
          <img src={android} alt="none" width="300px" />
        </div>
        <div className={classes.TwoSidesSection_side}>
          <h1>Download for IOS</h1>
          <p>Coming soon!</p><br />

          <a href='/download' className={classes.main_btn}>Start Download</a>
          <br />
          <br />
          <br />
          <img src={ios} alt="none" width="300px" />
        </div>
      </div>
    </DarkLayout>
  )
}

export default TwoSidesSection
