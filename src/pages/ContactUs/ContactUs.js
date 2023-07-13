import React from 'react'
import ContactUsMain from '../../components/pagesComponents/ContactUsComponent/ContactUsMain/ContactUsMain'
import Footer from '../../components/Layout/Footer/Footer'
import LightContext from '../../components/pagesComponents/ContactUsComponent/LightContext/LightContext'

const ContactUs = () => {
  return (
    <div>
      <ContactUsMain />
      <br /><br /><br />
      <hr style={{ border: "#E6E6E6 solid 1px" }} />
      <LightContext />
      <br /><br /><br />
      <Footer />
    </div>
  )
}

export default ContactUs
