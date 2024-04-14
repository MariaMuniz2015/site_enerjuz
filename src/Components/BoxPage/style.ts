
import styled from 'styled-components';

export const Container = styled.div`
    width:80vw;
    margin-top:3rem;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin: 0;
  
    `;

export const Texto = styled.div`
    width:56vw;
    margin:0;
    display: flex;
    justify-content:center;
    align-items:center;
    margin: 1rem;

    `;
export const TextoP = styled.p`
  font-size:18px;
    `;


export const Titulo = styled.p`
  font-size:14px;
    
    `;
export const Icone1 = styled.img`
  margin-top:10px;
width: 12rem;
height: 8rem;
 border-radius:0.5rem;

    `;
      
      export const Icone2 = styled.img`
        margin-top:10px;
      width: 12rem;
      height: 8rem;
       border-radius:0.5rem;
    
          `;    
         export const Icone3 = styled.img`
         margin-top:10px;
       width: 12rem;
       height: 8rem;
        border-radius:0.5rem;
         
           `;  
export const Imagem = styled.img`
margin-top:10px;
width: 88%;
height: 28%;
 border-radius:0.5rem;
    `;

export const Box = styled.div`
width:50rem;
   display: flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:row;
    flex-wrap:wrap;
    @media (max-width: 768px) {
        flex-direction:column;
        width:80rem;
    }
  `;

export const BoxIcone = styled.div`

   display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
  `;