import React from 'react'
import {BsInstagram,BsGithub,BsLinkedin, BsFacebook} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'

const SocialMedia = () => {
  const codeLink = 'www.facebook.com'
  return (
    <div className='app__social'>
        <div>
            <BsGithub/>   
        </div>
        <div>
            <BsFacebook/>
        </div>
        <div>
            <BsLinkedin/>   
        </div>
    </div>
  )
}

export default SocialMedia