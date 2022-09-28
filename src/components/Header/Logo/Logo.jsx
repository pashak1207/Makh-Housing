import LogoImg from "./../../../img/header/icons/logo.svg"
import { Link } from 'react-router-dom'
import "./Logo.css"

export function Logo(){
  return (
    <div className="logo">
      <Link to="/">
        <img src={LogoImg} alt="logo" />
      </Link>
    </div>
  );
};
