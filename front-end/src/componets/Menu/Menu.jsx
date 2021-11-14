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

const Menu = () => {
    const [state, setState, context, substr] = useContext(Context);

    const arrayList = [`РАСЧЕТ ОНЛАЙН`, 'КРОВЛЯ', 'ФАСАД', 'ЗАБОР',
        'ОКНА МАНСАРДНЫЕ', 'ЧЕРДАЧНЫЕ ЛЕСТНИЦЫ',
        'ВНУТРЕНЯЯ ОТДЕЛКА', 'ИНСТРУМЕНТ', 'АКЦИИ', 'МОНТАЖНЫЕ БРИГАДЫ']
    // const [state, setState] = useState(false);
    const [text, setText] = useState('');

    function click(event) {
        setState(true)
        setText(event.target.innerHTML)
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
                    <li onClick={click}>{props.v}</li>
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
                    <div onClick={openList} className={style.mob__menu}>
                        <img src={icon} alt=""/>
                        <span>КАТАЛОГ</span>
                        <img id='img' className={style.arrow} src={arrow} alt=""/>
                    </div>
                    <ul id='list' className={style.mob__list}>
                        <li>Кровля</li>
                        <li>Фасад</li>
                        <li>Забор</li>
                        <li>Окнас мансардные</li>
                        <li>Чердачные лестницы</li>
                        <li>Внутрення отделка</li>
                        <li>Инструмент</li>
                    </ul>
                </div>
            </div>
            {state ?
                <MenuItems v={text} setState={setState}/>
                : <CatalogList context={context} substr={substr}/>
            }
            {/*<MenuItems v={text}/>*/}
        </>
    );
}

export default Menu;