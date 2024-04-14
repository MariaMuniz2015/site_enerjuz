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
export const SectionA = styled.div`
 
width:100vw;
height:800px;
flex-direction:column;
display:flex;
justify-content:center;
align-items:center;
z-index:0;
background:#ccc;

@media (max-width: 768px) {
    height:1100px; 
    margin-bottom:1rem;
}
`;

export const BoxAccordion = styled.div`
 
width:80vw;
flex-direction:row;
flex-wrap:wrap;
display:flex;
justify-content:center;
align-items:center;
z-index:0;
margin-top:6rem;
margin-bottom:2rem;

@media (max-width: 768px) {
      
    margin-top:1rem;
margin-bottom:0.4rem;
  }


`;
export const Box = styled.div`
 
width:80vw;
flex-direction:row;
flex-wrap:wrap;
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
 
    margin-bottom:1rem;
    @media (max-width: 768px) {
        flex-direction:column;
        height:101rem;
    }   

`;
export const BoxTexto = styled.div`
 
    width: 70vw;
    flex-direction:row;
    display:flex;
    justify-content:flex-start;
    align-items:flex-end;
    margin-top:4rem;

`;

export const Texto = styled.div`
 
    width: 50vw;
    flex-direction:row;
    display:flex;
    justify-content:center;
    align-items:center;
   font-size:20px;
z-index:1;

   @media (max-width: 768px) {
      
        width:80vw;
    }

`;

export const Titulo= styled.div`
 
    width: 60vw;
    flex-direction:row;
    display:flex;
    justify-content:center;
    align-items:center;
   font-size:28px;
   color:#002060;
   margin-top:2rem;
   @media (max-width: 768px) {
      
        width:80vw;
        margin-top:-20rem;

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
 
margin-top:0.5rem;
`;