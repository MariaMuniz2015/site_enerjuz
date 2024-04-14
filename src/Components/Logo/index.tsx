
import { Container, Imagem } from "./style";


interface Props {
  imagem: string;
}

export const Logo: React.FC<Props> = (props) => {
  return (
  <Container>
    <Imagem src={props.imagem}alt="logo"/>
  

    </Container>
  );
  }