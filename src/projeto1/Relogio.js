import React, { useState, useEffect } from 'react';
function Relogio() {

  const [horario, setHorario] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setHorario(new Date());
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  return (
    <div>
      <h2>Relógio</h2>
      <p>{horario.toLocaleTimeString()}</p>
    </div>
  );
}

export default Relogio;