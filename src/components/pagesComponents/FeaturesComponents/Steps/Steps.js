import React from 'react'
import classes from './Steps.module.css'

const Steps = () => {
  return (
    <div className={classes.wizard_steps}>
      <div className={classes.line}></div>
      <ul>
        <li>
          <div className={`${classes.circle} ${classes.circle_active}`}>
            <div>1</div>
          </div>
          <div className={classes.text}>Download the app</div>
        </li>
        <li>
          <div className={classes.circle}>
            <div>2</div>
          </div>
          <div className={classes.text}>Add Contacts</div>
        </li>
        <li>
          <div className={classes.circle}>
            <div>3</div>
          </div>
          <div className={classes.text}>Start conversation</div>
        </li>
        {/* <li>
          <div className={classes.circle}>
          <div>4</div>
          </div>
          {/* <div className={classes.text}>Start Import /<br />Download Errors</div> *
        </li> */}
      </ul>
    </div>
  )
}

export default Steps
