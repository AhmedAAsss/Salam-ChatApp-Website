import React, { useEffect, useState } from 'react'
import classes from './SectionFeature.module.css'


const SectionFeature = (props) => {
  const [isBigScreen, setIsBigScreen] = useState(true);
  useEffect(() => {
    const handleResize = () => setIsBigScreen(window.innerWidth >= 770);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <>
      <div id={props.id} className={classes.section_container} style={{ flexDirection: props.flexDirection, backgroundColor: props.b_color }}>

        <div className={classes.section_context} style={{ width: isBigScreen ? props.all_text_width : "100%" }}>
          <h3>{props.title}</h3>
          <p>{props.text}</p>
          <br />
          {/* <a className={classes.main_btn} href={props.btn_link}>{props.btn_text}</a> */}
        </div>

        <picture style={{ margin: props.margin }}>
          <img style={{ maxHeight: props.img_maxH }} width="0%" height="0%" src={props.img_URL1} alt="" />
          <img style={{ maxHeight: props.img_maxH, padding: props.img_padding }} width="100%" height="100%" src={props.img_URL2} alt="" />
        </picture>
      </div>
    </>
  )
}

export default SectionFeature
