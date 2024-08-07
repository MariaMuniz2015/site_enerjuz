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
width: 60vw;
height: 70vh;

 border-radius:0.5rem;
margin-left:1rem;
 @media (max-width: 768px) {
  margin-left:0;
  margin-top:60px;
  width: 80vw;
height: 28vh;
 }
`;