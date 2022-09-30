export function SlideText({textData}){

    const classOfItem = "third-component__item third-component__item" + textData.num

    return (
        <div className={classOfItem}>
          <h3>{textData.title}</h3>
          <p>{textData.text}</p>
        </div>
    )
}