import "./SlideText.css"

export function SlideText({textData}){

    const classOfItem = "third-component__item third-component__item" + textData.num
    const header = (window.screen.width <= 992) ? ("0" + textData.num + ". " + textData.title) : textData.title

    return (
        <div className={classOfItem}>
          <h3>{header}</h3>
          <p>{textData.text}</p>
        </div>
    )
}