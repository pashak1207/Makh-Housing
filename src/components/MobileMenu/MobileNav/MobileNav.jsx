import { HashLink as Link } from "react-router-hash-link";
import "./MobileNav.css";

export function MobileNav({ navItems }) {
  return (
    <nav className="mobileNav">
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link activeclassname="active" to={"/pathLink#" + item.href}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
