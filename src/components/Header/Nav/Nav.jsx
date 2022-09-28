import { NavLink } from 'react-router-dom'
import "./Nav.css"

export function Nav({navItems}) {
  return (
    <nav className='nav'>
      <ul>
        {navItems.map((item, index) => <li key={index}><NavLink activeclassname="active" to={item.href}>{item.name}</NavLink></li>)}
      </ul>
    </nav>
  );
}
