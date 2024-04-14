
import {Container,Box, Texto,Titulo, TextoP, Icone1,Icone2,Icone3, BoxIcone,} from './style';


interface Props {
  texto: string;
  titulo:string;
  icone1:string;
  icone2:string;
  icone3:string;
  icone4:string;
}

export const BoxInstalacao: React.FC <Props>= (props) => {
  return(
    <Container>
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