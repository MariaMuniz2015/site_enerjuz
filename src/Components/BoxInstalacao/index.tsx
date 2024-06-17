
import {Container, Texto,TextoP, } from './style';


interface Props {
  texto: string;


}

export const BoxInstalacao: React.FC <Props>= (props) => {
  return(
    <Container>
       <Texto>  
  <TextoP>{props.texto}</TextoP></Texto>

    </Container>
  );
}