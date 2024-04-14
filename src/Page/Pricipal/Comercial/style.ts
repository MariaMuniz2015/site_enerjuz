import styled from 'styled-components';


export const Container = styled.div`
 
    width:100vw;
    flex-direction:column;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:0;
    margin-top:6rem;
  
   `;
export const BoxContainer = styled.div`
 
    width:100vw;
    flex-direction:row;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:0;
flex-wrap:wrap;
@media (max-width: 768px) {
    flex-direction: column;
    margin-bottom:20rem;
    }
`;

export const ContainerPage = styled.div`
 
    width:56vw;
    background-color:#fff;
    flex-direction:row;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:0;

`;