import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Cards from "./components/Cards"

import data from "./data"

export default function App(){
    const card = data.map(item =>{
        return <Cards 
            key={item.id} 
            {...item}
        />
    })

    return(
        <div>
            <Navbar />
            <Hero />
            <div className="cards-list">{card}</div>
            <footer>Powered by Richard</footer>
        </div>
    )
}