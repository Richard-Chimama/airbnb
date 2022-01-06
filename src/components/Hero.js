

export default function Hero(){
    return(
        <section className="hero">
            <img className="hero-image" src={process.env.PUBLIC_URL + '/images/photo-grid.png'} alt="" />
            <h3 className="hero-title">Online Expirience</h3>
            <p className="hero-text">Join unique interactive activities led by one-of-a-kind 
                hosts-all without leaving home.
            </p>
        </section>
    )
}