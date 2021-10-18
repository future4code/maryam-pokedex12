import React from "react";
import Home from "../Components/Home";
import Lista from "../Components/Lista";
import Detalhes from "../Components/Detalhes";
import {BrowserRouter, Switch, Route} from "react-router-dom"

const Router = () => {
    return (
        <BrowserRouter>
        <Switch>
        <Route exact path={"/"}>
        <Home />
        </Route>

        <Route exact path={"/lista"}>
        <Lista />
        </Route>


        <Route exact path={"/detalhes"}>
        <Detalhes />
        </Route>

        </Switch>
        </BrowserRouter>
    )
}
export default Router