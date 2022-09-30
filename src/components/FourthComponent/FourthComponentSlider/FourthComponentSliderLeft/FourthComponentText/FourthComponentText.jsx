import "./FourthComponentText.css"

export function FourthComponentText({textItems}) {
  return (
    <div className="fourth-component__text">
      <div className="fourth-component__text-left">
        {textItems.left.map((item, index) => <p key={index}>{item}</p>)}
      </div>
      <div className="fourth-component__text-right">
        {textItems.right.map((item, index) => <p key={index}>{item}</p>)}
      </div>
    </div>
  );
}
