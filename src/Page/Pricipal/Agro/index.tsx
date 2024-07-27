
import { BoxPage } from "../../../Components/BoxPage";
import{BoxContainer, BoxSlider, Container, ContainerPage} from "./style";
import imgAgro from '../../../Components/Img/imgAgro.png';

import { CardOrcamento } from "../../../Components/CardOrcamento";

import { BoxTitulo } from "../../../Components/BoxTitulo";
import { Footer } from "../../../Components/Footer";
import GalleryAgro from "../../../Components/ImageGaleryAgro";




export const Agro: React.FC = () => {
  return(
    <Container>
          <BoxTitulo titulo="AGRO" traco="____"/>
   


<BoxSlider>
 <GalleryAgro/>
 </BoxSlider>
 <Footer></Footer>
    </Container>
  )
}