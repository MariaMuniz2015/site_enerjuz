
import React from 'react';
import { Container,Titulo,Box, Traco} from './style';


interface Props {
  titulo: string;
  traco: string;
}

export const BoxTitulo: React.FC <Props>= (props) => {
  return (
      <Container>
        <Box>
        
  <Titulo>{props.titulo}</Titulo>
  <Traco>{props.traco}</Traco>
  </Box>
      </Container>
  );}