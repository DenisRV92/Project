import React, {useContext, useState} from 'react';
import style from './Menu.module.scss'
import call from '../../image/Menu/icon_расчёт.png'
import stock from '../../image/Menu/icon_акции.png'
import MenuItems from "./MenuItems/MenuItems";
import {Context} from "../Nav/Nav";

const Menu = () => {
    const [context] = useContext(Context);
    console.log(context)
    const arrayList = [`РАСЧЕТ ОНЛАЙН`, 'КРОВЛЯ', 'ФАСАД', 'ЗАБОР',
        'ОКНА МАНСАРДНЫЕ', 'ЧЕРДАЧНЫЕ ЛЕСТНИЦЫ',
        'ВНУТРЕНЯЯ ОТДЕЛКА', 'ИНСТРУМЕНТ', 'АКЦИИ', 'МОНТАЖНЫЕ БРИГАДЫ']
    const [state, setState] = useState(false);
    const [text, setText] = useState('');

    function click(event) {
        setState(true)
        setText(event.target.innerHTML)
    }

    const ItemList = (props) => {
        if (props.v === 'РАСЧЕТ ОНЛАЙН') {
            return (
                <>
                    <li><img src={call} alt=""/>{props.v}</li>
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
    return (
        <>
            <div className={style.menu}>
                <div className={style.container}>
                    <ul className={style.menu__list}>
                        {List}
                    </ul>

                </div>
            </div>
            {state ?
                <MenuItems v={text} setState={setState}/>
                :null
            }
            {/*<MenuItems v={text}/>*/}
        </>
    );
}

export default Menu;