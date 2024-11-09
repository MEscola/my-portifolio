import styled from "styled-components";

export const Container = styled.div`
 
  box-sizing: border-box;

  background-color: #2e2e2e;
  color: #a6a6a6;
  margin: 0;
  
  .row-wrap {
    
    background-color: black;
  }
  .row {
    
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  }

  .row .left {width: 40%;}
  .row .right{ width: 60%; }
  .row + .row{ margin-top: 50px; }

  .left {
    //transform: translateX(-200px) rotate(180deg);
    //opacity: 0;
  }

  .pin-spacer {
  /* to get around an odd browser rounding issue that happens when it gets converted to pixels */
  width: 40% !important;
}

  h2 {
    font-size: 2rem;
    color: #a6a6a6;

  }

  p {
    font-size: 1rem;
    text-align: justify;
    margin-bottom: .7rem;
   
    
    
  }

  a {
    color: #a6a6a6;
    font-weight: 600;
    font-size: .9rem;
    
    
    
   
  }

  a.btn {
    color: black;
   background: linear-gradient(90deg, #a6a6a6, #d9d9d9);
  padding: .5rem 1rem;
   border-radius: 3rem;
    
    &:hover {
      color: #fff;
    }
    
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    h2{
      font-size: 1rem;
      
    }

    p{
      font-size: .7rem;
    }
    
    a {
      font-size: .7rem;
    }

    a.btn {
      padding: .3rem .6rem;
    }
  }
`;
