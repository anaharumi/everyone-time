import style from '../List.module.scss';


function Item ({nome,tempo} :{nome: string, tempo: string}){
    return(
        <li 
            className={style.item}
        >
            <h3>{nome}</h3>
            <span>{tempo}</span>
        </li>
    )
}

export default Item;