
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
    @media (max-width: 768px) {
        margin: 0;
        width:80vw;
        margin-top:1rem;
    }

    `;
    export const Image = styled.img`
    margin-top:0.8rem;
    width: 88%;
    height: 28%;
     border-radius:0.5rem;
     @media (max-width: 768px) {
        margin-top:-6rem;
        width: 80%;
     }
        `;