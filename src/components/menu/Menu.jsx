import React from "react"
import { useSelector, useDispatch } from "react-redux"

import s from './Menu.module.scss'

function Item({title, gram, price}) {
    return (
        <section className={s.wrapper}>
            <div className={s.img}></div>
            <div className={s.bottom}>
                <div className={s.title}>{title}</div>
                <div className={s.gram_and_price}>
                    <div>{gram}г</div>
                    <div>{price}₽</div>
                </div>
            </div>
        </section>
    )
}

function Menu() {
    const menu = useSelector((state) => state.menu.menu.salad)

    const [windowSize, setWindowSize] = React.useState([
        window.innerWidth,
        window.innerHeight,
    ]);
    
    React.useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {window.removeEventListener('resize', handleWindowResize);};
    });

    return (
        <main className={s.main}>
            <h1>Салаты и закуски</h1>
            <div className={s.salad_content}>
                {menu.map((item) => <Item key={item.id} {...item} />) }
            </div>
        </main>
    )
}

export default Menu