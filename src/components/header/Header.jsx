import React from 'react';

import { useNavigate } from 'react-router-dom';

import s from './Header.module.scss'
import logowhite from './../../images/logoWhite.png'

function Header() {
    
    const navigate = useNavigate()
    const [viewCategoryMenu, setViewCategoryMenu] = React.useState(false)
    const [viewMobileMenu, setViewMobileMenu] = React.useState(false)
    const [windowSize, setWindowSize] = React.useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    const onClose = () => {
        setViewCategoryMenu(false);
    };
    

    React.useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {window.removeEventListener('resize', handleWindowResize);};
    });

    function Category ({ opened, onClose }) {

        if (!opened) return null;
    
        return (
            <>
            <div className={s.category}>  
                <div onClick={() => {
                    navigate('/menu')
                    setViewCategoryMenu(false) 
                }}>Всё меню</div>
                <div onClick={() => {
                    navigate('/menu')
                    setViewCategoryMenu(false) 
                }}>Закуски и салаты</div>
                <div onClick={() => {
                    navigate('/menu')
                    setViewCategoryMenu(false) 
                }}>Горячее</div>
                <div onClick={() => {
                    navigate('/menu')
                    setViewCategoryMenu(false) 
                }}>Супы</div>
                <div onClick={() => {
                    navigate('/menu')
                    setViewCategoryMenu(false) 
                }}>Хлеб</div>
                <div onClick={() => {
                    navigate('/menu')
                    setViewCategoryMenu(false) 
                }}>Витрина</div>
                <div onClick={() => {
                    navigate('/menu')
                    setViewCategoryMenu(false) 
                }}>Дессерты</div>
                <div onClick={() => {
                    navigate('/menu')
                    setViewCategoryMenu(false) 
                }}>Карта бара</div>
                <div onClick={() => {
                    navigate('/menu')
                    setViewCategoryMenu(false) 
                }}>Детское меню</div>
            </div>
            <div className={s.bg} onClick={onClose}></div>
            </>
        )
    }

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
                        setViewMobileMenu(false)
                        setViewCategoryMenu((v) => !v) 
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
            <>  
                <section className={s.header_place}></section>
                <header className={s.header} >
                    <div className={s.main} onClick={() => {
                        navigate('/')
                        setViewMobileMenu(false)
                        setViewCategoryMenu(false)
                    }  
                       }><img src={logowhite} alt="Логотип" />Главная</div>
                    <div className={s.menu} onClick={() => {
                            setViewMobileMenu(false)
                            setViewCategoryMenu((v) => !v)  
                        }  
                        }>Меню</div>
                    <div className={s.deliver} onClick={() => {
                        navigate('/delivery')
                        setViewMobileMenu(false)
                        setViewCategoryMenu(false)
                    }  
                        }>Доставка и оплата</div>
                    <div className={s.news} onClick={() => {
                        navigate('/news')
                        setViewMobileMenu(false)
                        setViewCategoryMenu(false)
                    }  
                        }>Новости</div>
                    <div className={s.contact} onClick={() => {
                        navigate('/contact')
                        setViewMobileMenu(false)
                        setViewCategoryMenu(false)
                    }  
                        }>Контакты</div>
                    <div className={s.about} onClick={() => {
                        navigate('/about')
                        setViewMobileMenu(false)
                        setViewCategoryMenu(false)
                    }  
                        }>О ресторане</div>
                </header>

                <Category opened={viewCategoryMenu} onClose={onClose} />
            </>
        )
    } else if (windowSize[0] < 600) {
        return (
            <>
            <header className={s.mobile}>
                <div className={s.mobile_logo} onClick={() => navigate('/')}>
                    <img src={logowhite} alt="Логотип" />
                </div>
                <div className={s.mobile_text} onClick={() => navigate('/')}><span>СУПBERRY</span></div>
                <div className={s.mobile_menu} onClick={() => {setViewMobileMenu(!viewMobileMenu)}}><div></div><div></div><div></div></div>
                {viewMobileMenu && mobile_menu()}
                <Category opened={viewCategoryMenu} onClose={onClose} />
            </header>
            <section className={s.placeholder}></section>
            </>
        )
    }

}

export default Header