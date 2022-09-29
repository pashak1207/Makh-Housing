import { Quote } from "./../../Header/LangQuote/Quote/Quote"
import "./SecondComponentTop.css"

export function SecondComponentTop() {
  return (
    <div className="second-component__top">
      <h2>THE FUTURE<br/> OF HOMEBUILDING</h2>
      {window.screen.width > 992 && 
        <Quote />
      }
    </div>
  );
}
