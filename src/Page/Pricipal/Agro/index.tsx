
import { BoxPage } from "../../../Components/BoxPage";
import{BoxContainer, Container, ContainerPage} from "./style";
import imgAgro from '../../../Components/Img/imgAgro.png';
import agro3icone from '../../../Components/Img/agro3icone.png';
import agro2icone from '../../../Components/Img/agro2icone.png';
import agro4icone from '../../../Components/Img/agro4icone.png';
import agroicone from '../../../Components/Img/agroicone.png';
import { CardOrcamento } from "../../../Components/CardOrcamento";

import { BoxTitulo } from "../../../Components/BoxTitulo";
import { Footer } from "../../../Components/Footer";
//import { Footer } from "../../../Components/Footer";



export const Agro: React.FC = () => {
  return(
    <Container>
          <BoxTitulo titulo="AGRO" traco="____"/>
      <BoxContainer>
    <ContainerPage>
  <BoxPage  imagem={imgAgro}
  texto="Estamos atuando há varios anos no mercado de energia solar. Oferecendo aos
   nossos cliente a solução pra economizar, praticar a sustentabilidade e gerar energia limpa. 
   Estamos atuando há varios anos no mercado de energia solar. Oferecendo aos nossos cliente a "

  icone1={agroicone}
  icone2={agro2icone}
  icone3={agro3icone}
  icone4={agro4icone}
  titulo="Instalação Enerjuz ©"

  />
 
    </ContainerPage>
    
    
  <CardOrcamento/>
 </BoxContainer>
 <Footer></Footer>
    </Container>
  )
}