import "./FooterBottomLeft.css";

export function FooterBottomLeft({ state }) {
  return (
    <div className="footer__bottom-left">
      <p>{state.alRight}</p>
      <p>{state.ppolicy}</p>
    </div>
  );
}
