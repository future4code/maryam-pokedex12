import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { CardContainer, HomeContainer, PokeButton, HeaderHome } from "./styled"
import axios from "axios"



const Home = () =>  {
    const history = useHistory()
    const [pokemons, setPokemons] = useState ([])
   

    const pageList = () => {
        history.push("/lista")
    }
    const pageDetalhes = () => {
        history.push("/detalhes")
    }

    const getPokemons = () => {
    axios
    .get ("https://pokeapi.co/api/v2/pokemon/")
    .then ((res) => { 
        
        setPokemons(res.data.results)
    })
    .catch ((err) => {
      console.log (err)
    })
  }

  useEffect (() => {
    getPokemons ()
  }, [])



  const pokemonList = pokemons.map((pokemon) => {
    return (
    <CardContainer>
      <p>{pokemon.name}</p>
      <PokeButton>
        <button> Adicionar </button>
        <button> Detalhes </button>
      </PokeButton>
    </CardContainer>
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
  