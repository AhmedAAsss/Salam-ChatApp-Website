import React from 'react'
import classes from './SectionComponent.module.css'
// import halfphone from '../../../../asses/halfphone.png'

const SectionComponent = (props) => {
  return (
    <>
      <div className={classes.section_container} style={{ flexDirection: props.flexDirection }}>
        <div className={classes.section_context}>
          <h3>{props.title}</h3>
          <p>{props.text}</p>
          <br />
          <a className={classes.main_btn} href={props.btn_link}>{props.btn_text}</a>
        </div>

        <picture style={{ textAlign: props.place_Img }}>
          <img src={props.img} alt='none' width="100%" height="100%" />
        </picture>
      </div>
    </>
  )
}

export default SectionComponent
