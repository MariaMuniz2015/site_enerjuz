
import styled from 'styled-components';

export const Container = styled.div`
 height:90vh;
    width:100vw;
    background-color:#fff;
    flex-direction:column;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:0;
    border-radius:0.5rem;
    margin-left:20px;

    @media (max-width: 768px) {
     height:none;
     border-radius:none;

}
`;

export const Icone = styled.div`
width:100%; 
display:flex;
justify-content:space-between;
align-items:center;
`;