import style from './Clock.module.scss'

interface Props{
    tempo:number | undefined
}

export default function Clock({tempo = 0}:Props){
    const minutos = Math.floor(tempo/60);
    const segundos = tempo % 60;
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2,'0');
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2,'0');

    return(
        <>
            <span className={style.clockNumero}>{minutoDezena}</span>
            <span className={style.clockNumero}>{minutoUnidade}</span>
            <span className={style.clockDivisao}>:</span>
            <span className={style.clockNumero}>{segundoDezena}</span>
            <span className={style.clockNumero}>{segundoUnidade}</span>
        </>
    )
}