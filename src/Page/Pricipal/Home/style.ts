import styled from 'styled-components';


export const Container = styled.div`


    width:99vw;
   background-color:transparent;
    flex-direction:column;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:0;
 
`;


export const Section = styled.section`

width:100vw;
height:100vh;
    @media  (min-width:768){ 
        
        display:none;
      }
       `;

export const Mobile = styled.div`
width:100vw;
height:100vh;
  

visibility:visible;
z-index:2;
@media (max-width: 768px) {

 display:none;
}
`;
export const SectionMobile = styled.section`

    /// background-color:#000;
    max-width:600px;
    margin-top:-660px;
   z-index:0;
    @media (min-width: 768px){ 
        display:none;
    }
       `;

export const SectionSolar = styled.section`
  max-width:1200px;
    max-width:90vw;
    height:600px;
    margin-left:1rem;
    @media (max-width: 768px) {
        height:100%;
    }
`;
export const SectionServico = styled.section`
 flex-direction:column;
    display:flex;
    justify-content:center;
    align-items:center;
  max-width:1200px;
    max-width:99vw;
    margin-top:1rem;
    margin-left:1rem;
       @media (max-width: 768px) {
        height:100%;
    }
`;


export const SectionSolarFuncionamento = styled.section`
max-width:1260px;
 width:99vw;
    height:600px;
  


    background-color:lightgray;
    @media (max-width: 768px) {
        background-image:none;
    }

`;

export const SectionSolarFuncionamento2 = styled.section`
//max-width:1200px;
  width:99vw;
    height:600px;
    //margin-left:1rem;

    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:-50px;
    flex-direction:column;
    background-color:white;
    @media (max-width: 768px) {
        background-image:none;
        height:320px;

    }

`;

export const SectionSolarCinza = styled.section`
max-width:1400px;
  width:98vw;
   //background:#ccc;
   background-image:url("fundo2.png");
   background-repeat: no-repeat;
   background-size:cover;
    height:680px;
    //margin-left:1rem;
    z-index:10;
    margin-top:-80px;
    background-color:transparent;
    @media (max-width: 768px) {
        background-image:none;
    }

`;

export const SectionSolarCinzaI = styled.section`
max-width:1200px;
 
    max-width:100vw;
    height:700px;
    //margin-left:1rem;
    z-index:10;
    margin-top:10px;
    //background-color:transparent;
    @media (max-width: 768px) {
        height:900px;
    }
`;

export const ContainerQ = styled.div`
   display:flex;
   flex-wrap:wrap;
   width:600px;
`;
export const Thumbnail = styled.div`
   flex:1 1 400px;
   background:blue;
   height:500px;
`;
export const Content= styled.div`
 flex: 2 1 300px;
`;
export const ContainerImg = styled.div`
    flex-direction:row;
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items:center;
    max-width:99vw;
    height:500px;
    margin-left:1rem;
    z-index:0;
`;

export const Box = styled.div`
max-width:1200px;
    width:98vw;
    display:flex;
    justify-content:space-around;
    align-items:center;
  
    @media (max-width: 768px) {
        display:block; 
 
  }

    `;

export const BoxServico = styled.div`
max-width:1200px;
    width:90vw;
    display:flex;
    justify-content:space-around;
    align-items:center;
    @media (max-width: 768px) {
        width:60vw;
        display:block; 
        justify-content:center;
        align-items:center;
       
  }

    `;


export const BoxImage = styled.div`
max-width:1200px;
    width:99vw;
    display:flex;
    justify-content:center;
    align-items:center;
    @media (max-width: 768px) {

    }
    `;
       
        export const TituloSection = styled.h3`
        display:flex;
       justify-content:center;
       align-items:center;
       color: #002060;
       margin-top:8rem;
       font-family: 'Poppins', sans-serif;
       @media (max-width: 768px) {
        margin-top:-6rem;
    
      }
       
        `;
         export const TituloSectionF = styled.h4`
         display:flex;
        justify-content:center;
        align-items:center;
        color: #002060;
        margin-top:10rem;
        font-family: 'Poppins', sans-serif;

        @media (max-width: 768px) {
         margin-top:10rem;
         }
          
         `;
         


export const TituloSectionFuncB = styled.h4`
display:flex;
justify-content:center;
align-items:center;
color: #002060;
margin-top:6rem;
font-family: 'Poppins', sans-serif;
@media (max-width: 768px) {
    margin-top:4rem;
     margin-left:4rem;
        }    
`;

export const TituloSectionFunc = styled.h4`
display:flex;
justify-content:center;
align-items:center;
color: #002060;
margin-top:6rem;
font-family: 'Poppins', sans-serif;
@media (max-width: 768px) {
    margin-top:2rem;
     margin-left:4rem;
        }    
`;
         export const SubTitulo = styled.h6`
         width:100%;
         display:flex;
        justify-content:center;
        align-items:center;
        margin-top:0.2rem;
        color: #002060;
        font-family: 'Poppins', sans-serif;

        @media (max-width: 768px) {
            width:80%;
            margin-top:1rem;
       margin-left:3rem;
      }
       `;
        
           export const Traco = styled.h1`
           font-weight:700;
           margin-top:-40px;
           display:flex;
          justify-content:center;
          align-items:center;
          color: #002060;
          @media (max-width: 768px) {
        
       display:none;
       }
        `;
           



export const MSlider = styled.div`
display:flex;
justify-content:center;
align-items:center;

z-index:1;

@media (max-width: 768px) {
    
 
}
`;