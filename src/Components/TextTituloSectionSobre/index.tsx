import React from 'react';

import {Container, Box, TextoI, TextoF, Traco, BoxTraco }from "./style";


interface Props {

  textoI: string;
  textoF: string;
  traco: string;
}

export const TextTituloSectionSobre: React.FC<Props> = (props) => {
  return (
  <Container>
    <Box>
    <TextoI>{props.textoI}</TextoI>
    <TextoF>{props.textoF}</TextoF>
    </Box>
    <BoxTraco>
    <Traco>{props.traco}</Traco>
    </BoxTraco>
  </Container>
  );
}