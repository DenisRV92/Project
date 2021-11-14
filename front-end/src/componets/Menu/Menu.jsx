import React, {useContext, useState} from 'react';
import style from './Menu.module.scss'
import call from '../../image/Menu/icon_расчёт.png'
import stock from '../../image/Menu/icon_акции.png'
import MenuItems from "./MenuItems/MenuItems";
import {Context} from "../Nav/Nav";
import CatalogList from "../CatalogList/CatalogList";
import icon from '../../image/mob_menu/icon.png'
import arrow from '../../image/mob_menu/arrow.png'
import arrow2 from '../../image/mob_menu/arrow2.png'
import brigade from '../../image/mob_menu/brigade.png'
import cal from '../../image/mob_menu/cal.png'
import user from '../../image/nav/user.png'
import stat from '../../image/mob_menu/stat.png'
import fav from '../../image/mob_menu/fav_icon.png'
import info from '../../image/header/company.png'
import price from '../../image/header/dollar.png'
import car from '../../image/mob_menu/car.png'
import arms from '../../image/header/arms.png'

const Menu = () => {
    const [state, setState, context, substr] = useContext(Context);

    const arrayList = [`РАСЧЕТ ОНЛАЙН`, 'КРОВЛЯ', 'ФАСАД', 'ЗАБОР',
        'ОКНА МАНСАРДНЫЕ', 'ЧЕРДАЧНЫЕ ЛЕСТНИЦЫ',
        'ВНУТРЕНЯЯ ОТДЕЛКА', 'ИНСТРУМЕНТ', 'АКЦИИ', 'МОНТАЖНЫЕ БРИГАДЫ']

    const [text, setText] = useState('');

    function click(event) {

        setState(true);
        setText(event.target.innerHTML);
        event.target.style.backgroundColor = 'white';

    }

    function focus(event) {
        setState(true)
        event.target.style.backgroundColor = 'white';
        event.target.style.color = '#565b61'
    }

    function mouseLeave(event) {
        setState(false)
        event.target.style.backgroundColor = '#565b61';
    }

    const ItemList = (props) => {
        if (props.v === 'РАСЧЕТ ОНЛАЙН') {
            return (
                <>
                    <li style={{background: '#e18c44'}}><img src={call} alt=""/>{props.v}</li>
                </>
            );
        } else if (props.v === 'АКЦИИ') {
            return (
                <>
                    <li><img src={stock} alt=""/>{props.v}</li>
                </>
            );
        } else {
            return (
                <>
                    <li onMouseEnter={mouseLeave}  onMouseOver={focus} onClick={click}>{props.v}</li>
                </>
            );
        }


    }

    let List = arrayList.map(value => <ItemList v={value}/>)

    const openList = () => {

        let img = document.querySelector('#img').src
        let el = document.querySelector('#list');
        el.style.display === 'block' ? el.style.display = 'none' : el.style.display = 'block';
        if (img === arrow) {
            document.querySelector('#img').src = arrow2;
        } else {
            document.querySelector('#img').src = arrow;
        }

    }
    return (
        <>
            <div className={style.menu}>
                <div className={style.container}>
                    <ul className={style.menu__list}>
                        {List}
                    </ul>

                </div>
                <div className={style.mob__container}>
                    <div>
                        <div onClick={openList} className={style.mob__menu}>
                            <img src={icon} alt=""/>
                            <span>КАТАЛОГ</span>
                            <img id='img' className={style.arrow} src={arrow} alt=""/>
                        </div>
                        <div id='list' className={style.mob__list}>
                            <ul className={style.list__menu}>
                                <li>Кровля</li>
                                <li>Фасад</li>
                                <li>Забор</li>
                                <li>Окнас мансардные</li>
                                <li>Чердачные лестницы</li>
                                <li>Внутрення отделка</li>
                                <li>Инструмент</li>
                            </ul>
                        </div>
                        <div className={style.mob__stock}>
                            <img src={stock} alt=""/>
                            <span>Акции</span>
                        </div>
                        <div className={style.mob__brigade}>
                            <img src={brigade} alt=""/>
                            <span>Монтажные бригады</span>
                        </div>
                        <div className={style.mob__cal}>
                            <img src={cal} alt=""/>
                            <span>Расчет онлайн</span>
                        </div>
                    </div>
                    <div className={style.mob__cabinet}>
                        <div>
                            <img src={user} alt=""/>
                            <span>Личный кабинет</span>
                        </div>
                        <div>
                            <img src={stat} alt=""/>
                            <span>Сравнить</span>
                        </div>
                        <div className={style.fav}>
                            <img src={fav} alt=""/>
                            <span>Избранное</span>
                        </div>
                    </div>
                    <div className={style.mob__info}>
                        <div className={style.info__info}>
                            <img src={info} alt=""/>
                            <span>О компании</span>
                            <img className={style.arrow} src={arrow} alt=""/>
                        </div>
                        <div>
                            <img src={price} alt=""/>
                            <span>Оплата</span>
                        </div>
                        <div className="info__delivery">
                            <img src={car} alt=""/>
                            <span>Доставка</span>
                        </div>
                        <div className={style.info__partners}>
                            <img src={arms} alt=""/>
                            <span>Парнерство</span>
                        </div>
                    </div>
                </div>
            </div>
            {state ?
                <MenuItems v={text} setState={setState}/>
                : <CatalogList context={context} substr={substr}/>
            }

        </>
    );
}

export default Menu;