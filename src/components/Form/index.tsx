import React from "react";
import Button from "../Button";
import style from  './Form.module.scss'

class Form extends React.Component {
    render(){
        return(
            <form className={style.novaRodada}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione o nome
                    </label>
                    <input 
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="Quem vai jogar/assistir?"
                        //required
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
                        id="tempo"
                        min="00:00:00"
                        max="01:00:00"
                        //required
                        />
                </div>
                <Button>
                    Adicionar
                </Button>             
            </form>
        )
    }
}

export default Form;