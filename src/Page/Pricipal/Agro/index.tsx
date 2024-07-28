
import{ BoxSlider, Container} from "./style";


import { BoxTitulo } from "../../../Components/BoxTitulo";
import { Footer } from "../../../Components/Footer";
import SliderAgro2 from "../../../Components/SliderAgro2";






export const Agro: React.FC = () => {
  return(
    <Container>
          <BoxTitulo titulo="AGRO" traco="____"/>
   

<BoxSlider>
<SliderAgro2/>
</BoxSlider>


 <Footer></Footer>
    </Container>
  )
}