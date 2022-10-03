import "./FifthComponent.css"
import { FifthComponentBottom } from "./FifthComponentBottom/FifthComponentBottom"
import { useState } from "react"


export function FifthComponent(){
    const itemData = [
        {
            title: "Name of the service",
            num: "01",
            text: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            isActive: true,
            image: "house.png"
        },
        {
            title: "Name of the service",
            num: "02",
            text: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            isActive: false,
            image: "house2.png"
        },
        {
            title: "Name of the service",
            num: "03",
            text: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            isActive: false,
            image: "house2.png"
        },
        {
            title: "Name of the service",
            num: "04",
            text: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            isActive: false,
            image: "house.png"
        },
        {
            title: "Name of the service",
            num: "05",
            text: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            isActive: false,
            image: "house2.png"
        }
    ]
    
    const [active, setActive]  = useState(itemData);

    function isActiveNum(){
        for(let i = 0; i<active.length; i++){
            if(active[i].isActive){
                return i
            }
        }
    }

    setTimeout(() => {
        onCompClick("0" + ((isActiveNum()+1) < active.length ? isActiveNum()+2 : 1))
    }, 3000);


    function onCompClick(num){
        const newArr = itemData.map(item => item.num === num ? { ...item, isActive: true } : { ...item, isActive: false })
        setActive(newArr)
    }

    return (
        <div className="fifth-component">
            <div className="fifth-component__wrapper">
                <img src={require( "./../../img/FifthComponent/" +  active[(isActiveNum())].image)}  alt="House" />
                <FifthComponentBottom active={active} onCompClick={onCompClick}/>
            </div>
        </div>
    )
}