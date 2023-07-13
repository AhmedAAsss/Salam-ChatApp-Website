import React from 'react'
import classes from './DetailsGroup.module.css'
import backup from '../../../../asses/adv_svg/backup.svg'
import person from '../../../../asses/adv_svg/person.svg'
import eye from '../../../../asses/adv_svg/eye.svg'

const DetailsGroup = () => {
  return (
    <div className={classes.DetailsGroup_container}>
      <div className={classes.DetailsGroup}>
        <div className={classes.Details_icon}>
          <img style={{ padding: "15px" }} src={backup} alt="none" width="64px" height="64px" />
        </div>
        <h3>Backup your messages</h3>
        <p>Allowing users to make a backup copy of all his information and messages to prevent any losses of any sensitive information or messages. </p>
        <a href='/'>Learn more</a>
      </div>
      <div className={classes.DetailsGroup}>
        <div className={classes.Details_icon}>
          <img style={{ padding: "15px" }} src={eye} alt="none" width="64px" height="64px" />
        </div>
        <h3>Customize personal privacy</h3>
        <p>We provide some optional features such as preventing in-chat screenshots and the ability to see messages without marking it as seen and many other.</p>
        <a href='/'>Learn more</a>
      </div>
      <div className={classes.DetailsGroup}>
        <div className={classes.Details_icon}>
          <img style={{ padding: "15px" }} src={person} alt="none" width="64px" height="64px" />
        </div>
        <h3>Customizable profile</h3>
        <p>Allowing users to create there own profiles changing profile img or profile bio, his name and other so each individual has his own uniq profile customization. </p>
        <a href='/'>Learn more</a>
      </div>
    </div>
  )
}

export default DetailsGroup
