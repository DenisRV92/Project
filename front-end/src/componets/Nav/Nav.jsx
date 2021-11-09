import React from 'react';
import style from './Nav.module.scss'
import adress from '../../image/nav/adress.png'
import phone from '../../image/nav/phone.png'
import search from '../../image/nav/search.png'
import cart from '../../image/nav/cart.png'
import icon1 from '../../image/nav/icon1.png'
import icon2 from '../../image/nav/icon2.png'
import user from '../../image/nav/user.png'
import Menu from "../Menu/Menu";
import * as axios from "axios";

const Nav = () => {
    const catalog=()=>{
        axios.post('http://project/back-end/index.php',{
            body:{data:55}
        })
    }
    return (
        <>
            <div className={style.container}>
                <div className={style.nav}>
                    <div className={style.left}>
                        <div className={style.left__contact}>
                            <div className={style.contact__adress}>
                                <img src={adress} alt=""/>
                                <span>Адреса и <br/> режим работы</span>
                            </div>
                            <div className={style.conact__phone}>
                                <img src={phone} alt=""/>
                                <span> +7 (4832) <strong>12-34-56</strong> </span>
                                <p>Заказать обратный звонок</p>
                            </div>
                        </div>
                        <div className={style.left__catalog}>
                            <input onChange={catalog} type="text" placeholder='Поиск по каталогу'/>
                            <img src={search} alt=""/>
                        </div>
                    </div>
                    <div className={style.right}>
                        <div className={style.right__goods}>
                            <img src={cart} alt=""/>
                            <span>Товаров нет</span>
                        </div>
                        <div className={style.right__cabinet}>
                            <img src={icon1} alt=""/>
                            <img src={icon2} alt=""/>

                            <div className={style.cabinet__user}>
                                <img src={user} alt=""/>
                                <span>Войти</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Menu/>
        </>
    );
};

export default Nav;