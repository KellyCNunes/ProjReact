import React from 'react';
import Gallery from './Gallery';

function App() {
  return (
    <div className="App">
      <h1>Bem vindo a galeria de perfis</h1>
      <Gallery />
    </div>
  );
}

function ImagemComTexto() {
  return (
    <div>
      <div className="imagem-com-texto">
        <img src="path/to/https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2020/07/dandara.jpg?quality=70&strip=info&w=650" alt="imagem1" className="imagem" />
        <p className="descricao">A física Valerie Thomas foi a responsável por criar e patentear, em 1980, o transmissor de ilusão, dispositivo que simula a aparência tridimenssional de um objeto. A invenção foi e ainda é utilizada pela Nasa, agência espacial onde Thomas trabalhou entre 1964 e 1995 como analista de dados e gerente de projetos.</p>
      </div>

      <div className="imagem-com-texto">
        <img src="path/to/imagem2.jpg" alt="Pessoa 2" className="imagem" />
        <p className="descricao">Aqui temos a pessoa 2, com mais detalhes sobre sua atividade e contexto na foto.</p>
      </div>
    </div>
  );
}


export default App;