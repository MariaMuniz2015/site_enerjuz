
import React from 'react';

import { Container, ContainerImg} from "./style";
import { CardImg } from "../../../Components/CardImg";

import { Link } from "react-router-dom";
import { BoxTitulo } from '../../../Components/BoxTitulo';
import { Footer } from '../../../Components/Footer';
import imgAgro from '../../../assets/Img/imgAgro.png';
import imgComercial from '../../../assets/Img/comercial1.png';
import imgResidencial from '../../../assets/Img/residencial1.png';
import usina1 from '../../../assets/Img/imgUsina1.jpg';




export const Instalacoes: React.FC = () => {
  return (
    <Container>
      <BoxTitulo titulo="INSTALAÇÕES" traco='__________'/>

       <ContainerImg>
      
       <Link to="/Agro"><CardImg  titulo="Agro" imagem={imgAgro} /></Link>
      <Link to="/Comercial"><CardImg  titulo="Comercial" imagem={imgComercial} /></Link>
      <Link to="/Residencial"><CardImg  titulo="Residencial" imagem={imgResidencial} /></Link>
      <Link to="/UsinaInvestimento"><CardImg  titulo="Usina fotovoltaíca" imagem={usina1} /></Link>
      </ContainerImg>
           


           
    
         <Footer></Footer>

     
     
     
    </Container>
     );
    }
      