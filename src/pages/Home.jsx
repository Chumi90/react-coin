function Home({ coinsData }) {
    // Función para guardar moneda en favoritos
    const guardarFavorito = (coin) => {
        let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
        // Evitar duplicados
        if (!favoritos.find(fav => fav.id === coin.id)) {
            favoritos.push(coin);
            localStorage.setItem('favoritos', JSON.stringify(favoritos));
        }
    };

    return (
        <>
            <h1>Bienvenido a la Aplicación</h1>
            <p>Lista de criptomonedas</p>
            <ul>
                {coinsData.coins && coinsData.coins.data ? (
                    coinsData.coins.data.map(coin => (
                        <li key={coin.id}>
                            {coin.name} - {coin.priceUsd}
                            <button onClick={() => guardarFavorito(coin)} style={{marginLeft: '10px'}}>Guardar en favoritos</button>
                        </li>
                    ))
                ) : (
                    <li>Cargando monedas...</li>
                )}
            </ul>
        </>
    )
}

export default Home