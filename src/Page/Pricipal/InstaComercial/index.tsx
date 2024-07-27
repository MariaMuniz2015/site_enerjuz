
import { BoxInstalacao } from "../../../Components/BoxInstalacao";
import { Container, BoxSlider} from "./style";
import { Footer } from "../../../Components/Footer";
import { BoxTituloInterno } from "../../../Components/BoxTituloInterno";
import GalleryComercial from "../../../Components/GalleryComercial";



export const InstaComercial: React.FC = () => {
  return(
    <Container>
 <BoxTituloInterno titulo="Comercial"/>


<BoxSlider>
<GalleryComercial/>
</BoxSlider>
    
<Footer></Footer>
    </Container>
  );
}