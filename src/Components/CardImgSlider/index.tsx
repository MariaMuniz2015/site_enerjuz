import React from 'react';

import {Container, Imagem}from "./style";


interface Props {
  imagem: string;
 
}

export const CardImgSlider: React.FC<Props> = (props) => {
  return (<Container>
    <Imagem src={props.imagem} />
  </Container>
  );
}