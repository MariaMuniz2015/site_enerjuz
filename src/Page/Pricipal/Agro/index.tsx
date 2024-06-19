
import { BoxPage } from "../../../Components/BoxPage";
import{BoxContainer, BoxSlider, Container, ContainerPage} from "./style";
import imgAgro from '../../../Components/Img/imgAgro.png';

import { CardOrcamento } from "../../../Components/CardOrcamento";

import { BoxTitulo } from "../../../Components/BoxTitulo";
import { Footer } from "../../../Components/Footer";
import GalleryAgro from "../../../Components/ImageGaleryAgro";




export const Agro: React.FC = () => {
  return(
    <Container>
          <BoxTitulo titulo="AGRO" traco="____"/>
      <BoxContainer>
    <ContainerPage>
  <BoxPage  imagem={imgAgro}
  texto="A energia solar pode desempenhar um papel importante na melhoria da eficiência, sustentabilidade e rentabilidade das operações 
  agrícolas, tornando-se uma escolha cada vez mais atraente para os agricultores em todo o mundo. O setor agropecuário é intensivo em energia,
   com necessidades que vão desde o bombeamento de água até o funcionamento de equipamentos de processamento e refrigeração. A energia solar pode reduzir significativamente os custos de energia para os agricultores e pecuaristas,
   especialmente em áreas onde a eletricidade da rede é cara ou não está disponível."

  />
 
    </ContainerPage>
    
    
  <CardOrcamento/>

 </BoxContainer>
<BoxSlider>
 <GalleryAgro/>
 </BoxSlider>
 <Footer></Footer>
    </Container>
  )
}