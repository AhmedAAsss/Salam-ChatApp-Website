import React from 'react'
import classes from './FiveContextsComponent.module.css'
import full_phone from '../../../../asses/fullPhone.svg'
import lock_svg from '../../../../asses/adv_svg/lock.svg'
import call_svg from '../../../../asses/adv_svg/call.svg'
import control_svg from '../../../../asses/adv_svg/control.svg'
import group_svg from '../../../../asses/adv_svg/group.svg'

const FiveContextsComponent = () => {
  return (
    <>
      <div className={classes.five_context_container}>
        <h2>Boost your productivity with Salam Messenger</h2>
        <p>With fast communication and low latency your team can now focus on your main projects and minimize downtimes.</p>
        <div className={classes.five_context}>
          <div className={classes.side_context}>
            <div>
              <img src={call_svg} alt="none" width="80px" height="80px" />
              <h3>Voice and Video Calls</h3>
              <p>Allow users to make high-quality voice voice voice voice voice voice voice and video calls.</p>
            </div>
            <div>
              <img src={group_svg} alt="none" width="80px" height="80px" />
              <h3>Private & Public Group Chat</h3>
              <p>Allowing users to create and manage private and public group chats. Boost your team productivity.</p>
            </div>
          </div>

          <div className={classes.main_context}>
            <img src={full_phone} alt='none' width="300px" />
          </div>

          <div className={classes.side_context}>
            <div>
              <img src={lock_svg} alt="none" width="80px" height="80px" />
              <h3>Full & Secure Encryption</h3>
              <p>One-on-one encryption for messages and group chat. Makes your messaging save and secure.</p>
            </div>
            <div>
              <img src={control_svg} alt="none" width="80px" height="80px" />
              <h3>Control your Status</h3>
              <p>Control when others can see if you are online or offline. To provide more privacy.</p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />

        {/* <div className={classes.fifth_context}>
          <img src={idea_svg} alt="none" width="80px" height="80px" />
          <h3>Boost your productivity</h3>
          <p >With fast communication and low latency your team can now focus on your main projects and minimize downtimes.</p>
          <br />
          <button className={classes.main_btn}>go to Download</button>
        </div> */}
      </div>
    </>
  )
}

export default FiveContextsComponent
