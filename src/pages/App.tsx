// eslint-disable-next-line 
import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss'
import Timer from '../components/Timer';
import { IKids } from '../types/kids';




function App() {
  const [kids, setKids] = useState<IKids[]>([]);
  const [selecionado, setSelecionado] = useState<IKids>();

  function selecionaKids (kidsSelecionada: IKids){
    setSelecionado(kidsSelecionada);
    setKids(kidsAnteriores => kidsAnteriores.map(kids => ({
      ...kids,
      selecionado: kids.id === kidsSelecionada.id ? true : false
    })));
  }

  function finalizarRodada(){
    if(selecionado){
      setSelecionado(undefined);
      setKids(kidsAnteriores => kidsAnteriores.map(kids => {
        if(kids.id === selecionado.id){
          return{
            ...kids,
            selecionado:false,
            completado: true
          }
        }
        return kids;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setKids={setKids} />
      <List 
        kids={kids} 
        selecionaKids={selecionaKids}
      />
      <Timer 
        selecionado={selecionado}
        finalizarRodada={finalizarRodada} 
      />
    </div>
  );
}

export default App;
