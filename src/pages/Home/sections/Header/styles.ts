import styled from "styled-components";


export const MenuList = styled.ul`
  
  //display: grid;
  //grid-template-columns: repeat(3, 1fr); /* 3 colunas iguais */
  //gap: 10px; /* Espaço entre os itens */
 display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
  position: sticky;
    top: 0;
    z-index: 1000;
    height: 35px;
    opacity: 0.9

   
`;

export const ItemList = styled.li`
    //text-align: right;
    

a {
  text-decoration: none;
  margin: 0 1.8rem;
  font-size: 1rem;
  font-weight: 500;
  color: #a6a6a6;
  display: block;
  transition: color 0.3s;
  position: relative;
  padding-bottom: 0.2rem;

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 0;
    height: 2px;
    transition: width 0.3s, left 0.3s
  }

  &:hover {
    color: #fff;
  }

  &:after {
    width: 100%;
    left: 0
  }
}
 //MOBILE

 @media screen and (max-width: 768px) {
  a {
            margin: 0 1rem; 
            font-size: 0.7rem; 
        }
      
    }
`;

export const Box = styled.menu`

    background: black;
    width: 100%;
    padding: 1vw;

    @media (max-width: 768px) {
      padding: .2vw;
      }


    
`