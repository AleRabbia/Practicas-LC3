import { useState } from "react";
//import './App.css'
import Beers from './components/beers/Beers';
import NewBeer from './components/newBeer/NewBeer'
import ChangeDolar from "./components/changeDolar/ChangeDolar";

const BEERS = [
    {
        id: 1,
        beerName: "American",
        beerStyle: "IPA",
        price: 3,
        available: true,
        imageUrl: "https://cervezadimenna.com.ar/wp-content/uploads/2020/10/AIPA-1.png",
    },
    {
        id: 2,
        beerName: "Argenta",
        beerStyle: "IPA",
        price: 4,
        available: false,
        imageUrl: "https://cervezadimenna.com.ar/wp-content/uploads/2021/04/imageonline-co-transparentimage.png",
    },
    {
        id: 3,
        beerName: "Irish",
        beerStyle: "Red",
        price: 4,
        available: true,
        imageUrl: "https://cervezadimenna.com.ar/wp-content/uploads/2020/10/Irish-Red.png",
    },
    {
        id: 4,
        beerName: "Scotish",
        beerStyle: "Red",
        price: 3,
        available: true,
        imageUrl: "https://cervezadimenna.com.ar/wp-content/uploads/2023/02/Black-Ipa.png",
    },
    {
        id: 5,
        beerName: "DeEssoCiTratta",
        beerStyle: "Honey",
        price: 3,
        available: true,
        imageUrl: "https://cervezadimenna.com.ar/wp-content/uploads/2020/10/Honey-1-510x510.png",
    },
    {
        id: 6,
        beerName: "West Coast",
        beerStyle: "IPA",
        price: 3,
        available: true,
        imageUrl: "https://cervezadimenna.com.ar/wp-content/uploads/2024/01/West-Coast-Ipa-510x510.png",
    },
    /*{
        id: 7,
        beerName: "German",
        beerStyle: "Pilsen",
        price: 1,
        available: true,
        imageUrl: "https://cervezadimenna.com.ar/wp-content/uploads/2023/08/Space-Neipa-510x510.png",
    },
    {
        id: 8,
        beerName: "Choconut",
        beerStyle: "Porter",
        price: 2,
        available: false,
        imageUrl: "https://cervezadimenna.com.ar/wp-content/uploads/2020/10/Porter-510x510.png",
    },
    {
        id: 9,
        beerName: "Mr. Apa",
        beerStyle: "APA",
        price: 5,
        available: false,
        imageUrl: "https://cervezadimenna.com.ar/wp-content/uploads/2021/05/MrApa-510x510.png",
    },*/
];
function App() {
    const [beers, setBeers] = useState(BEERS);
    const [dolarValue, setDolarValue] = useState(1);

    const saveBeerDataHandler = (enteredBeerData) => {
        const beerData = {
            ...enteredBeerData,
            id: Math.random().toString(),
        };
        setBeers((prev) => [...prev, beerData]);
    };

    const saveDolarDataHandler = (newDolar) => {
        setDolarValue(newDolar);
    }

    const updateBeerHandler = (updatedBeerData) => {
        setBeers((prevBeers) => {
            return prevBeers.map((beer) => {
                if (beer.id === updatedBeerData.id) {
                    return updatedBeerData;
                }
                return beer;
            });
        });
    };

    
    return (
        <div>
            <h1>Lista de cervezas:</h1>
            <ChangeDolar onDolarDataSaved={saveDolarDataHandler} />
            <NewBeer onBeerDataSaved={saveBeerDataHandler} />
            <Beers beers={beers} dolarValue={dolarValue} onUpdate={updateBeerHandler} />
        </div>
    );
}

export default App;