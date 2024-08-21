import styled from 'styled-components';

export const Container = styled.div`
max-width:1200px;
width:50vw;
  display:flex;
    justify-content:center;
    align-items:center;


  @media (max-width: 768px) {
    align-items:center;
  }
`;



export const Imagem = styled.img`
margin-top:10px;
width: 99%;
height: 28%;
border-radius:0.5rem;

 @media (max-width: 768px) {
  width:140%;
  height: 38%;
  margin-top:2rem;
 }
`;


