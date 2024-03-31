//import { useState } from 'react'

import './App.css'
//import Bookitem from './components/bookItem/Bookitem.jsx'
//import Beers from './components/beers/Beers.jsx';
//import BeerStyle from './components/beerStyle/BeerStyle.jsx';

//import Products from './components/products/Products';

//import Product from './components/products/Products.jsx';

/*function App() {
  const products = ['table', 'couch', 'chair1', 'chair2'];

  return (
    <div>
      {products.map((product, index) => (
        <Products key={index} name={product} />
      ))}
    </div>
  );
}

export default App;*/

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
// Dada la siguiente watchlist, crear una función que tome el array original
// y devuelva un arreglo de objetos que solo contenga las películas:
// 1. Dirigidas por Cristopher Nolan.
// 2. Con un imdbRating > 8.0
// El arreglo que se devuelve SOLO DEBE CONTENER el nombre de la película, ningún otra información
// Es obligatorio para este CC resolverlo con la función map()

let watchList = [
	{
		Title: 'Inception',
		Year: '2010',
		Rated: 'PG-13',
		Released: '16 Jul 2010',
		Runtime: '148 min',
		Genre: 'Action, Adventure, Crime',
		Director: 'Christopher Nolan',
		Writer: 'Christopher Nolan',
		Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy',
		Plot: 'A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
		Language: 'English, Japanese, French',
		Country: 'USA, UK',
		Awards: 'Won 4 Oscars. Another 143 wins & 198 nominations.',
		Poster: 'http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
		Metascore: '74',
		imdbRating: '8.8',
		imdbVotes: '1,446,708',
		imdbID: 'tt1375666',
		Type: 'movie',
		Response: 'True',
	},
	{
		Title: 'Interstellar',
		Year: '2014',
		Rated: 'PG-13',
		Released: '07 Nov 2014',
		Runtime: '169 min',
		Genre: 'Adventure, Drama, Sci-Fi',
		Director: 'Christopher Nolan',
		Writer: 'Jonathan Nolan, Christopher Nolan',
		Actors: 'Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow',
		Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
		Language: 'English',
		Country: 'USA, UK',
		Awards: 'Won 1 Oscar. Another 39 wins & 132 nominations.',
		Poster: 'http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg',
		Metascore: '74',
		imdbRating: '8.6',
		imdbVotes: '910,366',
		imdbID: 'tt0816692',
		Type: 'movie',
		Response: 'True',
	},
	{
		Title: 'The Dark Knight',
		Year: '2008',
		Rated: 'PG-13',
		Released: '18 Jul 2008',
		Runtime: '152 min',
		Genre: 'Action, Adventure, Crime',
		Director: 'Christopher Nolan',
		Writer: 'Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)',
		Actors: 'Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine',
		Plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
		Language: 'English, Mandarin',
		Country: 'USA, UK',
		Awards: 'Won 2 Oscars. Another 146 wins & 142 nominations.',
		Poster: 'http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
		Metascore: '82',
		imdbRating: '9.0',
		imdbVotes: '1,652,832',
		imdbID: 'tt0468569',
		Type: 'movie',
		Response: 'True',
	},
	{
		Title: 'Batman Begins',
		Year: '2005',
		Rated: 'PG-13',
		Released: '15 Jun 2005',
		Runtime: '140 min',
		Genre: 'Action, Adventure',
		Director: 'Christopher Nolan',
		Writer: 'Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)',
		Actors: 'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes',
		Plot: 'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.',
		Language: 'English, Urdu, Mandarin',
		Country: 'USA, UK',
		Awards: 'Nominated for 1 Oscar. Another 15 wins & 66 nominations.',
		Poster: 'http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg',
		Metascore: '70',
		imdbRating: '8.3',
		imdbVotes: '972,584',
		imdbID: 'tt0372784',
		Type: 'movie',
		Response: 'True',
	},
	{
		Title: 'Avatar',
		Year: '2009',
		Rated: 'PG-13',
		Released: '18 Dec 2009',
		Runtime: '162 min',
		Genre: 'Action, Adventure, Fantasy',
		Director: 'James Cameron',
		Writer: 'James Cameron',
		Actors: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
		Plot:'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
		Language: 'English, Spanish',
		Country: 'USA, UK',
		Awards: 'Won 3 Oscars. Another 80 wins & 121 nominations.',
		Poster: 'http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
		Metascore: '83',
		imdbRating: '7.9',
		imdbVotes: '876,575',
		imdbID: 'tt0499549',
		Type: 'movie',
		Response: 'True',
	},
];

const returnMovieTitle = (watchlist) => {

    return watchList.map ((movie) => {
      if (movie.Director === 'Christopher Nolan' || parseFloat(movie.imdbRating) > 8.0)
      {
        return movie.Title;
      }
      else{
        return null;
      }
    })
    
}

const titlesArray = returnMovieTitle(watchList);
console.log(titlesArray);