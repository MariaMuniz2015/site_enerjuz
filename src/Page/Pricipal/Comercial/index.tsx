import { BoxPage } from "../../../Components/BoxPage";
import{BoxContainer, Container, ContainerPage,} from "./style";
import comercial1 from '../../../Components/Img/comercial1.png';
import comercial3icone from '../../../Components/Img/comercial3icone.png';
import comercial2icone from '../../../Components/Img/comercial2ricone.png';
import comercial1icone from '../../../Components/Img/comercial1icone.png';
import { CardOrcamento } from "../../../Components/CardOrcamento";

import { BoxTitulo } from "../../../Components/BoxTitulo";
import { Footer } from "../../../Components/Footer";
//import { Footer } from "../../../Components/Footer";



export const Comercial: React.FC = () => {
  return(
    <Container>
          <BoxTitulo titulo="COMERCIAL" traco="_________"/>
      <BoxContainer>
    <ContainerPage>
  <BoxPage  imagem={comercial1}
  texto="Estamos atuando há varios anos no mercado de energia solar. Oferecendo aos
   nossos cliente a solução pra economizar, praticar a sustentabilidade e gerar energia limpa. 
   Estamos atuando há varios anos no mercado de energia solar. Oferecendo aos nossos cliente a "
 
  icone1={comercial1icone}
  icone2={comercial3icone}
  icone3={comercial2icone}
  icone4={comercial3icone}
  titulo="Instalação Enerjuz ©"
  />
    </ContainerPage>
    
  <CardOrcamento></CardOrcamento>
 </BoxContainer>
 <Footer></Footer>
    </Container>
  )
}