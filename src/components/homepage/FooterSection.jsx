import React from 'react'

const FooterSection = () => {
  return (
    <footer>
      <div>
        <img src="https://little-lemon-jp.netlify.app/static/media/footer-logo.4470f9c9e815da98dbb3.png" alt="" />
      </div>
      <div className='footer-navigation'>
        <h4>
          Navigation
        </h4>
        <ul>
          <li>Home </li>
          <li>About</li>
          <li>Menu</li>
        </ul>
      </div>
      <div className='contact-footer'>
        <h4>Contact</h4>
        <ul>
          <li>2395 Maldove Way,
            Chicago Illinois</li>
          <li>(629)-243-6827
          </li>
          <li>info@littlelemon.com</li>
        </ul>
      </div>
      <div className='connect-footer'>
        <h4>Connect</h4>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Join us!</li>
        </ul>
      </div>
    </footer>
  )
}

export default FooterSection