

export default function Navbar(){
    return(
        <nav className="logo">
            <img  src={process.env.PUBLIC_URL + '/images/airbnb-logo.png'} alt="logo" />
        </nav>
    )
}