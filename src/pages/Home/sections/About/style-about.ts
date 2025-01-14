import styled from "styled-components";

export const Container = styled.div`
 
  box-sizing: border-box;

  background-color: #2e2e2e;
  color: #a6a6a6;
  margin: 0;
 
  
  gap: 20px;
  
  .row-wrap {
    
    background-color:rgb(18, 17, 17);
    margin-left: 2rem;
    margin-right: 2rem;
  }
  .row {
    
 display: flex;
flex-wrap: wrap;

  }

  .row .left {width: 50%;}
  .row .right{ width: 50%; }
  .row + .row{ margin-top: 50px; }

  .left {
    padding: 20px;
    text-align: center;
    //transform: translateX(-200px) rotate(180deg);
    //opacity: 0;
  }

  .pin-spacer {
  /* to get around an odd browser rounding issue that happens when it gets converted to pixels */
  width: 40% !important;
}

.about {
    padding: 20px;
    font-size: 1rem;
    text-align: justify;
    margin-bottom: .7rem;
  }

.right {
  padding: 20px;
  text-align: center;
 
  
}

.right-text {
  padding: 20px;
  margin-top: 1rem;
  font-size: 1.5rem;
  
}

p {
  font-size: 1.3rem;
  text-align: justify;
  margin-bottom: .7rem;
  text-align: center;
  
}


  h2 {
    font-size: 2rem;
    color:rgb(255, 253, 253);
    text-align: center;
    

  }

 

  a {
    color: #a6a6a6;
    font-weight: 600;
    font-size: .9rem;

    &:hover {
      color: #fff;
    }
   
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
      font-size: 1rem;;
    }
    
    a {
      font-size: .7rem;
    }

    a.btn {
      padding: .3rem .6rem;
    }
  }
`;
