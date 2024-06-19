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
`;


export const BoxSlider = styled.div`
 
    width:100vw;
    flex-direction:row;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:0;
  
    @media (max-width: 768px) {
        width:90vw;
       margin-top:-300px;
      margin-bottom:360px;

    }
    `;