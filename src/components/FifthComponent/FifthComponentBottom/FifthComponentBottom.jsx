import { FifthComponentItem } from "./FifthComponentItem/FifthComponentItem"
import "./FifthComponentBottom.css"

export function FifthComponentBottom({active, onCompClick}){
    return (
        <div className="fifth-component__bottom">
            {active.map(item=><FifthComponentItem key={item.num} length={active.length} onCompClick={()=>onCompClick(item.num)} itemData={item}/>)}            
        </div>
    )
}