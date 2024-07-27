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
max-width:1200px;
box-sizing: border-box;
width:100vw;
flex-direction:column;
display:flex;
justify-content:center;
align-items:center;
z-index:0;


@media (max-width: 768px) {
    height:1300px; 
    margin-bottom:2rem;

}
@media (max-width: 360px) {   
    height:440px; 
    margin-bottom:-6rem;
  }
`;
export const BoxA = styled.div`
width:90vw;
height:37rem;
flex-direction:column;
display:flex;
justify-content:space-around;
align-items:flex-start;
font-size:30px;
@media (max-width: 768px) {
      width:80vw;
      margin-top:2rem;
      height:26.5rem;
  }

`;
export const BoxSubtitulo= styled.div`
 width: 90vw;
    flex-direction:row;
    display:flex;
    justify-content:center;
    align-items:center;
   font-size:1.5rem;
   color:#fff;
   margin-top:1.6rem;
background:#002060;
   @media (max-width: 768px) {
    font-size:1.1rem;
       width:80vw;
        margin-top:-38rem;
        margin-bottom:-4rem;
    }

`;

export const BoxB = styled.div`

width:58vw;
height:30rem;
flex-direction:column;
display:flex;
justify-content:flex-start;
align-items:flex-start;
flex-wrap:wrap;

@media (max-width: 768px) {     
      width:50vw;
      margin-top:-10rem;
      height:39rem;
      flex-direction:row;
  }

`;
export const BoxC = styled.div`

width:30vw;
height:14rem;
flex-direction:row;
display:flex;
justify-content:flex-start;
align-items:flex-start;
flex-wrap:wrap;
margin-left:0;

@media (max-width: 768px) {     
      width:50vw;
      margin-top:1rem;
      height:29rem;
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