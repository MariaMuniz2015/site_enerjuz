import React from 'react';

import * as S from "./style";


interface Props {
  imagem: string;

 
}

export const CardFucionamento: React.FC<Props> = (props) => {
  return (<S.Container>
 
    <S.Imagem src={props.imagem} />
  
  </S.Container>
  );
}