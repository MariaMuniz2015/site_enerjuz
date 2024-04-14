import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left:2px;
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
  width:90%;
  margin-top:0;
 }
`;


