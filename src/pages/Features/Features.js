import React from 'react'
import classes from './Features.module.css'
import Footer from '../../components/Layout/Footer/Footer'
import FiveContextsComponent from '../../components/pagesComponents/FeaturesComponents/FiveContextsComponent/FiveContextsComponent'
import FeatureMainComponent from '../../components/pagesComponents/FeaturesComponents/FeatureHeroSecComponent/FeatureMainComponent'
import SectionFeature from '../../components/pagesComponents/FeaturesComponents/SectionFetureComponent/SectionFeature'
import DetailsGroup from '../../components/pagesComponents/FeaturesComponents/DetailsGroup/DetailsGroup'
import LightContext from '../../components/pagesComponents/ContactUsComponent/LightContext/LightContext'
import Steps from '../../components/pagesComponents/FeaturesComponents/Steps/Steps'
import DarkSection from '../../components/pagesComponents/FeaturesComponents/DarkSection/DarkSection'
import attract from '../../asses/adv_svg/attract.svg'
import edit_delete from '../../asses/adv_svg/edit_delete.svg'
import notifications from '../../asses/adv_svg/notifications.svg'
// import texting from '../../asses/adv_svg/texting.svg'
import texting from '../../asses/adv_svg/platform.svg'


const Features = () => {
  return (
    <>
      <div className={classes.features_container}>
        {/* <DarkMainComponent /> */}
        <FeatureMainComponent />
        <Steps />
        <FiveContextsComponent />
        <br />
        <br />
        <br />
        <SectionFeature
          title="Attract specific audience"
          text="You can attract specific audiences and communities by making specific channels or groups so people can find your find what they need easily. And it makes finding specific information easier."
          img_URL1={null}
          img_URL2={attract}
          // btn_text="Go to Features"
          // btn_link="/features"
          // flexDirection="row"
          // b_color="#EEF4FF"
          all_text_width="50%" img_maxH="450px" img_padding="0 00px  0 100px" />
        <br />
        <br />
        <br />
        <SectionFeature
          title="Delete & Edit your Messages"
          text="The ability to Delete and Edit any message you did send even if the other person has see the message and read it. Eliminating the fear of sending wrong messages, images or files."
          img_URL1={null}
          img_URL2={edit_delete}
          flexDirection="row"
          // btn_text="Go to Features"
          // btn_link="/features"
          // b_color="#EEF4FF"
          all_text_width="50%" img_maxH="450px" img_padding="0 00px  0 100px" />
        <br />
        <hr style={{ margin: "50px" }} />
        <DetailsGroup />
        <DarkSection />
        <br />
        <br />
        <SectionFeature
          title="Cross-Platform"
          text="Salam Messenger currently supports Android devices and will soon be available on iOS, allowing for seamless messaging between the two platforms."
          img_URL1={null}
          img_URL2={texting}
          btn_link="/features"
          // flexDirection="row"
          // b_color="#EEF4FF"
          all_text_width="50%" img_maxH="450px" img_padding="0 00px  0 100px" />
        <br />
        <br />
        <SectionFeature
          title="Customizable notifications"
          text="Allowing users to turn on and off any type of notifications they have such as groups, channels, privet and public chats. So they can minimize there notifications."
          img_URL1={null}
          img_URL2={notifications}
          flexDirection="row"
          // btn_text="Go to Features"
          // btn_link="/features"
          // b_color="#EEF4FF"
          all_text_width="50%" img_maxH="450px" img_padding="0 00px  0 100px" />
        <br /><br />
        <hr style={{ border: "#E6E6E6 solid 1px" }} />
        <br /><br />
        <LightContext />
        <br /><br />
        {/* <SectionFeature
          title="Customize personal privacy"
          text="To insure users has extra security we provide some optional features such as preventing in-chat screenshots and the ability to see messages without marking messages as seen and many other. "
          // btn_text="Go to Features"
          img_URL1={null}
          img_URL2={attract}
          btn_link="/features"
          // flexDirection="row"
          // b_color="#F4F4F6"
          all_text_width="50%" img_maxH="500px" margin="0 -100px  0 0" /> */}
        <Footer />
      </div>
    </>
  )
}

export default Features
