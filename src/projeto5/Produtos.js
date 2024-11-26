import styled from 'styled-components';
import { Button } from './Button';

const ProdutosContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ProdutosItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Produtos = ({ produtos, onAddToCarrinho }) => {
  return (
    <ProdutosContainer>
      <h2>Produtos Disponíveis</h2>
      {produtos.map((produtos) => (
        <ProdutosItem key={produtos.id}>
          <span>{produtos.name}</span>
          <span>R$ {produtos.price}</span>
          <Button onClick={() => onAddToCarrinho(produtos)}>Adicionar</Button>
        </ProdutosItem>
      ))}
    </ProdutosContainer>
  );
};
