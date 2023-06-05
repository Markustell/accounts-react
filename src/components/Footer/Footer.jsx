import React from 'react'

import './Footer.css'

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright &copy; {currentYear} WoraponK. All Rights Reserved</p>
    </footer>
  )
}

export default Footer