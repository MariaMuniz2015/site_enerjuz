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
 

`;
export const ColumnPage= styled.div`
  flex-direction:rows;
    display:flex;
    justify-content:center;
    align-items:center;
margin-bottom:4rem;
@media (max-width: 768px) {
    flex-direction: column;
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
    @media (max-width: 768px) {
 max-width:70%;
 margin-top:1rem;
  }
`;

export const Imagem= styled.div`
margin-top:2rem;
 width:90%;
 @media (max-width: 768px) {
width:20%;
 margin-left:-22rem;
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
 max-width:60%;
 margin-left:1rem;
  }
`;