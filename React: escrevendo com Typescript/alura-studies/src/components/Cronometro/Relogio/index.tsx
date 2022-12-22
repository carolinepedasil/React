import style from './Relogio.module.scss';

interface Props {
    tempo: number | undefined
}

export default function Relogio({ tempo = 0 }: Props) {

    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0');
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');

    return (
        <>
            <span className={style.relogioNumero}>{minutoDezena}0</span>
            <span className={style.relogioNumero}>{minutoUnidade}0</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundoDezena}0</span>
            <span className={style.relogioNumero}>{segundoUnidade}0</span>
        </>
    )
}