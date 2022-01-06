

export default function Cards(props){
    let badge 
    if(props.openSpots === 0){
        badge = "SOLD OUT"
    }else if(props.location === "Online"){
        badge = "ONLINE"
    }

    return(
        <div className="cards">
            {badge && <div className="card-badge">{badge}</div>}
            <img className="card-image" src={process.env.PUBLIC_URL + `/images/${props.coverImg}`} alt="" />
            <div className="card-stats">
                <img className="card-star" src={process.env.PUBLIC_URL + '/images/star.png'} alt="" />
                <p>{props.stats.rating}<span className="gray">({props.stats.reviewCount})•{props.location}</span></p>
            </div>
            <p className="card-title">{props.title}<br />
                <b>From ${props.price}</b>/person
            </p>
        </div>
    )
}