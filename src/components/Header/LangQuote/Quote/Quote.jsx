import Plus from "./../../../../img/header/icons/plus_orange.svg";
import { HashLink as Link } from "react-router-hash-link";
import "./Quote.css";

export function Quote() {
  return (
    <div className="quote">
      <Link to={"/pathLink#6"}>
        <img src={Plus} alt="" />
        <p>Get a quote</p>
      </Link>
    </div>
  );
}
