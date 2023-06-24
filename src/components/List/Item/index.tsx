import { IKids } from '../../../types/kids';
import style from './Item.module.scss';


interface Props extends IKids {
    selecionaKids: (kidsSelecionada: IKids) => void
}

function Item (
    {
        nome,
        tempo, 
        selecionado, 
        completado, 
        id, 
        selecionaKids
    } :Props){
    return(
        <li 
            className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`} 
            onClick={() => !completado && selecionaKids(
                {
                nome,
                tempo,
                selecionado,
                completado,
                id
            })}
        >
            <h3>{nome}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido} aria-label='Partida terminada'></span>}
        </li>
    )
}

export default Item;