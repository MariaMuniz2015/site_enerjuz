import {Container,Image, Texto}from './style';
interface Props {
  texto: string;
  imagem: string;
}

export const ImgAluguelP: React.FC <Props>= (props) => {
  return (
      <Container>
     <Image src={props.imagem} />
   <Texto>{props.texto}</Texto>

      </Container>
  );
}