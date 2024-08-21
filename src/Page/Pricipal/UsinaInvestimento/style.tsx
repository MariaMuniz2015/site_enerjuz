import styled from 'styled-components';


export const Container = styled.div`
 margin-top:6rem;
    width:100vw;
    background-color:#fff;
    flex-direction:column;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:0;
    @media (max-width: 768px) {
    
       margin-top:8.2rem;
  

    }
`;


export const BoxSlider = styled.div`
 
    width:80vw;
    height:600px;
    flex-direction:row;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:0;
 
    @media (max-width: 768px) {
        width:90vw;
       margin-top:200px;
      margin-bottom:500px;
      height:1000px;
    }
    `;