
import styled from 'styled-components';

export const Container = styled.div`

    width:63vw;
    background-color:#fef9c3;
    flex-direction:row;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:0;
    border-radius:0.5rem;
    padding:1.4rem;
    @media (max-width: 768px) {
        flex-direction:column;
    }
`;

export const Coluna= styled.div`
    width:12rem; 
    margin-top:0.6rem;
    flex-direction:column;
    display:flex;
    justify-content:center;
    align-items:center;
  
`;
export const Text = styled.div`
  font-weight:bold;
  font-size:18px;
`;
export const Card = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`;

