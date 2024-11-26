import React from 'react';
import React, { useState, useEffect } from 'react';
import { Carrinho } from './components/Carrinho';
import { Produtos } from './components/Produtos';
import axios from 'axios';

const API_URL = 'http://localhost:4000'; 

function App() {
  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);

  
  useEffect(() => {
    axios.get(`${API_URL}/produtos`)
      .then((response) => setProdutos(response.data))
      .catch((error) => console.error('Erro ao buscar produtos:', error));
  }, []);

  const addToCarrinho = (produtos) => {
    setCarrinho((prevCarrinho) => [...prevCarrinho, produtos]);
  };

  
  const removeFromCarrinho = (id) => {
    setCarrinho((prevCarrinho) => prevCarrinho.filter((item) => item.id !== id));
  };

  
  const checkout = () => {
    axios.post(`${API_URL}/checkout`, { items: carrinho })
      .then(() => {
        alert('Compra finalizada com sucesso!');
        setCarrinho([]);
      })
      .catch((error) => console.error('Erro ao finalizar compra:', error));
  };

  return (
    <div>
      <h1>Loja React</h1>
      <Produtos produtos={produtos} onAddToCarrinho={addToCarrinho} />
      <Cart carrinhoItems={carrinho} onRemove={removeFromCarrinho} onCheckout={checkout} />
    </div>
  );
}

export default App;


