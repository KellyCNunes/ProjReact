import React, { useState, useEffect } from 'react';

function Letreiro() {
  const texto = "Conheça a Fatec";
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayText((prev) => prev + texto[index]);
      setIndex((prev) => (prev + 1) % texto.length);

      if (index === texto.length - 1) {
        setDisplayText(''); // Reinicia o texto quando termina
      }
    }, 200); // Ajuste o intervalo para simular a digitação

    return () => clearInterval(timer);
  }, [index]);

  return (
    <div>
      <h2>Letreiro</h2>
      <p>{displayText}</p>
    </div>
  );
}

export default Letreiro;