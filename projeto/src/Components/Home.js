import react from "react"
import {useHistory} from "react-router-dom"

const Home = () =>  {
    const history = useHistory()

    const pageList = () => {
        history.push("/lista")
    }
    const pageDetalhes = () => {
        history.push("/detalhes")
    }

    return (
      <div>

        <button onClick={pageList}>Ir lista de Pokemon</button>

        <button onClick={pageDetalhes}>Ir para Detalhes</button>

        <h1>Pagina home</h1>
      </div>
    );
  }
  
  export default Home;
  