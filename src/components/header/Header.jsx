import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './Header.module.scss'

function Header() {
    const navigate = useNavigate()
    const [viewMobileMenu, setViewMobileMenu] = React.useState(false)
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

    const mobile_menu = () => {
        return (
            <div className={s.mobile_wrapper} onClick={() => {setViewMobileMenu(false)}}>
                <div className={s.mobile_view_section} onClick={e => e.stopPropagation()}>
                    <div className={s.mobile_main} onClick={() => {
                        navigate('/')
                        setViewMobileMenu(false)
                    }  
                    }>Главная</div>
                    <div className={s.mobile_menuu} onClick={() => {
                        navigate('/menu')
                        setViewMobileMenu(false)
                    }  
                    }>Меню</div>
                    <div className={s.mobile_deliver} onClick={() => {
                        navigate('/delivery')
                        setViewMobileMenu(false)
                    }  
                    }>Доставка и оплата</div>
                    <div className={s.mobile_news} onClick={() => {
                        navigate('/news')
                        setViewMobileMenu(false)
                    }  
                    }>Новости</div>
                    <div className={s.mobile_contact} onClick={() => {
                        navigate('/contact')
                        setViewMobileMenu(false)
                    }  
                    }>Контакты</div>
                    <div className={s.mobile_about} onClick={() => {
                        navigate('/about')
                        setViewMobileMenu(false)
                    }  
                    }>О ресторане</div>
                </div>
            </div>
        )
    }   
    
    
    if (windowSize[0] >= 600) {
        return (
            <header className={s.header}>
                <div className={s.main}>Главная</div>
                <div className={s.menu}>Меню</div>
                <div className={s.deliver}>Доставка и оплата</div>
                <div className={s.news}>Новости</div>
                <div className={s.contact}>Контакты</div>
                <div className={s.about}>О ресторане</div>
            </header>
        )
    } else if (windowSize[0] < 600) {
        return (
            <header className={s.mobile}>
                <div>{viewMobileMenu}</div>
                <div className={s.mobile_menu} onClick={() => {setViewMobileMenu(!viewMobileMenu)}}><div></div><div></div><div></div></div>
                {viewMobileMenu && mobile_menu()}
            </header>
        )
    }

}

export default Header