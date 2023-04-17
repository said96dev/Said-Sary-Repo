import React from 'react'
import pageLinks from '../constants/links'
import { Link } from 'react-router-dom'
import { FaAlignRight } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <h3>Logo</h3>
          <button type='button' className='toggle-btn'>
            <FaAlignRight />
          </button>
        </div>
        <div className='nav-links'>
          {pageLinks.map((link) => {
            return (
              <Link key={link.id} to={link.url}>
                {link.text}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
