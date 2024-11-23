import Relogio from "./Relogio";
import Letreiro from "./Letreiro";
import { Link } from "react-router-dom";

function Atividade01() {
  return (
    <>
    <h2> Atividade 01</h2>
    <Letreiro/>
    <Relogio/>

    <Link to ="/"> Voltar</Link>
    </>
  );
}

export default Atividade01;
