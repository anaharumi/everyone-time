import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";
import { IKids } from "../../types/kids";
import Button from "../Button";
import Clock from "./Clock";
import style from './Timer.module.scss';

interface Props {
    selecionado: IKids | undefined
    finalizarRodada: () => void
}

export default function Timer ({selecionado, finalizarRodada}: Props){
    const [tempo, setTempo] = useState<number>();

    useEffect(() =>{
        if(selecionado?.tempo){
          setTempo(tempoParaSegundos(selecionado?.tempo));
        }
    },[selecionado])

    function regressiva(contador: number = 0) {
        setTimeout(() => {
          if(contador > 0) {
            setTempo(contador - 1);
            return regressiva(contador - 1);
          }
          finalizarRodada();
        }, 1000);
      }

    return(
        <div className={style.timer}>
            <p className={style.titulo}>Escolha o nome de quem é a vez e inicie o cronômetro</p>
            <div className={style.clockWrapper}>
                <Clock tempo={tempo} />
            </div>
            <Button onClick={() => regressiva(tempo)}>
                Começar
            </Button>
        </div>
    )
}

