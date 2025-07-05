import RoutesApp from "./routes/routes";
import {fetchCoins} from "./hooks/FetchCoins"

const App=()=>{
    const urlCoins = 'https://rest.coincap.io/v3/assets?apiKey=2ed6bd22ff2ec30aede6161a2de4ea8ae1def8f0ecae21fd429fcb12c1768c3a';
    const CoinsData =fetchCoins(urlCoins);
    return(
        <RoutesApp coinsData={CoinsData} />
    )
}

export default App