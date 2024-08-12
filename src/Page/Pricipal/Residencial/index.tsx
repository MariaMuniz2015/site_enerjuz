
import{ Container, BoxSlider} from "./style";


import { BoxTitulo } from "../../../Components/BoxTitulo";
import { Footer } from "../../../Components/Footer";
import GalleryResidencial from "../../../Components/GalleryResidencial";





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