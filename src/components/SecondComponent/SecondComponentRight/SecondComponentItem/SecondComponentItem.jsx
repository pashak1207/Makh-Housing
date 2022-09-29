import "./SecondComponentItem.css"

export function SecondComponentItem({titleData, textData}){
    return (
        <div className="second-component__item">
          <h3>{titleData}</h3>
          <p>{textData}</p>
      </div>
    )
}