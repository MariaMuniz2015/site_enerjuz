
import{BoxContainer, Container, ContainerPage,Texto, BoxSubtitulo,BoxTexto,Box,BoxA, SectionA, SectionB, BoxAccordion,Titulo, BoxB} from "./style";
import cofre from '../../../Components/Img/iconCofre.png';
import painel from '../../../Components/Img/iconPainel.png';
import contaantes from '../../../Components/Img/contaantes.png';
import contadepois from '../../../Components/Img/contadepois.png';
import carteira from '../../../Components/Img/iconcarteira.png';
import { CardOrcamentoUsina } from "../../../Components/CardOrcamentoUsina";
import faturas from '../../../Components/Img/fatura01.png';
import { BoxTitulo } from "../../../Components/BoxTitulo";
import { Footer } from "../../../Components/Footer";
import { CardUsina } from "../../../Components/CardUsina";
import BasicExample from "../../../Components/Acordion";
import { ImgAluguel } from "../../../Components/ImgAluguel";

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

<SectionB>
<BoxA>

       <BoxSubtitulo>Exemplo real dos lucros com a energia solar.</BoxSubtitulo>
<BoxB>
<ImgAluguel imagem={contaantes} texto="Conta da cemig sem energia solar"/>
<ImgAluguel imagem={contadepois} texto="Conta da cemig com energia solar"/>
<ImgAluguel imagem={faturas} texto="Faturas"/>
</BoxB>
</BoxA>
</SectionB>

<Titulo>Dúvidas frequentes</Titulo>
   <SectionA>

 <BoxAccordion>
    <BasicExample></BasicExample>
    </BoxAccordion>
   </SectionA>


   <Footer></Footer>
   </Container>
    );
  }