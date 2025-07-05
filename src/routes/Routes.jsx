import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Coin from "../pages/Coin";
import Favorites from "../pages/Favorites";


function RoutesApp({ coinsData }){
    
    return(
        <Router>
            <nav>
                <Link to='/'>Home  </Link>
                <Link to='/favorites'>Fav-Coins</Link>
            </nav>
            <Routes>
                <Route path='/' element={<Home coinsData={coinsData} />} />
                <Route path='/coin/:id' element={<Coin />} />
                <Route path='/favorites' element={<Favorites />} />
            </Routes>   
        </Router>
    )

}

export default RoutesApp