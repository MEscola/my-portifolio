import styled from "styled-components";


export const MenuList = styled.ul`
  
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colunas iguais */
  gap: 10px; /* Espaço entre os itens */
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Ajusta para 1 coluna no mobile */
  }
`;

export const ItemList = styled.li`
    text-align: center;

a {
  text-decoration: none;
  color: #a6a6a6;
  font-size: 18px;
  display: block;
  padding: 10px 0;

  &:hover {
    color: #fff;
  }
}
`;

export const Box = styled.menu`
    background: black;
    width: 100%;
    padding: 10px;
    
`