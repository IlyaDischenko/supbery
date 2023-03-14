import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import s from './Header.module.scss'

import logo from './../../images/logoBlack.png'



function Header() {
    const navigate = useNavigate()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleWindowResize = () => {
            setWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {window.removeEventListener('resize', handleWindowResize);};
    })

    function Category({isOpen}) {
    
        if (!isOpen) return "";
    
        if (isOpen) {
            return (
                <section className={s.wrapper_category}
                    onMouseEnter={() => setIsMenuOpen(true)}
                    onMouseLeave={() => setIsMenuOpen(false)}
                    onClick={() => navigate('/menu')}
                >
                    <div className={s.cetegory}>
                        <p>Всё меню</p>
                        <p>Закуски и салаты</p>
                        <p>Горячее</p>
                        <p>Супы</p>
                        <p>Хлеб</p>
                        <p>Витрина</p>
                        <p>Дессерты</p>
                        <p>Карта бара</p>
                        <p>Детское меню</p>
                    </div>
                </section>
            )
        }
    
    }

    function DRYnav(nav) {
        navigate(nav)
        setIsMobileMenuOpen(false)
        setIsMenuOpen(false)
    }


    function MobileMenu({isMobileOpen}) {
        if (!isMobileOpen) return "";

        return (
            <>
            <section className={s.mobile_category}>
                <div onClick={() => DRYnav('/')}>Главная</div>
                <div onClick={() => DRYnav('/about')}>О ресторане</div>
                <div onClick={() => DRYnav('/menu')}>Меню</div>
                <div onClick={() => DRYnav('/news')}>Новости</div>
                <div onClick={() => DRYnav('/deliver')}>Доставка</div>
                <div onClick={() => DRYnav('/contact')}>Контакты</div>
            </section>
            <div className={s.close_category} onClick={() => setIsMobileMenuOpen(false)}><div></div><div></div></div>
            </>
        )
    }


    if (width > 999) {
    return (
            <>
            <header>
                <div className={s.wrapper}>
                    <div className={s.logo} onClick={() => navigate('/')}>
                        <img src={logo} alt="Логотип"  />
                    </div>

                    <div className={s.links}>
                        <div onClick={() => navigate('/')}>Главная</div>
                        <div onClick={() => navigate('/about')}>О ресторане</div>
                        <div 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        onMouseEnter={() => setIsMenuOpen(true)}
                        onMouseLeave={() => setIsMenuOpen(false)}
                        >Меню</div>
                        <div onClick={() => navigate('/news')}>Новости</div>
                        <div onClick={() => navigate('/deliver')}>Доставка</div>
                        <div onClick={() => navigate('/contact')}>Контакты</div>
                    </div>

                    <div className={s.footer_info}>
                        <span>г. Рыбинск, ул. Стоялая, д. 16</span>
                        <span>+7 920 114-52-64</span>
                    </div>
                </div>

            </header>
            <Category isOpen={isMenuOpen}/> 
            </>
        )
    } else if (width <= 998) {
        return (
            <>
                <div className={s.mobile_placeholder}></div>
                <MobileMenu isMobileOpen={isMobileMenuOpen} />
                <header className={s.mobile_header}>
                    <div className={s.mobile_logo_div} onClick={() => navigate('/')}>
                        <img src={logo} alt="Логотип" className={s.mobile_logo_img}/>
                    </div>
                    <div className={s.mobile_menu} onClick={() => setIsMobileMenuOpen(true)}><div></div><div></div><div></div></div>
                </header>
                
            </>
        )
    }
}


export default Header