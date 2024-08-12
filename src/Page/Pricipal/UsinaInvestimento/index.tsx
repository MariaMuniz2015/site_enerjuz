

import { BoxSlider, Container} from "./style";
import { Footer } from "../../../Components/Footer";

import GalleryUsina from "../../../Components/GalleryUsina";
import { BoxTitulo } from "../../../Components/BoxTitulo";



export const UsinaInvestimento: React.FC = () => {
  return(
    <Container>

 <BoxTitulo titulo="Usina de Investimento" traco="______________________"/>
<BoxSlider>
 <GalleryUsina/>
 </BoxSlider>
<Footer></Footer>
    </Container>
  );
}