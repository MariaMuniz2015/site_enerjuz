
import { Container,BoxSlider} from "./style"
import { Footer } from "../../../Components/Footer";
import { BoxTituloInterno } from "../../../Components/BoxTituloInterno";

import GalleryResidencial from "../../../Components/GalleryResidencial";



export const InstaResidencial: React.FC = () => {
  return(
    <Container>
 <BoxTituloInterno titulo="Residencial"/>
     

<BoxSlider>
<GalleryResidencial/>
</BoxSlider>

<Footer></Footer>
    </Container>
  );
}