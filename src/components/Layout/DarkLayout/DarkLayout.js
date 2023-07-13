import React from 'react'
import DarkHeader from './DarkHeader'

const DarkLayout = (props) => {
  return (
    <div>
      <DarkHeader />
      <main>{props.children}</main>
    </div>
  )
}

export default DarkLayout