import styled from "styled-components";

export const Container = styled.div`
  
  box-sizing: border-box;
  //align-items: left;
  padding: 5rem;
  //width: 100%;
  background-color: #2e2e2e;
  color: #d9d9d9;
  
  .row {
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  }

  .row .left {width: 40%;}
  .row .right{ width: 60%; }
  .row + .row{ margin-top: 50px; }

  h2 {
    font-size: 2rem;
    
    
    
  }

  p {
    font-size: 1rem;
    text-align: justify;
    
  }

  a {
    color: #fff;
    font-weight: 600;
    animation: fadeIn 0.5s ease-in-out;
  }

  .btn {
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
