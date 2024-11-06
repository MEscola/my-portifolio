import styled from "styled-components";
import img from "../../../../assets/images/background (2).jpg";

export const Container = styled.div`
   padding: 0rem 2rem 0;
   background-color:#2e2e2e; 
   
   
   .main {
   //display: grid;
   //grid-template-columns: repeat(2, 1fr); /* 3 colunas iguais */
   //gap: 0px; /* Espaço entre os itens */
   min-height: 100vh;
   position: relative;
   //display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 1.2rem;
    width: 100%;
    
   }

   .main::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(${img});
        background-position: center;
        background-size: cover;
        animation: moveBackground 29s infinite alternate;
        opacity: 0.03;
        z-index: -1
   }
   
   .photo {
      padding: 1rem;
      background-color: #fff;
      
   }

   img {
      max-width: 20%; 
        height: auto;
        margin-bottom: 1.2rem;
        border-radius: 80%;
        padding: 0.4rem
    
   }

   h1 {
      margin-top: -70px;
      font-size:  2.8rem;
      margin: 0.5rem 
   } 

   .title {
      padding: 0;
      margin: -10px;
      font-size: 1.4rem;
      font-style: italic;
   }

   .welcome-text {
    padding: 1.2rem;
    font-size: 1.6rem;
    margin-top: 3rem;
    animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

   

   .icons {
      margin: .5rem 0;
      gap: 1rem;

      .icon-btn{
            padding: .7rem; //espaço entre os icons
            border-radius: 30px;
            color: #2e2e2e;
            font-size: 2.2rem;
            margin-top: -15px; 
        }

        .icon-btn:hover{
         color: black;
        }

   }

   .textHero {
      
      background-color:  #d9d9d9;
      align-content: center;
      color: #2e2e2e;

   }


   //VERSÃO MOBILE

   @media screen and (max-width: 768px) {
    .main {
      
        padding: 7rem;
        /* height: absolute; */ /* 'absolute' não é um valor válido para height */
        margin-top: -1rem;
    }

      .img{
         max-width: 80%  
      }

      h1 {
         font-size:  1.5rem;
         text-align: center;
         white-space: nowrap
      }

      .title {
         font-size: .9rem;
         margin-top: -1rem
      }

      .welcome-text {
         font-size: 1rem; 
         text-align: center
      }

      .icons {
         margin-top: 1rem;
         align-items: center;
         font-size: .7rem;
      }

      /* Animação moveBackground */
@keyframes moveBackground {
    0% {
        background-position: top;
    }
   100% {
      background-position: 100% bottom
   }}
   }
`;
