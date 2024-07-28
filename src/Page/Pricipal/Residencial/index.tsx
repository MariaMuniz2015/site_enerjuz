import { BoxPage } from "../../../Components/BoxPage";
import{BoxContainer, Container, ContainerPage,} from "./style";
import imgResidencial from '../../../Components/Img/residencial1.png';
import { CardOrcamento } from "../../../Components/CardOrcamento";

import { BoxTitulo } from "../../../Components/BoxTitulo";
import { Footer } from "../../../Components/Footer";
import GalleryResidencial from "../../../Components/GalleryResidencial";
import { BoxSlider } from "../Agro/style";




export const Residencial: React.FC = () => {
  return(
    <Container>
          <BoxTitulo titulo="RESIDENCIAL" traco="___________"/>
 

 <BoxSlider>
 <GalleryResidencial/>
 </BoxSlider>
 
 <Footer></Footer>
    </Container>
  )
}