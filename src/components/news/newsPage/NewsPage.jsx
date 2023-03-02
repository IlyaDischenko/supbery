import React from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import s from './NewsPage.module.scss'

function NewsPage() {
    const app = useSelector((state) => state.app)
    const navigate = useNavigate()

    React.useEffect(() => {
        if (app.newsPage.title.length === 0) {
            navigate("/news")
        }
    })

    React.useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <main className={s.wrapper}>
            <h1>{app.newsPage.title}</h1>
            <h3>{app.newsPage.text}</h3>
        </main>
    )
}

export default NewsPage