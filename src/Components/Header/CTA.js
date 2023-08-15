import React from 'react'
import CV from '../../Assests/cv.pdf'
// import {BiSolidDownload} from 'react-icons/bi'
import{FaDownload} from 'react-icons/fa'
import{BsFillChatLeftDotsFill} from 'react-icons/bs'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'><FaDownload/> RESUME</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk <BsFillChatLeftDotsFill/></a>
    </div>
  )
}

export default CTA;