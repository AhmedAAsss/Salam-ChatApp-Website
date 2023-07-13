import React from 'react'
import Section from '../../components/pagesComponents/HomeComponents/SectionComponent/Section'
import Footer from '../../components/Layout/Footer/Footer'
import HomeMainComponent from '../../components/pagesComponents/HomeComponents/HomeHeroSecComponent/HomeMainComponent'
import CheckMark from '../../components/pagesComponents/HomeComponents/CheckMark/CheckMark'
import DetailsGroup from '../../components/pagesComponents/FeaturesComponents/DetailsGroup/DetailsGroup'
import DarkSection from '../../components/pagesComponents/FeaturesComponents/DarkSection/DarkSection'
import FourContextsComponent from '../../components/pagesComponents/HomeComponents/FourContextsComponent/FourContextsComponent'
import phoneBg1 from '../../asses/phoneBg.webp'
import phoneContent1 from '../../asses/phoneContent1.webp'
import phoneBg2 from '../../asses/phoneBg2.png'
import phoneContent2 from '../../asses/phoneContent2.webp'
import classes from './Home.module.css'


const Home = () => {
  return (
    <>
      <div className={classes.home_container}>
        <HomeMainComponent />
        <CheckMark />
        <FourContextsComponent />
        <Section
          title="Discover more Features"
          text="All Features and Abilities of Salam Messenger. Here you can discover every thing you need to know about messaging, sharing, groups, channels and other things about Salam Messenger."
          btn_text="Go to Features"
          img_URL1={phoneContent1}
          img_URL2={phoneBg2}
          btn_link="/features"
          flexDirection="row"
          all_text_width="50%" img_maxH="450px" img_padding="0 00px  0 100px" />
        <br /><br /><br /><br /><br />
        <Section
          title="More about our work"
          text="Here you can find everything you need to know about the Company, our works and all other achievements in different felids and if there is a career available for programmes or designers."
          btn_text="Go to About us"
          img_URL1={phoneContent2}
          img_URL2={phoneBg1}
          btn_link="/"
          // flexDirection="row"
          // b_color="#EEF4FF"
          all_text_width="50%" img_maxH="450px" img_padding="0 100px 5px 0px" />

        <br /><br /><br />
        <br /><br /><br />
        <br /><br /><br />
        <DarkSection />
        <br />
        <DetailsGroup />
        <br /><br /><br />
        <Footer />

      </div>
    </>
  )
}

export default Home
