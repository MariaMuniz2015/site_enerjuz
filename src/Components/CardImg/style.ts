import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left:1rem;

`;



export const Titulo = styled.h1`
  display:flex;
  justify-content:center;
  align-items:center;
  font-weight:700;
  font-size:1.2rem;
  color:#002060;
  margin-top:20px;
  margin-left:10px;
  margin-bottom:20px;
  font-family: 'Roboto', sans-serif;
  transition: all 0.5s;
	&:hover{
		color:#0284c7;
		}
`;

export const Imagem = styled.img`
margin-top:1rem;
width: 24rem;
height: 18rem;
 border-radius:0.5rem;
 border: 2px solid #add8e6;
    box-shadow: 1px 1px 1px #add8e6;
		transition: all 0.5s;
    cursor: pointer;
		&:hover{
		-webkit-transform: scale(0.4);
    transform: scale(1.1);
		}
    @media (max-width: 768px) {
      margin-top:0.2rem;
      width: 18rem;
      height: 12rem;
      
          }
`;