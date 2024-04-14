import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  

`;

export const Imagem = styled.img`
margin-top:10px;
width: 10rem;
height: 6rem;
 border-radius:0.5rem;
 border: 2px solid #add8e6;
    box-shadow: 1px 1px 1px #add8e6;
		transition: all 0.5s;
    cursor: pointer;
		&:hover{
		-webkit-transform: scale(0.4);
    transform: scale(0.5);
		}
`;