
import styled from 'styled-components';

export const Container = styled.div`
 height:70vh;
    width:30%;
    display:flex;
    flex-direction:row;
    justify-content:start;
    align-items:center;
    z-index:0;
    border-radius:0.5rem;
   // padding:1rem;

    @media (max-width: 768px) {
  width:100%;
  justify-content:center;
  margin-top:0;
    }
`;

