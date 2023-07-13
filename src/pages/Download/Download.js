import React from 'react'
import Footer from '../../components/Layout/Footer/Footer'
import TwoSidesSection from '../../components/pagesComponents/DownloadComponents/TwoSidesSection/TwoSidesSection'
// import DetailsGroup from '../../components/pagesComponents/FeaturesComponents/DetailsGroup/DetailsGroup'
import LightContext from '../../components/pagesComponents/ContactUsComponent/LightContext/LightContext'

const Download = () => {
  return (
    <div>
      <TwoSidesSection />
      <br /><br /><br />
      <LightContext />
      <br /><br />
      {/* <DetailsGroup /> */}
      <Footer />
    </div>
  )
}

export default Download
