import React from 'react'

import './Footer.css'

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>copyright &copy; {currentYear} t31ly. All Rights Reserved</p>
    </footer>
  )
}

export default Footer