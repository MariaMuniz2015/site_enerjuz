
import { BoxInstalacao } from "../../../Components/BoxInstalacao";
import { Container, BoxSlider} from "./style";
import { Footer } from "../../../Components/Footer";
import { BoxTituloInterno } from "../../../Components/BoxTituloInterno";
import GalleryAgro from "../../../Components/ImageGaleryAgro";




export const InstaAgro: React.FC = () => {
  return(
    <Container>
 <BoxTituloInterno titulo="Agro"/>
      <BoxInstalacao texto="A energia solar tem um grande potencial para impulsionar o setor agropecuário de várias maneiras:
      A energia solar é uma fonte de energia limpa e renovável, o que contribui para a redução das emissões de gases de efeito 
      estufa e para a mitigação das mudanças climáticas. Ao adotar a energia solar, os produtores agrícolas podem demonstrar um 
      compromisso com a sustentabilidade ambiental, o que pode ser vantajoso do ponto de vista da imagem e do marketing. Aumento da 
      eficiência operacional: Os sistemas de energia solar geralmente requerem pouca manutenção e têm uma vida útil longa. Isso significa
       menos tempo e recursos gastos em reparos e substituições, permitindo que os agricultores se concentrem mais nas operações agrícolas.
       Em suma, a energia solar pode desempenhar um papel importante na melhoria da eficiência, sustentabilidade e rentabilidade das operações 
       agrícolas, tornando-se uma escolha cada vez mais atraente para os agricultores em todo o mundo."
/>

<BoxSlider>
<GalleryAgro/>
</BoxSlider>

<Footer></Footer>
    </Container>
  );
}