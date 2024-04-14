import styled from 'styled-components';


export const Container = styled.div`
 margin-top:6rem;
    width:99vw;
    background-color:#fff;
    flex-direction:column;
    display:flex;
    justify-content:center;
    align-items:center;

`;
export const ContainerPage = styled.div`

    width:90vw;
    background-color:#fff;
    flex-direction:column;
    display:flex;
    justify-content:start;
    align-items:flex-start;
  margin-top:0;
  margin-bottom:0;

`;

export const ContainerImg = styled.div`
width:80rem;
    flex-direction:row;
    display:flex;
    justify-content:center;
    align-items:center;

    z-index:0;
`;

export const Paragrafo = styled.div`
    margin-top:1rem;
    margin-bottom:4rem;
    margin-right:18rem;
    width:84vw;
    background-color:#fff;
  margin-left:1rem;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align: justify;

    @media (max-width: 768px) {
      width:88vw;
      margin-top:4rem;
      margin-bottom:2rem;
      margin-left:1rem;
      margin-right:1rem;
  }
 
`;
export const Card= styled.div`
    width:90%;
    margin-top:0.2rem;
    flex-direction:row;
    display:flex;
    justify-content:space-around;
    align-items:center;
    gap:3rem;

    @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom:20rem;
  }
`;

export const CardContact= styled.div`
width:90vw;

  display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    
    @media (max-width: 768px) {
    flex-direction: column-reverse;
    margin-top:2px;
    height:38rem;
    }
  

`;
