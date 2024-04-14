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


export const ContainerImg = styled.div`

    flex-direction:row;
    flex-wrap:wrap;
    display:flex;
    justify-content:center;
    align-items:center;
  margin-bottom:5rem;
    z-index:0;
    a{
      text-decoration: none;
    }

    @media (max-width: 768px) {
      margin-bottom:20rem;
 
          }
`;

export const ContainerFooter = styled.div`
  width:90vw;
    height:800px;
    flex-direction:column;
    display:flex;
  
`;