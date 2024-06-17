
import {Container,Imagem, TextoP,Texto} from './style';

interface Props {
  texto: string;
  imagem: string;


}

export const BoxPage: React.FC <Props>= (props) => {
  return (
      <Container>
     <Imagem src={props.imagem} />
   <Texto>  
  <TextoP>{props.texto}</TextoP>
  </Texto>

      </Container>
  );
}