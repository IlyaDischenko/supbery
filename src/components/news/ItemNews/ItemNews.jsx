import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setNewsPageData } from './../../../redux/appState/AppSlice'

import s from './ItemNews.module.scss'
// import photo from './../../../images/mainPhoto.jpg'

function ItemNews(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onClickSetData = () => {
        console.log(props.title)
        dispatch(setNewsPageData(
            {
                title: props.title,
                text: props.text,
                photo: props.img
            }
        ))
        navigate("/news/item")
    }

    return (
        <section className={s.wrapper} onClick={() => onClickSetData()}>
            <div className={s.wrapper_opasity} />
            <h1 className={s.title}>{props.title}</h1>
            {/* <img src={photo} alt="photo" /> */}
        </section>
    )
}

export default ItemNews