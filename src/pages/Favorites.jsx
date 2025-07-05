import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Favorites (){
    const [favoritos, setFavoritos] = useState([]);

    useEffect(() => {
        const favs = JSON.parse(localStorage.getItem('favoritos')) || [];
        setFavoritos(favs);
    }, []);

    return(
        <>
            <h1>Criptomonedas Favoritas</h1>
            <p>Listado de CriptoMonedas Favoritas</p>
            <ul>
                {favoritos.length > 0 ? (
                    favoritos.map(coin => (
                        <li key={coin.id}>
                            <Link to={`/coin/${coin.id}`}>{coin.name} - {coin.priceUsd}</Link>
                        </li>
                    ))
                ) : (
                    <li>No hay monedas favoritas guardadas.</li>
                )}
            </ul>
        </>
    )
}
export default Favorites