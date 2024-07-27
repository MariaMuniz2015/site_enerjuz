
import React from 'react';

import { Container, ContainerImg} from "./style";
import { CardImg } from "../../../Components/CardImg";

import { Link } from "react-router-dom";
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
      
       <Link to="/instaAgro"><CardImg  titulo="Agro" imagem={imgAgro} /></Link>
      <Link to="/instaComercial"><CardImg  titulo="Comercial" imagem={imgComercial} /></Link>
      <Link to="/instaResidencial"><CardImg  titulo="Residencial" imagem={imgResidencial} /></Link>
      <Link to="/instaUsina"><CardImg  titulo="Usina de investimento" imagem={usina1} /></Link>
      </ContainerImg>
           


           
    
         <Footer></Footer>

     
     
     
    </Container>
     );
    }
      