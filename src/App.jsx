//import { useState } from 'react'

import './App.css'
//import Bookitem from './components/bookItem/Bookitem.jsx'
//import Beers from './components/beers/Beers.jsx';
//import BeerStyle from './components/beerStyle/BeerStyle.jsx';
import './App.css'
import Products from './components/products/Products';

//import Product from './components/products/Products.jsx';

function App() {
  const products = ['table', 'couch', 'chair1', 'chair2', 'table2'];

  return (
    <div>
      {products.map((product, index) => (
        <Products key={index} name={product} />
      ))}
    </div>
  );
}

export default App;

  /*const books = [
    {
      bookTitle: "100 años de soledad",
      bookAuthor: "Gabriel García Marquez",
      bookRating: Array(5).fill("*"),
      pageCount: 410,
      imageUrl:
        "https://images.cdn3.buscalibre.com/fit-in/360x360/61/8d/618d227e8967274cd9589a549adff52d.jpg",
    },
    {
      bookTitle: "Asesinato en el Orient Express",
      bookAuthor: "Agatha Christie",
      bookRating: Array(4).fill("*"),
      pageCount: 256,
      imageUrl:
        "https://m.media-amazon.com/images/I/71RFyM95qwL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      bookTitle: "Las dos torres",
      bookAuthor: "J.R.R Tolkien",
      bookRating: Array(5).fill("*"),
      pageCount: 352,
      imageUrl:
        "https://m.media-amazon.com/images/I/A1y0jd28riL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      bookTitle: "50 sombras de Grey",
      bookAuthor: "E.L James",
      bookRating: Array(1).fill("*"),
      pageCount: 514,
      imageUrl:
        "https://prodimage.images-bn.com/pimages/9781728260839_p0_v2_s1200x630.jpg",
    },
  ];*/

  /*const beers = [
    {
      id: 1,
      beerName: "American",
      beerStyle: "IPA",
      price: 3,
      available: true,
    },
    {
      id: 2,
      beerName: "Argenta",
      beerStyle: "IPA",
      price: 4,
      available: false,
    },
    {
      id: 3,
      beerName: "Irish",
      beerStyle: "Red",
      price: 4,
      available: true,
    },
    {
      id: 4,
      beerName: "Scotish",
      beerStyle: "Red",
      price: 3,
      available: true,
    },
    {
      id: 5,
      beerName: "DeEssoCiTratta",
      beerStyle: "APA",
      price: 3,
      available: true,
    },
    {
      id: 6,
      beerName: "Santa APA",
      beerStyle: "APA",
      price: 3,
      available: true,
    },
    {
      id: 7,
      beerName: "German",
      beerStyle: "Pilsen",
      price: 1,
      available: true,
    },
    {
      id: 8,
      beerName: "London Porter",
      beerStyle: "Porter",
      price: 2,
      available: false,
    },
    {
      id: 9,
      beerName: "Scotish ALE",
      beerStyle: "Red",
      price: 5,
      available: true,
    },
  ];*/


  /*
  FILTRA LAS CERVEZAS DISPONIBLES Y LAS MUESTRA POR PANTALLA
  const beerAvailable = beers.filter((beer) => { return beer.available === true})
  return (

    <div>
      {beerAvailable.map ((beer)=>(        
        <Beers
        key={beer.id}
        beerName={beer.beerName}
        beerStyle={beer.beerStyle}
        price={beer.price}
        available={beer.available}
    />
    ))}
    </div>
  )*/
  
  /*CUENTA LOS ESTILO IPA Y RED Y LO MUESTRA POR PANTALLA
  const styleBeers = beers.filter((beer) => { return beer.beerStyle === "IPA" || beer.beerStyle === "Red" })
  MUESTRA POR PANTALLA LAS CERVEZAS
  return (
    <div>
      <h1>Cantidad de IPA & Red: {styleBeers.length}</h1>

      <div>
        {beers.map((beer) => (
          <Beers
            key={beer.id}
            beerName={beer.beerName}
            beerStyle={beer.beerStyle}
            price={beer.price}
            available={beer.available}
          />
        ))}
      </div>
    </div>
  )*/

  /*ESTE COMPONENTE MUESTRA SOLO LOS ESTILOS DE CERVEZAS
  return (

    <div>
      {beers.map ((beer)=>(        
        <BeerStyle
        key={beer.id}
        beerStyle={beer.beerStyle}
    />
    ))}
    </div>
  )*/
