import React from 'react';
import style from './Nav.module.scss'
import adress from  '../../image/nav/adress.png'
import phone from '../../image/nav/phone.png'
import search from '../../image/nav/search.png'
const Nav = () => {
    return (
        <div className={style.container}>
            <div className={style.nav}>
                <div className={style.left}>
                    <div className={style.left__contact}>
                        <div className={style.contact__adress}>
                            <img src={adress} alt=""/>
                            <span>Адреса и <br/> режим работы</span>
                            {/*Адреса и<br>режим работы</br>*/}
                        </div>
                        <div className="contact__phone">
                            <img src={phone} alt=""/>
                            <span>+7(4832) 12-34-56</span>
                            <p>Заказать обратный звонок</p>
                        </div>
                    </div>
                    <div className={style.left__catalog}>
                        <input type="text" placeholder='Поиск по каталогу'/>
                        <img src={search} alt=""/>
                    </div>
                </div>
                <div className="right">
                    <div className="right__goods"></div>
                    <div className="right__cabinet"></div>
                </div>
            </div>
        </div>
    );
};

export default Nav;