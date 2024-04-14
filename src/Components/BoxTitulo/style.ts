import styled from 'styled-components';

export const Container = styled.div`
    width:98vw;
    height: 9rem;
    margin:0;
    display: flex;
    justify-content:center;
    align-items:center;
   margin-bottom:1rem;
   flex-direction:row;
   background-image:url("imgfundo.png");
   @media (max-width: 768px) {
margin-top:2.2rem;

  }
    `;

export const Box = styled.div`
 display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`;
export const Titulo = styled.div`
  font-weight: 700;
    font-size: 1.6rem;
    color:#002060;
    @media (max-width: 768px) {
font-size:1.2rem;
  
  }
  `;

export const Traco = styled.div`
margin-top:-2rem;
 font-weight: 700;
    font-size: 1.6rem;
    color:#002060;
    @media (max-width: 500px) {
    display: none;
  
  }
 `;