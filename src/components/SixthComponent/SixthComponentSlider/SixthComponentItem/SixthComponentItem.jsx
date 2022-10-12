import "./SixthComponentItem.css";

export function SixthComponentItem({ item }) {
  return (
    <div className="sixth-component__item">
      <img
        src={require("./../../../../img/SixthComponent/" + item.image)}
        alt={item.name}
      />
      <p>{item.name}</p>
    </div>
  );
}
