import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Coin() {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    // Buscar primero en favoritos
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const found = favoritos.find((c) => c.id === id);
    if (found) {
      setCoin(found);
    } else {
      // Si no está en favoritos, buscar en la API
      fetch(`https://rest.coincap.io/v3/assets/${id}`)
        .then((res) => res.json())
        .then((data) => setCoin(data.data))
        .catch(() => setCoin(null));
    }
  }, [id]);

  if (!coin) return <p>Cargando información de la moneda...</p>;

  return (
    <>
      <h1>{coin.name}</h1>
      <ul>
        <li>ID: {coin.id}</li>
        <li>Nombre: {coin.name}</li>
        <li>Simbolo: {coin.symbol}</li>
        <li>Precio USD: {coin.priceUsd}</li>
        <li>Ranking: {coin.rank}</li>
        <li>Market Cap USD: {coin.marketCapUsd}</li>
        <li>Supply: {coin.supply}</li>
        <li>Max Supply: {coin.maxSupply}</li>
        <li>Cambio 24h: {coin.changePercent24Hr}%</li>
      </ul>
    </>
  );
}
export default Coin;