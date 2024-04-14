

import { TextTituloSectionSobre} from "../TextTituloSectionSobre"

import { Container, TextoSomos, Imagem, ColumTexto, ColumnPage,Texto} from './style';
import equipeAzul from"../../Components/Img/equipeAzul.png";
import { CardImgSomos } from '../CardImgSomos';




export const SectionQuemSomos: React.FC = () => {
  return (
  <Container>
    <ColumnPage>
<ColumTexto>
    <TextoSomos>
    <TextTituloSectionSobre textoI='SOBRE' textoF='NÓS' traco='____'></TextTituloSectionSobre>  
      <Texto>Desde 2021 a Enerjuz oferece soluções provenientes da energia solar fotovoltaica, 
        transformando seus gastos em economia e promovendo sustentabilidade para o meio ambiente.
         Com sede em Carmo do Cajuru, MG, temos uma equipe capacitada para dimensionar, projetar,
          homologar, instalar e comissionar sua usina solar fotovoltaica.Os sistemas projetados
           pela Enerjuz seguem os padrões exigidos pelas normas técnicas do setor, visando não só a economia do 
        seu investimento, mas também sua segurança e durabilidade do empreendimento.
</Texto>
       </TextoSomos>
       </ColumTexto>
  <Imagem>
<CardImgSomos imagem={equipeAzul}/>
</Imagem>
</ColumnPage>
</Container>


  );
}