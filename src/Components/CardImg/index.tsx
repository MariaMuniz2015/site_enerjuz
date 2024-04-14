import React from 'react';

import * as S from "./style";


interface Props {
  imagem: string;
  titulo: string;
 
}

export const CardImg: React.FC<Props> = (props) => {
  return (<S.Container>

    <S.Imagem src={props.imagem} />
    <S.Titulo>{props.titulo}</S.Titulo>
  
  </S.Container>
  );
}