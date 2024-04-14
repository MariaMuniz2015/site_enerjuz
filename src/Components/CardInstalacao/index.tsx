
import React from 'react';

import {Container,Imagem,Titulo} from "./style";


interface Props {
  imagem: string;
  titulo: string;
 
}

export const CardInstalacao: React.FC<Props> = (props) => {
  return (<Container>

    <Imagem src={props.imagem} />
    <Titulo>{props.titulo}</Titulo>
  
  </Container>
  );
}