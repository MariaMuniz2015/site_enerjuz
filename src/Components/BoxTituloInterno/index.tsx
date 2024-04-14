
import React from 'react';
import { Container,Titulo,Box, Icone} from './style';
import { BtnVoltar } from '../BtnVoltar';


interface Props {
  titulo: string;

}

export const BoxTituloInterno: React.FC <Props>= (props) => {
  return (
      <Container>
        <Box>
        <Icone><a href="/instalacoes"><BtnVoltar /></a></Icone>  
       <Titulo>{props.titulo}</Titulo>

  </Box>
      </Container>
  );}