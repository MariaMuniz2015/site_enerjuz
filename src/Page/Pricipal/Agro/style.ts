import styled from 'styled-components';


export const Container = styled.div`
 
    width:100vw;
    flex-direction:column;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:0;
    margin-top:5rem;
    @media (max-width: 768px) {
       
        flex-direction:column;
    }
    
  
   `;
export const BoxContainer = styled.div`
 
    width:100vw;
    flex-direction:row;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:0;
  
    @media (max-width: 768px) {
        flex-direction:column;
        margin-bottom:19rem;

    }
`;

export const ContainerPage = styled.div`
 
    width:100vw;
    background-color:#fff;
    flex-direction:row;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:0;
    flex-wrap:nowrap;
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
       margin-top:-300px;
      margin-bottom:360px;

    }
    `;