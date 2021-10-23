import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { CardContainer, HomeContainer, PokeButton, HeaderHome } from "./styled"
import axios from "axios"



const Home = () =>  {
    const history = useHistory()
    const [pokemons, setPokemons] = useState ([])
    const [pokemonImage, setPokemonImage] = useState([])
   

    const pageList = () => {
        history.push("/lista")
    }
    const pageDetalhes = () => {
        history.push("/detalhes")
    }

    const getPokemons = () => {
    axios
    .get ("https://pokeapi.co/api/v2/pokemon/?limit=30&offset=30/")
    .then ((res) => { 
        
        setPokemons(res.data.results)
        
        console.log(res.data.results)
    })
    .catch ((err) => {
      console.log (err)
    })
  }

  useEffect (() => {
    getPokemons ()
  }, [])

  function getPokemonImage() {
    pokemon &&
     pokemons.map((item) => {
    return (
      axios
    .get (`https://pokeapi.co/api/v2/pokemon/${item.name}/`)
    .then ((res) => { 
        setPokemonImage(res.data.sprites.front_default)
        console.log("imagens", res.data.sprites.front_default)
    })
    .catch ((err) => {
      console.log (err)
    })
    )
  })}
    
  

  useEffect (() => {
    getPokemonImage ()
  }, [pokemons])

 


  const pokemonList = pokemonImage.map((pokemon) => {
    return (
    <div>
      <img src = {pokemon} />
      {/* <p>{pokemon.name}</p> */}
      <PokeButton>
        <button> Adicionar </button>
        <button> Detalhes </button>
      </PokeButton>
    </div>
    )
  })

    return (
      <>
      <HeaderHome>
        <img src="https://www.pinclipart.com/picdir/big/497-4978857_drawn-pokeball-clear-background-transparent-background-pokeball-png.png"/>
        <h1> Lista de Pokemons </h1>
      <div>
        <button onClick={pageList}>Ir lista de Pokemon</button>
        <button onClick={pageDetalhes}>Ir para Detalhes</button>      
      </div>
      </HeaderHome>
      <HomeContainer>        
          {pokemonList}           
      </HomeContainer>
        </>
    );
  }
  
  export default Home;
  