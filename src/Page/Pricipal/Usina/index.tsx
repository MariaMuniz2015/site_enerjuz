
import{BoxContainer, Container, ContainerPage,Texto, BoxSubtitulo,Box,BoxA,BoxC, SectionA, SectionB, BoxAccordion,Titulo, BoxB} from "./style";
import cofre from '../../../assets/Img/iconCofre.png';
import sol from '../../../assets/Img/iconsol.png';
import dinheiro from '../../../assets/Img/icondinheiro.png';
import calendar from '../../../assets/Img/iconcalendar.png';
import painel from '../../../assets/Img/iconPainel.png';
import contaantes from '../../../assets/Img/contaantes.png';
import contadepois from '../../../assets/Img/contadepois.png';
import associacao from '../../../assets/Img/boletoassociacao.png';
import resultados from '../../../assets/Img/resultados02.png';
import carteira from '../../../assets/Img/iconcarteira.png';
import { CardOrcamentoUsina } from "../../../Components/CardOrcamentoUsina";

import { BoxTitulo } from "../../../Components/BoxTitulo";
import { Footer } from "../../../Components/Footer";
import { CardUsina } from "../../../Components/CardUsina";
import BasicExample from "../../../Components/Acordion";
import { ImgAluguel } from "../../../Components/ImgAluguel";

//import { Footer } from "../../../Components/Footer";



export const UsinaAluguel: React.FC = () => {

  return(
  
      <Container>
            <BoxTitulo titulo="ALUGUEL DE USINA" traco="________________"/>

        <BoxContainer>
      <ContainerPage>
         
   <Box>
   <Texto>
      Economize todo mês sem investir absolutamente NADA.
      Alugue uma fração de uma usina solar fotovoltaica.
       </Texto>
<CardUsina imagem={cofre} descricao="Economia o ano todo"/>
<CardUsina imagem={carteira} descricao="Redução na conta de energia"/>
<CardUsina imagem={painel} descricao="Sem instalação sem manutenção"/>
<CardUsina imagem={dinheiro} descricao="Sem investimento ou taxas"/>
<CardUsina imagem={calendar} descricao="Economia o ano todo"/>
<CardUsina imagem={sol} descricao="Energia sustentável"/>
   </Box>
      </ContainerPage>
    <CardOrcamentoUsina/>
   </BoxContainer>

<SectionB>
<BoxA>
<BoxSubtitulo>Exemplo real dos lucros com a energia solar.</BoxSubtitulo>
<BoxB>
<BoxC>
<ImgAluguel imagem={contaantes} texto="Conta da cemig sem energia solar"/>
<ImgAluguel imagem={contadepois} texto="Conta da cemig com energia solar"/>
</BoxC>

<ImgAluguel imagem={associacao} texto="Conta da cemig com energia solar"/>
<ImgAluguel imagem={resultados} texto="Faturas"/>
</BoxB>
</BoxA>
</SectionB>


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