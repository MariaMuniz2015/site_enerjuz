import { BoxPage } from "../../../Components/BoxPage";
import{BoxContainer, Container, ContainerPage,} from "./style";
import imgResidencial from '../../../Components/Img/residencial1.png';
import { CardOrcamento } from "../../../Components/CardOrcamento";

import { BoxTitulo } from "../../../Components/BoxTitulo";
import { Footer } from "../../../Components/Footer";
import GalleryResidencial from "../../../Components/GalleryResidencial";




export const Residencial: React.FC = () => {
  return(
    <Container>
          <BoxTitulo titulo="RESIDENCIAL" traco="___________"/>
   <BoxContainer>
    <ContainerPage>
  <BoxPage  imagem={imgResidencial}
  texto="A energia solar residencial oferece uma série de benefícios econômicos, ambientais e 
  sociais, tornando-se uma escolha atraente para muitos proprietários de residências que desejam 
  economizar dinheiro, reduzir sua pegada de carbono e aumentar o valor de suas propriedades. 
  Embora o investimento inicial para instalar um sistema de energia solar em uma residência possa ser significativo, a economia a longo prazo é notável. Uma vez instalado, 
  um sistema solar pode reduzir drasticamente ou até mesmo eliminar completamente a conta de energia elétrica mensal, 
  resultando em economias substanciais ao longo dos anos. "

  />
    </ContainerPage>
    
  <CardOrcamento></CardOrcamento>
 </BoxContainer>
 <GalleryResidencial/>
 <Footer></Footer>
    </Container>
  )
}