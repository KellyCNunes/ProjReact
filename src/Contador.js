import React, { useState } from 'react';
function Contador() {
      <>
      <h3> Meu Contador</h3>
      </>
      
        const [total, setTotal] = useState(0);
        const [homens, setHomens] = useState(0);
        const [mulheres, setMulheres] = useState(0);
      
        const adicionarHomem = () => {
          setHomens(homens + 1);
          setTotal(total + 1);
        };
      
        const adicionarMulher = () => {
          setMulheres(mulheres + 1);
          setTotal(total + 1);
        };
      
        return (
          <div>
            <h1>Contador de Pessoas</h1>
            <p>Total de pessoas: {total}</p>
            <p>Homens: {homens}</p>
            <p>Mulheres: {mulheres}</p>
            <button onClick={adicionarHomem}>Adicionar Homem</button>
            <button onClick={adicionarMulher}>Adicionar Mulher</button>
          </div>
        );
      }
  
  export default Contador;