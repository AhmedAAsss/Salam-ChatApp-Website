import React from 'react'
import classes from './FourContextsComponent.module.css'
import lock_svg from '../../../../asses/adv_svg/lock.svg'
import rocket from '../../../../asses/home_svg/rocket.svg'
import data from '../../../../asses/home_svg/data.svg'
import audience from '../../../../asses/home_svg/audience.svg'
import full_phone from '../../../../asses/home_svg/full_phone.svg'

const FourContextsComponent = () => {
  return (
    <>
      <div className={classes.five_context_container}>
        <h2>Reliable & efficient chat messaging</h2>
        {/* <p>With fast communication and low latency your team can now focus on your main projects and minimize downtimes.</p> */}
        <div className={classes.five_context}>

          <div className={classes.main_context}>
            <img src={full_phone} alt='none' width="300px" />
          </div>

          <div className={classes.side_context}>
            <div>
              <img src={audience} alt="none" width="80px" height="80px" />
              <h3>Attract specific audience</h3>
              <p>You can attract specific audiences and communities by making specific channels or groups so people can find your find what they need easily.</p>
            </div>
            <div>
              <img src={rocket} alt="none" width="80px" height="80px" />
              <h3>Achieve your personal goals</h3>
              <p>With specialized groups and channels you can easily find specific information about your topics and goals.</p>
            </div>
          </div>

          <div className={classes.side_context}>
            <div>
              <img src={lock_svg} alt="none" width="80px" height="80px" />
              <h3>Full & Secure Encryption</h3>
              <p>One-on-one encryption for messages and group chat. Makes your messaging save and secure.</p>
            </div>
            <div>
              <img src={data} alt="none" width="80px" height="80px" />
              <h3>Achieve your team vision</h3>
              <p>With fast communication and low latency your team can now focus on your main projects and minimize downtimes.</p>
            </div>
          </div>
        </div>

        <br /><br /><br /><br />
      </div>
    </>
  )
}

export default FourContextsComponent
