import logo from "../../assets/Img/logoTransparent.png";
import { LogoFooter } from "../LogoFooter";
import { Link } from "react-router-dom";
import {Container,Box, Column, ContainerPage, LinkFooter,Rodape, ColumnRodape} from "./style";
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


export const Footer: React.FC = () => {
  return (
    <Container>
     <ContainerPage>
         <Column>
       <LogoFooter imagem={logo}/>
        <LinkFooter>
      <a target="_blank" rel="noreferrer" href="https://www.instagram.com/enerjuzsolar/"><InstagramIcon color="warning"/></a> 
       </LinkFooter>
          </Column>
       <Column>
         INSTITUCIONAL

         <LinkFooter>
           <Link to="/">Home</Link>
         </LinkFooter>

      <LinkFooter>
       <Link to="/empresa">Sobre</Link>
      </LinkFooter>


<LinkFooter>
<Link to="/instalacoes">Instalações</Link>
</LinkFooter>

<LinkFooter>
<Link to="/contato">Contato</Link>
</LinkFooter>
</Column>

<Column>
SERVIÇOS
<LinkFooter>
<Link to="/Comercial">Comercial</Link>
</LinkFooter>

<LinkFooter>
<Link to="/agro">Agro</Link>
</LinkFooter>

<LinkFooter>
<Link to="/residencial">Residencial</Link>
</LinkFooter>

<LinkFooter>
<Link to="/usina">Usina</Link>
</LinkFooter>

</Column>
<Column>
ATENDIMENTO

<LinkFooter>
<Box>
<CallIcon color="warning"/>(37)99866-9261
</Box>
</LinkFooter>

<LinkFooter>
<Box>
  <WhatsAppIcon color="warning"/>(37)99866-9261
  </Box>
</LinkFooter>


<LinkFooter>
<Box>
<MailIcon color="warning"/>enerjuz@gmail.com
</Box>
</LinkFooter>

<LinkFooter>
<Box>
    <FmdGoodIcon color="warning"/>Carmo Cajuru
    </Box>
   </LinkFooter>
  </Column>
</ContainerPage>

  <ColumnRodape>
     <Rodape> Enerjuz - © 2024 - Todos os Direitos reservados - Desenvolvimento MariaMuniz.</Rodape>
  </ColumnRodape>
</Container>
  );
}