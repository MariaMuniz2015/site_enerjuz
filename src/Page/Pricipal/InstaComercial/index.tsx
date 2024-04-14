
import { BoxInstalacao } from "../../../Components/BoxInstalacao";
import { Container} from "./style";

import comercial3icone from '../../../Components/Img/comercial3icone.png';
import comercial2icone from '../../../Components/Img/comercial2ricone.png';
import comercial1icone from '../../../Components/Img/comercial1icone.png';
import { Footer } from "../../../Components/Footer";
import { BoxTituloInterno } from "../../../Components/BoxTituloInterno";



export const InstaComercial: React.FC = () => {
  return(
    <Container>
 <BoxTituloInterno titulo="Comercial"/>
      <BoxInstalacao texto="A energia solar oferece diversas vantagens, tornando-a uma opção atraente para muitos consumidores e empresas. Algumas das principais vantagens da energia solar incluem:
Sustentabilidade ambiental: A energia solar é uma fonte de energia renovável e limpa, que não emite poluentes atmosféricos ou gases de efeito estufa durante a geração de eletricidade. Isso ajuda a reduzir o impacto ambiental e combater as mudanças climáticas.
Economia de energia: Ao instalar sistemas de energia solar, os proprietários podem reduzir significativamente suas contas de energia, uma vez que geram eletricidade gratuita a partir da luz do sol. Em muitos casos, é possível economizar uma quantia considerável a longo prazo.
Redução das contas de eletricidade: A energia solar permite que os proprietários produzam sua própria eletricidade, reduzindo a dependência de fornecedores de eletricidade e protegendo contra aumentos nos preços da eletricidade.
Incentivos fiscais e financeiros: Muitos governos e agências oferecem incentivos financeiros, como créditos fiscais, subsídios e tarifas de alimentação, para estimular a instalação de sistemas de energia solar. Isso torna a energia solar mais acessível e atraente do ponto de vista financeiro."
icone1={comercial1icone}
icone2={comercial3icone}
icone3={comercial2icone}
icone4={comercial3icone}
      titulo="Instalação Enerjuz ©"/>
      
<Footer></Footer>
    </Container>
  );
}