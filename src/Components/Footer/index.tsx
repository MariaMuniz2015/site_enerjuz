import logo from "../Img/logoTransparent.png";
import { LogoFooter } from "../LogoFooter";
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
           <a href="/">Home</a>
         </LinkFooter>

      <LinkFooter>
       <a href="/empresa">Sobre</a>
      </LinkFooter>


<LinkFooter>
<a href="/instalacoes">Instalações</a>
</LinkFooter>

<LinkFooter>
<a href="/contato">Contato</a>
</LinkFooter>
</Column>

<Column>
SERVIÇOS
<LinkFooter>
<a href="/Comercial">Comercial</a>
</LinkFooter>

<LinkFooter>
<a href="/agro">Agro</a>
</LinkFooter>

<LinkFooter>
<a href="/residencial">Residencial</a>
</LinkFooter>

<LinkFooter>
<a href="/usina">Usina</a>
</LinkFooter>

</Column>
<Column>
ATENDIMENTO

<LinkFooter>
<Box>
<CallIcon color="warning"/>(37)9999-8888
</Box>
</LinkFooter>

<LinkFooter>
<Box>
  <WhatsAppIcon color="warning"/>(37)9999-8888
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
     <Rodape> Enerjuz - © 2024 - Todos os Direitos reservados - Desenvolvimento....</Rodape>
  </ColumnRodape>
</Container>
  );
}