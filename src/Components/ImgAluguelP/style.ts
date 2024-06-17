
import styled from 'styled-components';

export const Container = styled.div`
    width:30vw;
    height:18rem;
    margin-top:1rem;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin: 0;
  background:#000;
    `;

export const Texto = styled.div`
    width:40vw;
    height:10rem;
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
    width: 80%;
    height: 80%;
     border-radius:0.5rem;
     @media (max-width: 768px) {
        margin-top:-6rem;
        width: 80%;
     }
        `;