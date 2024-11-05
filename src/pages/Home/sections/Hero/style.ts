import styled from "styled-components";


export const Container = styled.div`
   height: 100vh;
   //position: relative;
   //flex-direction: row;
   padding: 1.1rem;
   background-color: #a6a6a6;   
  
   .main {
   
   display: grid;
   grid-template-columns: repeat(2, 1fr); /* 3 colunas iguais */
   gap: 0px; /* Espaço entre os itens */
   list-style: none;
   padding: 0;
   margin: 0;
   background-color: #fff;
   text-align: center;
   padding: 1.1rem;
   
   
   
   }
   
   .photo {
      padding: 1.1rem;
      background-color: pink;
   }

   img {
    
    width: 30%;
    border-radius: 50%;
    
   }

   h1 {
      margin-top: 2.2rem;
   } 


   .textHero {
      align-content: center;
      color: #2e2e2e;

   }
`;
