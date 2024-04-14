import React from 'react';

import {Container, Box, TextoI, TextoF, Traco }from "./style";


interface Props {

  textoI: string;
  textoF: string;
  traco: string;
}

export const TextTituloSection: React.FC<Props> = (props) => {
  return (<Container>
    <Box>
    <TextoI>{props.textoI}</TextoI>
    <TextoF>{props.textoF}</TextoF>
    </Box>
    <Traco>{props.traco}</Traco>
  </Container>
  );
}