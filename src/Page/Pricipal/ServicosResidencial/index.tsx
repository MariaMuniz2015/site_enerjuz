
import React from 'react';

import { Container, ContainerImg} from "./style";


import { Link } from "react-router-dom";
import { BoxTitulo } from '../../../Components/BoxTitulo';
import { Footer } from '../../../Components/Footer';
import joaquim from '../../../Components/Img/joaquim1.png';
import imgComercial from '../../../Components/Img/comercial1.png';
import imgResidencial from '../../../Components/Img/residencial1.png';
import { CardImgServico } from '../../../Components/CardImgServico';



export const ServicosResidencial: React.FC = () => {
  return (
    <Container>
      <BoxTitulo titulo="Residencial servicos" traco='______'/>

       <ContainerImg>
      
       <Link to="/instaAgro"><CardImgServico  imagem={joaquim} /></Link>
      <Link to="/instaComercial"><CardImgServico   imagem={imgComercial} /></Link>
      <Link to="/instaResidencial"><CardImgServico  imagem={imgResidencial} /></Link>
     
     
      </ContainerImg>
           


           
    
         <Footer></Footer>

     
     
     
    </Container>
     );
    }
      