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

export const SectionB = styled.div`

width:100vw;
flex-direction:column;
display:flex;
justify-content:center;
align-items:center;
z-index:0;

@media (max-width: 768px) {
    height:500px; 
    margin-bottom:-8rem;
    margin-top:22rem;
}
@media (max-width: 360px) {   
    height:300px; 
    margin-bottom:-18rem;
  }
`;
export const BoxA = styled.div`
width:90vw;
height:37.5rem;
flex-direction:column;
display:flex;
justify-content:space-around;
align-items:center;
font-size:30px;
@media (max-width: 768px) {
      width:80vw;
      margin-top:4rem;
      height:26.5rem;
  }

`;
export const BoxSubtitulo= styled.div`
 width: 60vw;
    flex-direction:row;
    display:flex;
    justify-content:center;
    align-items:center;
   font-size:1.5rem;
   color:#002060;
   margin-top:2rem;

   @media (max-width: 768px) {
    font-size:1.1rem;
       width:80vw;
        margin-top:-40rem;
    }

`;

export const BoxB = styled.div`
width:90vw;
height:19rem;
flex-direction:column;
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
margin-left:0;

@media (max-width: 768px) {     
      width:50vw;
      margin-top:-22rem;
      height:39rem;
      flex-direction:row;
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
width:60vw;
flex-direction:row;
flex-wrap:wrap;
display:flex;
justify-content:center;
align-items:center;
z-index:0;
margin-top:1rem;
@media (max-width: 768px) {   
    width:99vw; 
    margin-top:1rem;
  }
  @media (max-width: 360px) {   
    width:99vw; 
    margin-top:0.2rem;

  }
`;

export const BoxContainer = styled.div`
    width:90vw;
    flex-direction:row;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:0;
    margin-bottom:1rem;
    @media (max-width: 768px) {
        flex-direction:column;
     
    }   

`;
export const BoxTexto = styled.div`
    width: 60vw;
    flex-direction:row;
    display:flex;
    justify-content:flex-start;
    align-items:flex-end;
    margin-top:1rem;
  
    @media (min-width: 360px) {
        margin-top:-2rem;
    }
`;

export const Texto = styled.div`
    width: 50vw;
    flex-direction:row;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1.25rem;
    z-index:1;
     padding:1rem;
    
   @media (max-width: 768px) {
    font-size:1rem;
        width:80vw;
    }

`;

export const Titulo= styled.div`
    width: 60vw;
    flex-direction:row;
    display:flex;
    justify-content:center;
    align-items:center;
   font-size:1.5rem;
   color:#002060;
   margin-top:2rem;
   @media (max-width: 768px) {
        width:80vw;
        margin-top:-20rem;

    }

`;
export const ContainerPage = styled.div`
    width:30vw;
    background-color:#fff;
    flex-direction:row;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:0;
  margin-top:2rem;

@media (max-width: 760px) {    
    width:99vw;
    margin-top:1rem;
  }
@media (min-width: 360px) {    
    width:99vw;
    margin-top:1rem;
  }
`;