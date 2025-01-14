import styled from "styled-components";

export const Container = styled.div `
background-color: #2e2e2e;


.proj {
    margin: 0 2rem 0 2rem;
    padding: 2rem;
    background-color: black; 
    
}



.title-proj { 

  color: #fff;
  overflow: hidden; /* Para evitar que a largura extra fique visível */
}

.grid{
    margin-left: 8rem;
    align-items: center;
    text-align: center;
    margin-top: 2rem;
    justify-items: center;
    gap: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

img {
    width: 60%;
    height: auto;
    border-color:#a6a6a6;
    box-shadow: 0px 0px 9px 4px #2e2e2e;
   
    
}

.img2 {   
   
}

h2 {
    margin-top: .5rem;
    margin-bottom: .5rem;
    font-size: 2rem;
    color:rgb(255, 253, 253);
    letter-spacing: 3px;
}

button {
  color:#fff;
  background: transparent;
  border: 1px solid #a6a6a6;
  padding: .3rem 1rem;
  border-radius: .6rem;
  margin: 0 10px;
  
}

.icons{
    margin-top: .5rem;
    margin-bottom: .5rem;
    color: #a6a6a6;
    font-size: 1.5rem;
}

// MOBILE

@media screen and (max-width: 768px) {
    
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    .main {
      
      padding: 7rem;
      /* height: absolute; */ /* 'absolute' não é um valor válido para height */
      margin-top: -1rem;
  }

    .proj {
      padding: 1rem;
    }

    


    h2 {
      font-size: .9rem;
      
    }

    p {
        font-size: 1rem;
    }

    button {
        padding: .2rem .6rem;
    }

    .grid{
    margin-left: 2rem;
    
}

    @media screen and (max-width: 480px) {
    .proj {
      margin: 0.5rem;
      padding: 0.8rem;
    }}

`;