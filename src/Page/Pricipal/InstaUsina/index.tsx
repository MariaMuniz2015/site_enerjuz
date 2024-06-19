
import { BoxInstalacao } from "../../../Components/BoxInstalacao";
import { BoxSlider, Container} from "./style";
import { Footer } from "../../../Components/Footer";
import { BoxTituloInterno } from "../../../Components/BoxTituloInterno";
import GalleryUsina from "../../../Components/GalleryUsina";



export const InstaUsina: React.FC = () => {
  return(
    <Container>
 <BoxTituloInterno titulo="Usina de investimento"/>
      <BoxInstalacao texto="
Uma usina fotovoltaica é um sistema que converte a luz solar em eletricidade usando células fotovoltaicas, geralmente feitas de materiais semicondutores, como o silício. Quando a luz solar atinge essas células, 
ela gera um fluxo de elétrons, criando uma corrente elétrica.
Essas usinas são compostas por painéis solares, que consistem em múltiplas células fotovoltaicas agrupadas para gerar energia em larga escala. A eletricidade produzida pode ser usada diretamente ou armazenada em baterias para uso posterior.
As usinas fotovoltaicas são uma fonte de energia limpa e renovável, contribuindo para reduzir a dependência de combustíveis fósseis e diminuir as emissões de gases de efeito estufa, ajudando assim na luta contra as mudanças climáticas.."
/>
<BoxSlider>
 <GalleryUsina/>
 </BoxSlider>
<Footer></Footer>
    </Container>
  );
}