import React, { useState } from "react";
import style from './List.module.scss'
import Item from './Item'



function List () {
    const [kids, setKids] = useState([{
        nome: 'Amy',
        tempo: '01:00:00'
    },
    {
        nome: 'Johnny',
        tempo: '01:00:00'
    },
    {
        nome: 'Pausa',
        tempo: '00:30:00'
    }]);
    return(
        <aside className={style.listaRodadas}>
            <h2 onClick={()=>{
                setKids ([...kids, {nome: "Harumi", tempo: "01:00:00"}]);
            }}>Rodadas do dia</h2>
            <ul>
                {kids.map((item, index)=>(
                    <Item 
                        key={index}
                    //modo1
                    //nome={item.nome}  
                    //tempo={item.tempo}
                    //modo2
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;