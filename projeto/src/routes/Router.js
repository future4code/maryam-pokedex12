import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PokemonsListScreen from "../screens/PokemonsListScreen/PokemonsListScreen";
import PokemonDetailScreen from "../screens/PokemonDetailScreen/PokemonDetailScreen";
import PokedexScreen from "../screens/PokedexScreen/PokedexScreen";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" >
          <PokemonsListScreen/>
        </Route>

        <Route exact path="/pokemon/:name/:screenPokedex?">
          <PokemonDetailScreen/>
        </Route>

        <Route exact path="/pokedex">
          <PokedexScreen/>
        </Route>

        <Route>
          <div>Erro - Página não encontrada</div>
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
