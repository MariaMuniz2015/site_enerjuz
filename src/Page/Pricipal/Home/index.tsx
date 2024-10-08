


import Slider from "../../../Components/Slider";
import { SwiperSlide, SwiperProps} from "swiper/react";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {CardInstalacao} from "../../../Components/CardInstalacao";
import { ButtonCustomer } from '../../../Components/ButtonCustomer';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { Container, Section, Box, TituloSection,TituloSectionF,SubTitulo,SectionServico,  SectionSolar, SectionSolarCinza, SectionSolarCinzaI, Traco, BoxImage, SectionSolarFuncionamento, TituloSectionFunc, SectionSolarFuncionamento2, BoxServico, Mobile, MSlider, SectionMobile, TituloSectionFuncB} from './style';
import { TextTituloSection } from '../../../Components/TextTituloSection';
import { SectionQuemSomos } from '../../../Components/SectionQuemSomos';
import { CardServico } from '../../../Components/CardServico';
import { Footer } from '../../../Components/Footer';
import { CardSolar } from '../../../Components/CardSolar';

import comercialIcone from '../../../assets/Img/comercial2ricone.png';
import agroIcone from '../../../assets/Img/agro3icone.png';
import funcionamento from'../../../assets/Img/funcionamentof.png';
import residencialIcone from '../../../assets/Img/residencial2jicone.png';
import imgResidencial from '../../../assets/Img/residencial1.png';
import comercial1 from '../../../assets/Img/comercial1.png';
import imgAgro from '../../../assets/Img/imgAgro.png';
import imgUsina1 from '../../../assets/Img/imgUsina1.jpg';
//import Agro from '../../../assets/Img/agro1.png';
import pesquisa1 from '../../../assets/Img/pesquisa1.png';
import proposta from '../../../assets/Img/proposta.png';
import meioambienteg from '../../../assets/Img/meioambienteg.png';
import retorno from '../../../assets/Img/retorno.png';
import sustentavel from '../../../assets/Img/sustentavel.png';
import casaenergia from '../../../assets/Img/casaenergia.png';
import painelsolars from '../../../assets/Img/painelsolars.png';
import manutencao2 from '../../../assets/Img/manutencao2.png';
import projeto from '../../../assets/Img/projeto.png';
import imovel from '../../../assets/Img/imovel.png';
import requisitos from '../../../assets/Img/requisitos.png';
import psolar from '../../../assets/Img/psolar.png';
import instalacao from '../../../assets/Img/instalacao.png';
//import Aos from 'aos';
///import 'aos/dist/aos.css';
import Animate from '../../../Components/Animate';
import "bootstrap/dist/css/bootstrap.min.css";
import { CardFucionamento } from '../../../Components/CardFuncionamento';
import MobileAnimate from '../../../Components/MobileAnimate';
import React, { useEffect } from 'react';
import "aos/dist/aos.css"
import Aos from "aos";



const settings: SwiperProps= {
  
  spaceBetween:6,

  navigation: true,
  breakpoints: {
    990: { slidesPerView: 4 },
    739:{ slidesPerView: 3 },
    500: { slidesPerView: 2},
},
  pagination: {clickable: true }
}

export const Home: React.FC = () => {

  useEffect(() => {
    Aos.init({ duration: 1800 });
  }, []);
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
   
      </SectionMobile>

      <SectionSolarFuncionamento> 
      <TituloSectionFuncB>BENEFÍCIOS DO SISTEMA FOTOVOLTAICO</TituloSectionFuncB>
       <Traco>_______________________</Traco>

    <Box data-aos="zoom-in">
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

  <SectionSolarFuncionamento2  data-aos="zoom-in-up">
  <TituloSectionFunc>COMO FUNCIONA A CAPTAÇÃO E CONVERSÃO DA ENERGIA SOLAR</TituloSectionFunc>
      
<BoxImage>
<CardFucionamento imagem={funcionamento}/>

</BoxImage>

      </SectionSolarFuncionamento2> 


<SectionSolarCinza  data-aos="zoom-in-up"> 
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

      <SectionServico data-aos="zoom-in-up">
   <TextTituloSection textoI='NOSSOS' textoF='SERVIÇOS' traco='______'></TextTituloSection>
    <BoxServico>
  <CardServico link='/residencial' imagem={residencialIcone} titulo='Residencial' />
  <CardServico link='/agro' imagem={agroIcone} titulo='Agro' />
  <CardServico link='/comercial' imagem={comercialIcone} titulo='Comercial'/>
  <CardServico link='/usinaInvestimento' imagem={imgUsina1} titulo='Usina'/>
  </BoxServico>
      </SectionServico>

   <SectionSolar>

  
  <SectionQuemSomos/>
</SectionSolar>

      <SectionSolarCinzaI data-aos="zoom-in-up">
       <TituloSection> INSTALAÇÕES</TituloSection>
       <Traco>______</Traco>
    <SubTitulo>Conheça algumas das nossas instalações </SubTitulo>
    
    <Box>
  <Slider settings={settings}>

  <SwiperSlide><Link to="/Agro"><CardInstalacao titulo="Agro" imagem={imgAgro} /></Link></SwiperSlide>   
  <SwiperSlide><Link to="/Residencial"><CardInstalacao titulo="Residencial" imagem={imgResidencial} /></Link></SwiperSlide>
  <SwiperSlide><Link to="/Comercial"><CardInstalacao titulo="Comercial" imagem={comercial1} /></Link></SwiperSlide>
  <SwiperSlide><Link to="/UsinaInvestimento"><CardInstalacao titulo="Usina" imagem={imgUsina1} /></Link></SwiperSlide>

  </Slider>
  </Box>
      </SectionSolarCinzaI>
      
      <Footer></Footer>
      </Container>
    );
  }
    

