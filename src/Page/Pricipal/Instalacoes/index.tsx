
import React from 'react';

import { Container, ContainerImg} from "./style";
import { CardImg } from "../../../Components/CardImg";


import { BoxTitulo } from '../../../Components/BoxTitulo';
import { Footer } from '../../../Components/Footer';
import imgAgro from '../../../Components/Img/imgAgro.png';
import imgComercial from '../../../Components/Img/comercial1.png';
import imgResidencial from '../../../Components/Img/residencial1.png';
import usina1 from '../../../Components/Img/imgUsina1.jpg';











export const Instalacoes: React.FC = () => {
  return (
    <Container>
      <BoxTitulo titulo="Instalações" traco='______'/>

       <ContainerImg>
      
       <a href="/instaAgro"><CardImg  titulo="Agro" imagem={imgAgro} /></a>
      <a href="/instaComercial"><CardImg  titulo="Comercial" imagem={imgComercial} /></a>
      <a href="/instaResidencial"><CardImg  titulo="Residencial" imagem={imgResidencial} /></a>
      <a href="/instaUsina"><CardImg  titulo="Usina de investimento" imagem={usina1} /></a>
      </ContainerImg>
           
    

          
           
    
         <Footer></Footer>

    </Container>
     );
    }
      