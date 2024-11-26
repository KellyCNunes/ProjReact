import styled from 'styled-components';
import { Button } from './Button';

const CarrinhoContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const CarrinhoItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Carrinho = ({ carrinhoItems, onRemove, onCheckout }) => {
  return (
    <CarrinhoContainer>
      <h2>Seu Carrinho</h2>
      {carrinhoItems.map((item) => (
        <CarrinhoItem key={item.id}>
          <span>{item.name}</span>
          <span>R$ {item.price}</span>
          <Button onClick={() => onRemove(item.id)}>Remover</Button>
        </CarrinhoItem>
      ))}
      {carrinhoItems.length > 0 && (
        <Button onClick={onCheckout}>Finalizar Compra</Button>
      )}
    </CarrinhoContainer>
  );
};
