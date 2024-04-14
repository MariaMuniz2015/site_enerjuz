
import React from 'react';


import { Paragrafo, Container, ContainerPage,Card,CardContact} from './style';
import CardContato from '../../../Components/CardContato';
import visao from '../../../Components/Img/visao.png'
import missao from '../../../Components/Img/meta.png'
import equipe from '../../../Components/Img/imgequipe.png';
import painelSolar from '../../../Components/Img/painelSolar.png';

import { BoxTitulo } from '../../../Components/BoxTitulo';
import { CardImgG } from '../../../Components/CardImgG';
import { Footer } from '../../../Components/Footer';
import { ButtonCustomer } from '../../../Components/ButtonCustomer';
import { CardVisao } from '../../../Components/CardVisao';




export const Empresa: React.FC = () => {
  return (
    <Container>
           <BoxTitulo titulo="Somos a ENERJUZ" traco='________'/>
           <ContainerPage>

           <CardContact>
           <CardImgG  imagem={equipe} />
           <CardContato/>

    </CardContact>
    
     <Paragrafo>Desde 2021 a Enerjuz oferece soluções provenientes da energia solar fotovoltaica,
transformando seus gastos em economia e promovendo sustentabilidade para o meio ambiente.
Com sede em Carmo do Cajuru, MG, temos uma equipe capacitada para dimensionar, projetar,
homologar, instalar e comissionar sua usina solar fotovoltaica.
Os sistemas projetados pela Enerjuz seguem os padrões exigidos pelas normas técnicas do setor,
visando não só a economia do seu investimento, mas também sua segurança e durabilidade do
empreendimento.
      </Paragrafo>
   
   
   

    </ContainerPage>
   
    <Card>
    <CardVisao titulo='Visão' descricao='Buscamos ser líderes na entrega de soluções energéticas inovadoras
,eficientes,lucrativas e de muita qualidade.
Nosso compromisso vai desde proporcionar economia financeira aos nossos clientes
quanto a estabelecer padrões elevados de excelência no atendimento, cultivando
relacionamentos duradouros e impulsionando o desenvolvimento sustentável
nos locais em que atuamos.'imagem={visao} />
   
    <CardVisao titulo='Missão' descricao='Fornecer soluções com energia solar fotovoltaica que além de contribuir com a
sustentabilidade do planeta também garantam economias consistentes e duradouras, transformando cada investimento em um sólido retorno financeiro'imagem={missao} />
    <CardVisao titulo='Valores' descricao='Ética, transparência, qualidade de serviço, sustentabilidade e inovação'imagem={painelSolar} />
    
    </Card>
    <ButtonCustomer/>
    <Footer/>
    </Container>
  );
}