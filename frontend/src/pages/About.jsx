//create with writing 'rafce'

import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div>
        <p>ABOUT <span>US</span></p>
      </div>

      <div>
        <img src={assets.about_image} alt="" />
        <div>
          <p>Welcome To Prescripto, Your Trusted Parter In Managing Your Healthcare Needs Conveniently And Efficiently. At Prescripto, We Understand The Challenges Individuals Face When It Comes To Scheduling Doctor Appointments And Managing Their Health Records.</p>
          <p>Prescripto Is Committed To Excellence In Healthcare Technology. We Continuously Strive To Enhance Our Platform, Integrating The Latest Advancements To Improve User Experience And Deliver Superior Service. Whether You're Booking Your First Appointment Or Managing Ongoing Care, Prescripto Is Here To Support You Every Step Of The Way.</p>
          <b>Our Vision</b>
          <p>Our Vision At Prescripto Is To Create A Seamless Healthcare Experience For Every User. We Aim To Bridge The Gap Between Patients And Healthcare Providers, Making It Easier For You To Access The Care You Need, When You Need It. </p>
        </div>
      </div>

    </div>
  )
}

export default About
