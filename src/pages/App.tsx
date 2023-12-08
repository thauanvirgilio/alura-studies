import React from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './style.module.scss';
import Cronometro from '../components/Cronometro';

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Cronometro />
      <Lista />
    </div>
  );
}

export default App;
