
import { Container, BoxSlider} from "./style";
import { Footer } from "../../../Components/Footer";
import { BoxTituloInterno } from "../../../Components/BoxTituloInterno";
import GalleryAgro from "../../../Components/GalleryAgro";




export const InstaAgro: React.FC = () => {
  return(
    <Container>
 <BoxTituloInterno titulo="Agro"/>
     

<BoxSlider>
<GalleryAgro/>
</BoxSlider>

<Footer></Footer>
    </Container>
  );
}