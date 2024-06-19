
import { BoxInstalacao } from "../../../Components/BoxInstalacao";
import { Container, BoxSlider} from "./style";
import { Footer } from "../../../Components/Footer";
import { BoxTituloInterno } from "../../../Components/BoxTituloInterno";
import GalleryComercial from "../../../Components/GalleryComercial";



export const InstaComercial: React.FC = () => {
  return(
    <Container>
 <BoxTituloInterno titulo="Comercial"/>
      <BoxInstalacao texto="A energia solar também tem um grande impacto positivo no setor comercial, oferecendo uma série de benefícios como:
Redução de custos operacionais: Uma das vantagens mais evidentes da energia solar para o comércio é a redução dos 
custos operacionais. Com a instalação de sistemas solares, as empresas podem gerar eletricidade de forma mais econômica, 
reduzindo assim as contas de energia ao longo do tempo.
Estabilidade nos custos de energia: A energia solar proporciona estabilidade nos custos de energia, 
uma vez que a luz solar é gratuita e abundante. Isso permite que as empresas prevejam e controlem melhor
 seus gastos com energia, reduzindo a incerteza associada às flutuações nos preços dos combustíveis fósseis.Em resumo, a energia solar oferece uma 
 variedade de benefícios para empresas comerciais, incluindo economia de custos, responsabilidade ambiental, independência energética e valorização imobiliária, 
 tornando-se uma escolha atraente para muitos proprietários e gestores de empresas."
/>

<BoxSlider>
<GalleryComercial/>
</BoxSlider>
    
<Footer></Footer>
    </Container>
  );
}