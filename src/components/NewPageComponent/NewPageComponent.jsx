import "./NewPageComponent.css";
import { NavLink } from "react-router-dom";

export function NewPageComponent({ page }) {
  return (
    <div className="newPage">
      <h1>
        Page <span>{page}</span> is still
        <br /> under construction
      </h1>
      <NavLink to="/">Go back</NavLink>
    </div>
  );
}
