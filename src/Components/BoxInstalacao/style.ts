import styled from 'styled-components';


export const Container = styled.div`
    width:90vw;
    margin-top:3rem;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin: 0;

    @media (max-width: 768px) {
  
   margin-bottom:20rem;
   }
    `;

export const Texto = styled.div`
    width:90vw;
    margin:0;
    display: flex;
    justify-content:center;
    align-items:center;
    margin: 1rem;
    text-align: justify;

    `;
export const TextoP = styled.p`
  font-size:18px;
    `;



export const Icone1 = styled.img`
  margin-top:10px;
width: 18rem;
height: 10rem;
 border-radius:0.5rem;

    `;
      
      export const Icone2 = styled.img`
        margin-top:10px;
      width: 18rem;
      height: 10rem;
       border-radius:0.5rem;
    
          `;    
         export const Icone3 = styled.img`
         margin-top:10px;
       width: 18rem;
       height: 10rem;
        border-radius:0.5rem;
         
           `;  

export const Box = styled.div`
width:76rem;
   display: flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:row;
    @media (max-width: 768px) {
       
       flex-direction:column;
       justify-content:center;
    align-items:center;
   }
  `;

export const BoxIcone = styled.div`

   display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
  `;

  export const Titulo = styled.p`
  font-size:14px;
    
    `;