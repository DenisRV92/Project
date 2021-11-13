import React, {useContext, useState} from 'react';
import style from './Menu.module.scss'
import call from '../../image/Menu/icon_расчёт.png'
import stock from '../../image/Menu/icon_акции.png'
import MenuItems from "./MenuItems/MenuItems";
import {Context} from "../Nav/Nav";
import CatalogList from "../CatalogList/CatalogList";

const Menu = () => {
    const [state,setState,context,substr] = useContext(Context);
// console.log(input);
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
                    <li style={{background:'#e18c44'}}><img src={call} alt=""/>{props.v}</li>
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
                :<CatalogList context={context} substr={substr}/>
            }
            {/*<MenuItems v={text}/>*/}
        </>
    );
}

export default Menu;