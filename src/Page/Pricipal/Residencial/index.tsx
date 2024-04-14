import { BoxPage } from "../../../Components/BoxPage";
import{BoxContainer, Container, ContainerPage,} from "./style";
import imgResidencial from '../../../Components/Img/residencial1.png';
import residencial2ricone from '../../../Components/Img/residencial2jicone.png';
import residencial3icone from '../../../Components/Img/residencial3bicone.png';
import residencial1icone from '../../../Components/Img/residencial1icone.png';
import residencial4icone from '../../../Components/Img/residencial4Icone.png';
import { CardOrcamento } from "../../../Components/CardOrcamento";

import { BoxTitulo } from "../../../Components/BoxTitulo";
import { Footer } from "../../../Components/Footer";




export const Residencial: React.FC = () => {
  return(
    <Container>
          <BoxTitulo titulo="RESIDENCIAL" traco="___________"/>
   <BoxContainer>
    <ContainerPage>
  <BoxPage  imagem={imgResidencial}
  texto="Estamos atuando há varios anos no mercado de energia solar. Oferecendo aos
   nossos cliente a solução pra economizar, praticar a sustentabilidade e gerar energia limpa. 
   Estamos atuando há varios anos no mercado de energia solar. Oferecendo aos nossos cliente a "
 
  icone1={residencial2ricone}
  icone2={residencial1icone}
  icone3={residencial3icone}
  icone4={residencial4icone}
  titulo="Instalação Enerjuz ©"
  />
    </ContainerPage>
    
  <CardOrcamento></CardOrcamento>
 </BoxContainer>
 <Footer></Footer>
    </Container>
  )
}