import style from './Clock.module.scss'

export default function Clock(){
    return(
        <>
            <span className={style.clockNumero}>0</span>
            <span className={style.clockNumero}>0</span>
            <span className={style.clockDivisao}>:</span>
            <span className={style.clockNumero}>0</span>
            <span className={style.clockNumero}>0</span>
        </>
    )
}