

import React from 'react';
import {  Container, StyledLi,StyledUl, DropDownContent, SubA, DropDownLi, Dropbtn, StyledA} from './style';
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';


export const Menu: React.FC = () => {

 
  return (
  <Container>
 
    <StyledUl>
        <StyledLi>
        <StyledA>
        <Link to="/">Home</Link></StyledA>
        </StyledLi>

        <StyledLi>
       <StyledA>
         <Link to="/obrigado">Obrigada</Link> 
         </StyledA>
        </StyledLi>

      

        <DropDownLi>
          <Dropbtn>
        <Link to="#">Serviços</Link>
          </Dropbtn>
          <DropDownContent>
            
            <SubA> <a href="/agro">Agro</a></SubA>
            <SubA><a href="/Comercial">Comercial</a></SubA>
            <SubA><a href="/Residencial">Residencial</a></SubA>
           
            </DropDownContent>
        </DropDownLi>

            
            <StyledLi>
            <StyledA> <Link to="/instalacoes">Instalações</Link> </StyledA>
        </StyledLi>
              
        <StyledLi>
        <StyledA><Link to="/contato">Contato</Link> </StyledA>
        </StyledLi>

        <StyledLi>
        <StyledA>(37)9999-8888 </StyledA>
        </StyledLi>

        <StyledLi>
        <StyledA><a target="blank" href="https://www.instagram.com/enerjuzsolar/"><InstagramIcon color="warning"/></a> </StyledA>
        </StyledLi>
      
      </StyledUl>
 
    </Container>
  
  );

}