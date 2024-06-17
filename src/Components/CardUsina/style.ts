import styled from 'styled-components';


export const Container = styled.div<{ corDeFundo: string }>`
    width: 10rem;
    height:160px;
    flex-direction:column;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:0;
    margin-bottom:1rem;
    margin-left:3rem;
    border-radius:8px;
    background: ${(props) => props.corDeFundo};
    @media (max-width: 768px) {    
    width:8rem;
    margin-left:2rem;
  }
  @media (max-width: 360px) {    
    width:7rem;
    height:140px;
    margin-left:0.6rem;
  }
  
`;


export const Desc= styled.div`
font-size:14px;
  display:flex;
    justify-content:center;
    align-items:center;
    text-align: justify;
    margin:1.4rem;
    font-weight:500;
    color:#002060;
    @media (max-width: 768px) {    
    font-size:12px;
    margin:1rem;

  }
`;




export const Imagem = styled.img`
width:5rem;
  display:flex;
    justify-content:center;
    align-items:center;
		transition: all 0.5s;
    cursor: pointer;
		&:hover{
		-webkit-transform: scale(0.8);
    transform: scale(1.1);
		}


    @media (max-width: 768px) {    
    width: 4rem
  }

  @media (max-width: 360px) {    
    width: 3rem;
  }
`;