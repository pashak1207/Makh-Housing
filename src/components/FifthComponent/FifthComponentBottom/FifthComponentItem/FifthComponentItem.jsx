import "./FifthComponentItem.css"

export function FifthComponentItem({onCompClick, itemData, length}) {

  let itemClass = itemData.isActive ? "fifth-component__item fifth-component__item-active" : "fifth-component__item"

  return (
    <button onClick={onCompClick} className={itemClass}>
      <h3>{itemData.title}</h3>
      <h4>{itemData.num}{(itemData.isActive ? ("/" + (length <10 ? ("0" + length) : length)) : "")}</h4>
      <p>{itemData.text}</p>
    </button>
  );
}
