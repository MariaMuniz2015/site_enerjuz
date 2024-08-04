
import{ BoxSlider, Container} from "./style";


import { BoxTitulo } from "../../../Components/BoxTitulo";
import { Footer } from "../../../Components/Footer";

import GalleryAgro from "../../../Components/GalleryAgro";






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