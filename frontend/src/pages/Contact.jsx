import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div>
        <img src={assets.contact_image} alt=""/>
        <div>
          <p>OUR OFFICE</p>
          <p>54709 Willms Station <br /> Suite 305, Washington, USA</p>
          <p>Tel:(123)456-7890 <br /> Email: prescripto_a@gamil.com</p>
          <p>CAREERS AT PRESCRIPTO</p>
          <p>Learn more about our teams and job openings.</p>
          <button>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
 