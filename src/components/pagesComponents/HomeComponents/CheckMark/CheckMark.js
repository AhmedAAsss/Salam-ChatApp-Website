import React from 'react'
import classes from './CheckMark.module.css'
import check from '../../../../asses/home_svg/check.svg'

const CheckMark = () => {
  return (
    <div className={classes.CheckMark}>
      <div>
        <div><img className={classes.CheckMark_img} src={check} width="30px" alt="none" /><p>Completely Free</p></div>
        <div><img className={classes.CheckMark_img} src={check} width="30px" alt="none" /><p>Full encryption</p></div>
        <div><img className={classes.CheckMark_img} src={check} width="30px" alt="none" /><p>Instant Messages</p></div>
        <div><img className={classes.CheckMark_img} src={check} width="30px" alt="none" /><p>Personalization</p></div>
      </div>
    </div>
  )
}

export default CheckMark
