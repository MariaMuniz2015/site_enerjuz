
import {Container,Box, Texto, TextoP,Titulo, Imagem, Icone1,Icone2,Icone3, BoxIcone,} from './style';

interface Props {
  texto: string;
  imagem: string;
  titulo:string;
  icone1:string;
  icone2:string;
  icone3:string;
  icone4:string;
}

export const BoxPage: React.FC <Props>= (props) => {
  return (
      <Container>
     <Imagem src={props.imagem} />
   <Texto>  
  <TextoP>{props.texto}</TextoP></Texto>
<Box>
  <BoxIcone>
  <Icone1 src={props.icone1}/>
  <Titulo>{props.titulo}</Titulo>
  </BoxIcone>
  <BoxIcone>
  <Icone2 src={props.icone2}/>
  <Titulo>{props.titulo}</Titulo>
  </BoxIcone>
  <BoxIcone>
  <Icone3 src={props.icone3}/>
  <Titulo>{props.titulo}</Titulo>
  </BoxIcone>
  <BoxIcone>
  <Icone3 src={props.icone4}/>
  <Titulo>{props.titulo}</Titulo>
  </BoxIcone>
  </Box>
      </Container>
  );
}