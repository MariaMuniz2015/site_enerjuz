

import{Container,Desc, Imagem} from "./style";
interface Props {
  imagem: string;
 descricao:string;
 corDeFundo?: 'white' | 'Lavender' ;
}



export const CardUsina:React.FC<Props> = (props) => {

  return (
  <Container corDeFundo={props.corDeFundo ?? 'Lavender'}>
 
     <Imagem src={props.imagem} />
    <Desc>{props.descricao}</Desc>
  

  </Container>
  );
}