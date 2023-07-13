import React from 'react'
import classes from './FeatureMainComponent.module.css'
import DarkLayout from '../../../Layout/DarkLayout/DarkLayout'
// import icon from '../../../../asses/adv_svg/activity.svg'
// import icon1 from '../../../../asses/not_used/eye.svg'
// import icon2 from '../../../../asses/not_used/follow.svg'
// import icon3 from '../../../../asses/not_used/user.svg'
// import icon4 from '../../../../asses/not_used/growth.svg'
// import icon5 from '../../../../asses/not_used/idea.svg'
// import icon9 from '../../../../asses/not_used/chart.svg'
// import icon6 from '../../../../asses/not_used/setup.svg'
// import icon8 from '../../../../asses/not_used/styling.svg'
// import icon12 from '../../../../asses/not_used/settings.svg'

import lock from '../../../../asses/adv_main_svg/lock.svg'
import hand from '../../../../asses/adv_main_svg/hand.svg'
import group from '../../../../asses/adv_main_svg/conversation.svg'
import message from '../../../../asses/adv_main_svg/message.svg'
import trash from '../../../../asses/adv_main_svg/edit.svg'
import platform from '../../../../asses/adv_main_svg/platform.svg'
import backup from '../../../../asses/adv_main_svg/backup.svg'
import other from '../../../../asses/adv_main_svg/other.svg'

const FeatureMainComponent = () => {
  return (
    <div className={classes.FeatureMain_container}>
      <DarkLayout >
        <div className={classes.FeatureMain}>
          <div>
            <label>A communication solution</label>
            <h1>All Features and advantages</h1>
            <p >Improve your communication with friends and family and all the people you love with secure, efficient and reliable chat app. It's a long term investment.</p>
            <br /><br />
            <a href='/download' className={classes.main_btn}>Go to Download</a>
          </div>
          {/* <div className={classes.FeatureMain_img}>
            <img src={feature} alt="none"  />
          </div> */}
          <div className={classes.FeatureMain_parts}>
            <div>
              <p className={classes.tools_title}>In chat</p>
              <div className={classes.tool}>
                <img src={message} alt="none" />Messaging
              </div>
              <div className={classes.tool}>
                <img src={lock} alt="none" />Security
              </div>
              <div className={classes.tool}>
                <img src={trash} alt="none" />Deleting and Editing
              </div>
              <div className={classes.tool}>
                <img src={group} alt="none" />Groups and channels
              </div>
            </div>
            <div>
              <p className={classes.tools_title}>About app</p>
              <div className={classes.tool}>
                <img src={platform} alt="none" />Cross-Platform
              </div>
              <div className={classes.tool}>
                <img src={hand} alt="none" />Personation
              </div>
              <div className={classes.tool}>
                <img src={backup} alt="none" />Backup
              </div>
              <div className={classes.tool}>
                <img src={other} alt="none" />Other
              </div>
            </div>
          </div>
        </div>
      </DarkLayout>
    </div>
  )
}

export default FeatureMainComponent
