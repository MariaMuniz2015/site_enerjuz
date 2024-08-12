
import{ Container,BoxSlider} from "./style";




import { BoxTitulo } from "../../../Components/BoxTitulo";
import { Footer } from "../../../Components/Footer";

import GalleryComercial from "../../../Components/GalleryComercial";
//import { Footer } from "../../../Components/Footer";



export const Comercial: React.FC = () => {
  return(
    <Container>
          <BoxTitulo titulo="COMERCIAL" traco="_________"/>


<BoxSlider>
  <GalleryComercial/>
  </BoxSlider>
 


 <Footer></Footer>

    </Container>
  )
}