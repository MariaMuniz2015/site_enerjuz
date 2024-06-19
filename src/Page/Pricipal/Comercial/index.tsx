import { BoxPage } from "../../../Components/BoxPage";
import{BoxContainer, Container, ContainerPage,BoxSlider} from "./style";
import comercial1 from '../../../Components/Img/comercial1.png';

import { CardOrcamento } from "../../../Components/CardOrcamento";

import { BoxTitulo } from "../../../Components/BoxTitulo";
import { Footer } from "../../../Components/Footer";

import GalleryComercial from "../../../Components/GalleryComercial";
//import { Footer } from "../../../Components/Footer";



export const Comercial: React.FC = () => {
  return(
    <Container>
          <BoxTitulo titulo="COMERCIAL" traco="_________"/>
      <BoxContainer>
    <ContainerPage>
  <BoxPage  imagem={comercial1}
  texto="A energia solar oferece uma variedade de benefícios para empresas comerciais,
   incluindo economia de custos, responsabilidade ambiental, independência energética e valoriza o imóvel. 
   Ter um sistema solar instalado pode fornecer às empresas uma fonte de energia independente em caso de falha na rede elétrica. Isso pode ser 
   crucial para manter as operações comerciais durante quedas de energia ou interrupções prolongadas. Além disso em muitas regiões, há incentivos 
   fiscais e subsídios disponíveis para empresas que investem em energia solar."

  />
    </ContainerPage>
    
  <CardOrcamento></CardOrcamento>
 </BoxContainer>
<BoxSlider>
  <GalleryComercial/>
  </BoxSlider>
 


 <Footer></Footer>

    </Container>
  )
}