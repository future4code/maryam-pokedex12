import react from "react"
import { useHistory } from "react-router-dom"


const Lista = () =>  {
  const history = useHistory()
  const pageHome = () => {
    history.push("/")
  }
    return (
      <div>
        <button onClick={pageHome}>Voltar</button>
        <h1>Pagina lista</h1>
      </div>
    );
  }
  
  export default Lista;
  