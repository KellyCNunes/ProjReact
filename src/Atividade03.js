import Profile from "./Profile";
import Gallery from "./Gallery";
import App1 from "./App1";

import { Link } from "react-router-dom";

function Atividade03() {
    return (
      <>
      <h2> Atividade 03</h2>
      <Profile/>
      <Gallery/>
      <App1/>
     

      <Link to ="/"> Voltar</Link>
      </>
    );
  }
  
  export default Atividade03;