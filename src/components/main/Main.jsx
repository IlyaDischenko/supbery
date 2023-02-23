

import s from './Main.module.scss'


function Main(){

    return (
        <main className={s.wrapper}>
            <div className={s.wrapper_opasity}></div>
            <div className={s.content}>
                <span className={s.maintitle}>СУПBERRY</span>
                <span className={s.kitchen}>Авторская кухня для всей семьи!</span>
                <span className={s.deliver}>Служба доставки и бронирование столов: +7(920)114-52-64</span>
            </div>
        </main>
    )
}

export default Main