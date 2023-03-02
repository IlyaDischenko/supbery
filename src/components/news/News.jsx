import React from 'react';

import s from './News.module.scss'
import ItemNews from './ItemNews/ItemNews'

function News() {

    React.useEffect(() => {
        window.scrollTo(0, 0);
    })

    const data = [
        {
            id: 1,
            title: "Новый зал",
            text: "Тут должен быть какой то текст, но я не могу его придумать. Потом надо будет добавить что-то.",
            img: "",
        },
        {
            id: 2,
            title: "Обновлённое меню",
            text: "Тут должен быть какой то текст, но я не могу его придумать. Потом надо будет добавить что-то.",
            img: "",
        },
        {
            id: 3,
            title: "Звезда Michlen",
            text: "Тут должен быть какой то текст, но я не могу его придумать. Потом надо будет добавить что-то.",
            img: "",
        },
        {
            id: 4,
            title: "Сезонный коктейль",
            text: "Тут должен быть какой то текст, но я не могу его придумать. Потом надо будет добавить что-то.",
            img: "",
        },
        {
            id: 5,
            title: "Стань тайным гостем",
            text: "Тут должен быть какой то текст, но я не могу его придумать. Потом надо будет добавить что-то.",
            img: "./../../../images/mainPhoto.jpg",
        },
    ]

    return (
        <main className={s.main}>
            <h1>Новости</h1>
            <div className={s.news}>
                {data.map((item) => <ItemNews key={item.id} {...item} />)}
            </div>
        </main>
    )
}

export default News