
import{BoxContainer, Container, ContainerPage,Texto, BoxTexto,Box, SectionA, BoxAccordion,Titulo} from "./style";
import cofre from '../../../Components/Img/iconCofre.png';
import painel from '../../../Components/Img/iconPainel.png';

import carteira from '../../../Components/Img/iconcarteira.png';
import { CardOrcamentoUsina } from "../../../Components/CardOrcamentoUsina";

import { BoxTitulo } from "../../../Components/BoxTitulo";
import { Footer } from "../../../Components/Footer";
import { CardUsina } from "../../../Components/CardUsina";
import BasicExample from "../../../Components/Acordion";
//import { Footer } from "../../../Components/Footer";



export const Usina: React.FC = () => {

  return(
  
      <Container>
            <BoxTitulo titulo="ALUGUEL DE USINA" traco="______________"/>
<BoxTexto>
       <Texto>
      Economize todo mês sem investir absolutamente NADA.
      Alugue uma fração de uma usina solar fotovoltaica.
       </Texto>
       </BoxTexto>
        <BoxContainer>
      <ContainerPage>
   <Box>
<CardUsina imagem={cofre} descricao="Economia o ano todo"/>
<CardUsina imagem={carteira} descricao="Redução na conta de energia"/>
<CardUsina imagem={painel} descricao="Sem instalação sem manutenção"/>
<CardUsina imagem={carteira} descricao="Sem investimento ou taxas"/>
<CardUsina imagem={cofre} descricao="Economia o ano todo"/>
<CardUsina imagem={painel} descricao="Energia sustentável"/>
   </Box>
      </ContainerPage>
    <CardOrcamentoUsina/>
   </BoxContainer>

   <SectionA>
    <Titulo>Dúvidas frequentes</Titulo>
 <BoxAccordion>

    <BasicExample></BasicExample>
    </BoxAccordion>
   </SectionA>
   <Footer></Footer>
   </Container>
    );
  }