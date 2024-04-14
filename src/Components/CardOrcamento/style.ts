import styled from 'styled-components';

export const Container = styled.div`
margin-top:-1rem;
width: 18.7rem;
margin-left:3.7rem;
display: flex;
justify-content:center;
align-items:center;
flex-direction:column;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
@media (max-width: 768px) {
  
      margin-top:2rem;
      margin-bottom:2rem;
    }
`;

export const Titulo = styled.h3`
  display: flex;
  justify-content: center;
  align-items:center;
  margin-top:1.6rem;
  color:#000;
  width: 16.3rem;

`;

export const TituloContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  margin-top:1rem;
  color:#000;
  font-size:1rem;
  width: 15.6rem;

`;


export const Formulario = styled.div`
display: flex;
justify-content:flex-start;
align-items:center;
flex-direction:column;
  z-index: 1;
  background: #fff;
  max-width: 18.7rem;
  margin: 0 auto 5px;
  padding: 1.8rem;
  text-align: center;

`;

export const Label = styled.label`
display: flex;
justify-content:flex-start;
align-items:center;
font-family: "Roboto", sans-serif;
  outline: 0;
  width: 90%;
  border:0;
  margin: 0 2px 0px 2px;
  padding: 5px;
  box-sizing: border-box;
  font-size: 0.8rem;
  font-weight:400;
 
`;

export const Input = styled.input`
font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 90%;
  height: 1.6rem;
  border:0;
  margin-top:1rem;
  padding: 1rem;
  box-sizing: border-box;
  font-size: 12px;
  border-radius: 5px;
    border: 1px solid #add8e6;
    //box-shadow: 1px 1px 1px #add8e6;


`;

export const Button = styled.button`
  width: 14rem;
  color: #FFFFFF;
  font-size: 14px;
  transition: all 0.3 ease;
  cursor: pointer;
  background-color:#002060;
  padding: 15px 10px;
  margin: 10px 0;
  border-radius: 20px;

  &:hover{
    background-color: #06238f;
  }
`;


export const Menssage = styled.textarea`
  margin-top:1rem;
  width: 13.2rem;
   height:20vh;
    padding: 10px;
    line-height: 1.5;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px #add8e6;
  margin:10px 10px;

`;

export const ContainerBtn = styled.div`
   width: 18.7rem;
margin-left:0;
display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
`;