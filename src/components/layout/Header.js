import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div>
      <header id="header">
        <div className="header__port">
            <Link to="/portfolio">PORTFOILO</Link>
        </div>
        <div className="header__logo">
            <Link to="/">MOVIE SITE</Link>
        </div>
        <nav className="header__menu">
            <ul>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/reference">REFER</Link></li>
                <li><Link to="/youtube">YOUTUBE</Link></li>
                <li><Link to="/movie">MOVIE</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header