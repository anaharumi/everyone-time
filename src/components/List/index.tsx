
import style from './List.module.scss'
import Item from './Item'
import { IKids } from '../../types/kids';

interface Props {
    kids: IKids[],
    selecionaKids: (kidsSelecionada: IKids) => void
}

function List ({kids, selecionaKids}: Props ) {
    return(
        <aside className={style.listaRodadas}>
            <h2>Rodadas do dia</h2>
            <ul>
                {kids.map(item=>(
                    <Item 
                        selecionaKids = {selecionaKids}
                        key={item.id}
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