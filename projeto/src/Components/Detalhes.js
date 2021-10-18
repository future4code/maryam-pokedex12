import react from "react"
import {useHistory} from "react-router-dom"


const Detalhes = () =>  {
  const history = useHistory()
  const backPageHome = () => {
    history.push("/")
    }
    return (
      <div>
        <button onClick={backPageHome}>Voltar</button>
        <h1>Pagina detalhes</h1>
      </div>
    );
  }
  
  export default Detalhes;
  