import styled from 'styled-components';


export const Container = styled.div`
 margin-top:6rem;
    width:100vw;
    background-color:#fff;
    flex-direction:column;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:0;
    @media (max-width: 768px) {
        margin-top:8.6rem;
}
`;

export const BoxSlider = styled.div`
width:100vw;
flex-direction:row;
display:flex;
justify-content:center;
align-items:center;
z-index:0;
@media (max-width: 768px) {
    width:98vw;
   margin-top:-300px;
  margin-bottom:360px;
}
`;