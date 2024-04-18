import React from 'react'
import instagram_logo from '../../assets/svg/instagramCream.svg'
import linkedin_logo from '../../assets/svg/linkedinCream.svg'

const SocialBox = () => {
  return (
    <div>
      <div className="social_home">
              <h2 className='social_tittle'>Síguenos en redes sociales</h2>
                  <div className="instagram_box">
                      <img className='social_logo' src={instagram_logo} alt="instagram logo" />
                      <a className='social_links' href="http://" target="_blank" rel="noopener noreferrer">Instagram/Bitpress</a>
                  </div>
                  <div className="linkedin_box">
                      <img className='social_logo' src={linkedin_logo} alt="linkedin logo" />
                      <a className='social_links' href="http://" target="_blank" rel="noopener noreferrer">LinkedIn/Bitpress</a>
                  </div>
      </div>
    </div>
  )
}

export default SocialBox