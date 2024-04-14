

import React from 'react';
import Slider from "../../../Components/Slider";
import { SwiperSlide, SwiperProps} from "swiper/react";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {CardInstalacao} from "../../../Components/CardInstalacao";
import { ButtonCustomer } from '../../../Components/ButtonCustomer';
import 'bootstrap/dist/css/bootstrap.css';

import { Container, Section, Box, TituloSection,TituloSectionF,SubTitulo,SectionServico,  SectionSolar, SectionSolarCinza, SectionSolarCinzaI, Traco, BoxImage, SectionSolarFuncionamento, TituloSectionFunc, SectionSolarFuncionamento2, BoxServico, Mobile, MSlider, SectionMobile} from './style';
import { TextTituloSection } from '../../../Components/TextTituloSection';
import { SectionQuemSomos } from '../../../Components/SectionQuemSomos';
import { CardServico } from '../../../Components/CardServico';
import { Footer } from '../../../Components/Footer';
import { CardSolar } from '../../../Components/CardSolar';

import comercialIcone from '../../../Components/Img/comercial2ricone.png';
import agroIcone from '../../../Components/Img/agro3icone.png';
import funcionamento from'../../../Components/Img/funcionamento.png';
import residencialIcone from '../../../Components/Img/residencial2jicone.png';
import imgResidencial from '../../../Components/Img/residencial1.png';
import comercial1 from '../../../Components/Img/comercial1.png';
import imgAgro from '../../../Components/Img/imgAgro.png';
//import Agro from '../../../Components/Img/agro1.png';
import pesquisa1 from '../../../Components/Img/pesquisa1.png';
import proposta from '../../../Components/Img/proposta.png';
import meioambienteg from '../../../Components/Img/meioambienteg.png';
import retorno from '../../../Components/Img/retorno.png';
import sustentavel from '../../../Components/Img/sustentavel.png';
import casaenergia from '../../../Components/Img/casaenergia.png';
import painelsolars from '../../../Components/Img/painelsolars.png';
import manutencao2 from '../../../Components/Img/manutencao2.png';
import projeto from '../../../Components/Img/projeto.png';
import imovel from '../../../Components/Img/imovel.png';
import requisitos from '../../../Components/Img/requisitos.png';
import psolar from '../../../Components/Img/psolar.png';
import instalacao from '../../../Components/Img/instalacao.png';
//import Aos from 'aos';
///import 'aos/dist/aos.css';
import Animate from '../../../Components/Animate';
import "bootstrap/dist/css/bootstrap.min.css";
import { CardFucionamento } from '../../../Components/CardFuncionamento';
import MobileAnimate from '../../../Components/MobileAnimate';




const settings: SwiperProps= {
  
  spaceBetween:8,

  navigation: true,
  breakpoints: {
    961: { slidesPerView: 4 },
    739:{ slidesPerView: 3 },
    500: { slidesPerView: 2},
},
  pagination: {clickable: true }
}

export const Home: React.FC = () => {
    return (
      <Container>
        <Section> 
          <Mobile>
    <Animate/>
    </Mobile>
      <ButtonCustomer/>
      </Section>

      <SectionMobile> 
          <MSlider>
    <MobileAnimate/>
    </MSlider>
      <ButtonCustomer/>
      </SectionMobile>

      <SectionSolarFuncionamento> 
      <TituloSectionFunc>BENEFÍCIOS DO SISTEMA FOTOVOLTAICO</TituloSectionFunc>
       <Traco>_______________________</Traco>

    <Box>
  <Slider settings={settings}>
  <SwiperSlide> <CardSolar descricao='Economia de até 90% em sua conta de luz'
           numero='1'
           imagem={retorno}
           titulo='Economia'/></SwiperSlide>
  <SwiperSlide> <CardSolar descricao='Agrega em torno de 3% a 8% de valor na venda do imóvel.'
           numero='2'
           imagem={imovel}
           titulo='Valor'/></SwiperSlide>
            <SwiperSlide> <CardSolar descricao='Energia sustentável e renovável.'
           numero='3'
           imagem={sustentavel}
           titulo='Renovável'/></SwiperSlide>
            <SwiperSlide> <CardSolar descricao='Requer o mínimo de manutenção após a instalação.'
           numero='4'
           imagem={manutencao2}

           titulo='Manutenção'/></SwiperSlide>
             <SwiperSlide> <CardSolar descricao='Painel com até 25 anos de vida útil, com 80% da eficiência inicial'
           numero='5'
            imagem={casaenergia}
           ///imagem={painelSolar}
           titulo='Garantia'/></SwiperSlide>
           <SwiperSlide> <CardSolar descricao='Evita o aquecimento global e ajuda o meio ambiente'
           numero='6'
           imagem={meioambienteg}
           titulo='Meio ambiente'/></SwiperSlide>
             <SwiperSlide> <CardSolar descricao='Uso de fonte inesgotável de energia'
           numero='7'
           imagem={painelsolars}
           titulo='Energia inesgotável'/></SwiperSlide>
  </Slider>
  </Box>
  </SectionSolarFuncionamento>

  <SectionSolarFuncionamento2>
  <TituloSectionFunc>COMO FUNCIONA</TituloSectionFunc>
       <Traco>________</Traco>
<BoxImage>
<CardFucionamento imagem={funcionamento}/>

</BoxImage>

      </SectionSolarFuncionamento2> 


<SectionSolarCinza> 
      <TituloSectionF>COMO TRABALHAMOS</TituloSectionF>
       <Traco>_____________</Traco>
    <Box>
  <Slider settings={settings}>
  <SwiperSlide> <CardSolar descricao='Realizamos os estudos e as análises do consumo médio anual da
 conta de luz atual do local'
           numero='1'
           imagem={pesquisa1}
           titulo='Análise'/></SwiperSlide>
  <SwiperSlide> <CardSolar descricao='Fechamos a proposta ideal para você e te apresentamos as possibilidades de pagamento.'
           numero='2'
           imagem={proposta}
           titulo='Proposta'/></SwiperSlide>
            <SwiperSlide> <CardSolar descricao='Após aprovada a proposta, conduzimos a vistoria técnica da propriedade para coletar os requisitos do sistema.'
           numero='3'
           imagem={requisitos}
           titulo='Vistoria'/></SwiperSlide>
            <SwiperSlide> <CardSolar descricao=' Com os requisitos técnicos em mãos, elaboramos o projeto e solicitamos o acesso à rede de energia junto à distribuidora.'
           numero='4'
           imagem={projeto}
           titulo='Projeto'/></SwiperSlide>
             <SwiperSlide> <CardSolar descricao=' Após o projeto ser aprovado pela distribuidora, realizamos a instalação do sistema'
           numero='5'
            imagem={instalacao}
           ///imagem={painelSolar}
           titulo='Instalação'/></SwiperSlide>
           <SwiperSlide> <CardSolar descricao='Por último é solicitado a vistoria à concessionária para que o sistema seja aprovado e possa começar a funcionar'
           numero='6'
           imagem={psolar}
           titulo='Funcionamento'/></SwiperSlide>
 
  </Slider>
  </Box>
      </SectionSolarCinza>






      <SectionServico>
   <TextTituloSection textoI='NOSSOS' textoF='SERVIÇOS' traco='______'></TextTituloSection>
    <BoxServico>
  <CardServico link='/residencial' imagem={residencialIcone} titulo='Residencial' descricao='Ao instalar sistemas de energia solar, os proprietários podem reduzir significativamente suas contas de energia, uma vez que geram eletricidade gratuita a partir da luz do sol.'/>
  <CardServico link='/agro' imagem={agroIcone} titulo='Agro' descricao='A energia solar pode ser usada em locais remotos onde a eletricidade da rede não está disponível, como em áreas rurais ou em sistemas de energia para bombeamento de água, comunicações e iluminação.'/>
  <CardServico link='/comercial' imagem={comercialIcone} titulo='Comercial'descricao=' Ao adotar a energia solar, os indivíduos e empresas contribuem para a redução das emissões de carbono e para a transição global para fontes de energia mais limpas e sustentáveis.'/>
  </BoxServico>
      </SectionServico>

   <SectionSolar>
  <SectionQuemSomos/>
</SectionSolar>

      <SectionSolarCinzaI>
       <TituloSection> INSTALAÇÕES</TituloSection>
       <Traco>______</Traco>
    <SubTitulo>Conheça algumas das nossas instalações </SubTitulo>
    <Box>
  <Slider settings={settings}>

  <SwiperSlide><a href="/InstaComercial"><CardInstalacao titulo="Agro" imagem={imgAgro} /></a></SwiperSlide>   
  <SwiperSlide><a href="/InstaComercial"><CardInstalacao titulo="Residencial" imagem={imgResidencial} /></a></SwiperSlide>
  <SwiperSlide><a href="/InstaComercial"><CardInstalacao titulo="Comercial" imagem={comercial1} /></a></SwiperSlide>
  <SwiperSlide><a href="/InstaComercial"><CardInstalacao titulo="Usina" imagem={comercial1} /></a></SwiperSlide>

  </Slider>
  </Box>
      </SectionSolarCinzaI>
      
      <Footer></Footer>
      </Container>
    );
  }
    

