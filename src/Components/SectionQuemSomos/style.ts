import styled from 'styled-components';


export const Container = styled.div`

margin-top:2rem;
margin-bottom:6rem;
flex-direction:row;
background-image:url("fundo3.png");
   background-repeat: no-repeat;
   display:flex;
   flex-wrap:wrap;
   width:90vw;
   @media (max-width: 768px) {
    flex-direction: column;
    background-image:none;
    margin-bottom:0.2rem;
  }
`;
export const ColumTexto= styled.div`
  width:700px;
    flex-direction:row;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    @media (max-width: 768px) {
 max-width:300px;
    }

`;
export const ColumnPage= styled.div`
  flex-direction:rows;
    display:flex;
    justify-content:center;
    align-items:center;
margin-bottom:4rem;
@media (max-width: 768px) {
    flex-direction: column;
    justify-content:flex-start;
    align-items:start;
  }
`;

export const TextoSomos= styled.div`
 width:500px;
 margin-top:6rem;
    flex-direction:column;
    display:flex;
    justify-content:flex-start;
    align-items:start;
    flex-wrap:wrap;
    text-align: justify;
    @media (max-width: 768px) {
 max-width:500px;
 margin-top:1rem;
 justify-content:center;
    align-items:center;
  }
`;

export const Imagem= styled.div`

margin-top:2rem;
 width:90%;
 @media (max-width: 768px) {
width:60%;
 margin-left:-12rem;
 margin-right:1rem;
  }
`;


export const Texto= styled.div`

display:flex;
align-items:center;
color:#000;
font-size:16px;
margin-top:1rem;
margin-bottom:1rem;
margin-left:4rem;
@media (max-width: 768px) {
 max-width:80%;
 margin-left:1rem;
  }


  @media (max-width: 500px) {
 max-width:80%;
 margin-left:0.2rem;
  }
`;