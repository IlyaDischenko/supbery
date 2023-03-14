
import s from './Menu.module.scss'

import menu from './../../images/menu.jpg'
import drink1 from './../../images/drink1.jpg'
import drink2 from './../../images/drink2.jpg'
import kids from './../../images/kids.jpg'


function Menu() {




    return (
        <main className={s.main}>
            <section className={s.wrapper}>
                <h1>Основное меню</h1>

                <img src={menu} alt="Основное меню" />
            </section>

            <section className={s.wrapper}>
                <h1>Напитки</h1>

                <img src={drink1} alt="Напитки" />
                <img src={drink2} alt="Напитки" />
            </section>

            <section className={s.wrapper}>
                <h1>Детское меню</h1>

                <img src={kids} alt="Детское меню" />
            </section>
        </main>
    )
}

export default Menu