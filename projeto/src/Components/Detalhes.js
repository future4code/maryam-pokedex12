import react from "react"
import {useHistory} from "react-router-dom"
import { HeaderHome, StyledDetails } from "./styled"


const Detalhes = () =>  {
  const history = useHistory()
  const backPageHome = () => {
    history.push("/")
    }
    return (
      <div>
      <HeaderHome>
        <h1>Pagina detalhes</h1>
        <button onClick={backPageHome}>Voltar</button>
      </HeaderHome>

      <StyledDetails>

        <img />
        <img />

        <h2>Stats</h2>

        <h2>type 1 type 2</h2>

        <h2>Moves</h2>
      </StyledDetails>
      </div>
    );
  }
  
  export default Detalhes;