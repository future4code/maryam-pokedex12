import react from "react"
import { useHistory } from "react-router-dom"
import {HeaderHome} from "./styled"


const Lista = () =>  {
  const history = useHistory()
  const pageHome = () => {
    history.push("/")
  }
    return (
      <HeaderHome>
        <h1>Pagina lista</h1>
        <button onClick={pageHome}>Voltar</button>
      
      </HeaderHome>
    );
  }
  
  export default Lista;
  