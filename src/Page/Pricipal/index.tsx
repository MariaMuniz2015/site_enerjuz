



import React from 'react';

import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import { Home } from "./Home";
import { Empresa } from './Empresa';
import { Instalacoes } from './Instalacoes';
import { Servico} from './Servico';
import { Usina} from './Usina';
import { Contato} from './Contato';

import { Agro} from './Agro';
import { Comercial} from './Comercial';
import { Residencial} from './Residencial';
import { InstaComercial} from './InstaComercial';
import { InstaAgro} from './InstaAgro';
import { InstaResidencial} from './InstaResidencial';
import { InstaUsina} from './InstaUsina';
import { Obrigada} from './Obrigada';
import  Header1  from '../../Components/Header1';


export const Principal: React.FC = () => {

  return (

    <BrowserRouter>
      <Header1 />
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/empresa' element={<Empresa />} />
        <Route path='/servico' element={<Servico />} />
        <Route path='/instalacoes' element={<Instalacoes />} />
        <Route path='/usina' element={<Usina/>} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/agro' element={<Agro/>} />
        <Route path='/comercial' element={<Comercial/>} />
        <Route path='/residencial' element={<Residencial/>} />
        <Route path='/instaComercial' element={<InstaComercial/>} />
        <Route path='/instaAgro' element={<InstaAgro/>} />
        <Route path='/instaResidencial' element={<InstaResidencial/>} />
        <Route path='/instaUsina' element={<InstaUsina/>} />
        <Route path='/obrigada' element={<Obrigada/>} />
      </Routes>
    </BrowserRouter>


  );
}