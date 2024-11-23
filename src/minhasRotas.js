import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Atividade01 from "./projeto1/Atividade01";
import Atividade02 from "./projeto2/Atividade02";
import Atividade03 from "./projeto3/Atividade03";
import Atividade04 from "./projeto4/Atividade04";
import Atividade05 from "./projeto5/Atividade05";


export default function MinhasRotas(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/atividade01" element={<Atividade01 />}/> 
            <Route path="/atividade02" element={<Atividade02 />}/> 
            <Route path="/atividade03" element={<Atividade03 />}/> 
            <Route path="/atividade04" element={<Atividade04 />}/> 
            <Route path="/atividade05" element={<Atividade05 />}/> 
        </Routes>
        </BrowserRouter>
    );
}