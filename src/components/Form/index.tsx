import React, { useState } from "react";
import Button from "../Button";
import style from  './Form.module.scss'
import { IKids } from "../../types/kids";
import {v4 as uuidv4} from 'uuid';

interface Props {
    setKids: React.Dispatch<React.SetStateAction<IKids[]>>
}

function Form ({setKids}: Props){
    const [nome,setNome] = useState("")
    const [tempo,setTempo] = useState("00:00")
    function adicionarNome(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        setKids(kidsAntigas => 
            [
                ...kidsAntigas,
                {
                    nome,
                    tempo,
                    selecionado:false,
                    completado:false,
                    id:uuidv4()
                }
            ]
            );
            setNome("")
            setTempo("00:00")
    }
    return(
        <form 
            className={style.novaRodada}   
            onSubmit={adicionarNome}
        >
            <div className={style.inputContainer}>
                <label htmlFor="nome">
                    Adicione o nome
                </label>
                <input 
                    type="text"
                    name="nome"
                    value={nome}
                    onChange={evento => setNome(evento.target.value)}
                    id="nome"
                    placeholder="Quem vai jogar/assistir?"
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input 
                    type="time"
                    step={1}
                    name="tempo"
                    value={tempo}
                    onChange={evento => setTempo(evento.target.value)}
                    id="tempo"
                    min="00:00:00"
                    max="01:00:00"
                    required
                    />
            </div>
            <Button type="submit">
                Adicionar
            </Button>             
        </form>
    )
}

export default Form;