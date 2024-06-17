
import { BoxInstalacao } from "../../../Components/BoxInstalacao";
import { Container} from "./style"
import { Footer } from "../../../Components/Footer";
import { BoxTituloInterno } from "../../../Components/BoxTituloInterno";

import GalleryResidencial from "../../../Components/GalleryResidencial";



export const InstaResidencial: React.FC = () => {
  return(
    <Container>
 <BoxTituloInterno titulo="Residencial"/>
      <BoxInstalacao texto=" A energia solar residencial está se tornando cada vez mais popular devido aos
       seus inúmeros benefícios.
       Embora o investimento inicial para instalar um sistema de energia solar em uma residência possa ser significativo, a economia a longo prazo é notável. Uma vez instalado, um sistema solar pode reduzir drasticamente ou até mesmo eliminar completamente a 
       conta de energia elétrica mensal, resultando em economias substanciais ao longo dos anos. As residências com sistemas de energia solar instalados geralmente têm um valor de mercado mais alto do que as sem esses sistemas. Os compradores estão cada vez mais interessados em casas com eficiência 
       energética e sustentáveis, o que pode tornar a propriedade mais atrativa e valiosa.  A energia solar oferece estabilidade nos custos de energia, pois o sol é uma fonte de energia gratuita e inesgotável. Isso contrasta com os custos variáveis de energia elétrica convencional, que podem aumentar 
       devido a flutuações nos preços dos combustíveis"

       />


<GalleryResidencial/>

<Footer></Footer>
    </Container>
  );
}