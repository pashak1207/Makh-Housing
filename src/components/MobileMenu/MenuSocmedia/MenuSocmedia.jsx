export function MenuSocmedia({socMedia}){
    return (
        <div className="menu-socmedia">
            <ul>
                {socMedia.map(item => <li><a target="_blank" rel="noopener noreferrer" href={item.href}>{item.name}</a></li>)}
            </ul>
        </div>
    )
}