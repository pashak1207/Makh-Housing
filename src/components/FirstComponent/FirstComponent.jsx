import "./FirstComponent.css"
import House from "./../../img/FirstComponent/house.png"
import { MobileNav } from "./../MobileMenu/MobileNav/MobileNav"

export function FirstComponent({mobileNav}){
    return (
        <div className="first-component">
            <div className="first-component__gradient"></div>
            <div className="wrapper">
                <h1>A BETTER WAY TO BUILD HOMES</h1>
                {window.screen.width > 992 && 
                    <MobileNav navItems={mobileNav}/>
                }
            </div>
            <div className="first-component__houseImage">
                <img src={House} alt="House" />
            </div>
        </div>
    )
}