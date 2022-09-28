import { NavLink } from 'react-router-dom'
import "./MobileNav.css"

export function MobileNav({navItems}) {
  return (
    <nav className='mobileNav'>
      <ul>
        {navItems.map((item, index) => <li key={index}><NavLink activeclassname="active" to={item.href}>{item.name}</NavLink></li>)}
      </ul>
    </nav>
  );
}
