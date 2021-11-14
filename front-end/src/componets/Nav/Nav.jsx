import React, {useState} from 'react';
import style from './Nav.module.scss'
import adress from '../../image/nav/adress.png'
import phone from '../../image/nav/phone.png'
import search from '../../image/nav/search.png'
import cart from '../../image/nav/cart.png'
import icon1 from '../../image/nav/icon1.png'
import icon2 from '../../image/nav/icon2.png'
import user from '../../image/nav/user.png'
import city from '../../image/mob_nav/city.png'
import pin from '../../image/mob_nav/pin.png'
import arrow from  '../../image/mob_nav/arrow.png'
import Menu from "../Menu/Menu";


export const Context = React.createContext();


const Nav = () => {
    const [context, setContex] = useState('');
    const [state, setState] = useState(false);
    const [substr, setSubstr] = useState('');

    const catalog = (e) => {

        let input = e.target.value
        setSubstr(input)

        if (input !== '') {

            let url = 'http://project/back-end/index.php';
            let formData = new FormData();
            formData.append('input', input);

            fetch(url, {
                method: 'POST',

                body: formData
            })
                .then(response => response.json())
                .then(body => setContex(body));
        }
    }
    const logi = () => {
        let url = 'http://project/back-end/index.php';
        let formData = new FormData();
        formData.append('logi', 'logi');

        fetch(url, {
            method: 'POST',

            body: formData
        })

    }

    return (
        <Context.Provider value={[state, setState, context, substr]}>
            <>
                <div onFocus={()=>setState(false)} className={style.container}>
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
                            <div className={style.left__catalog} id='form'>
                                <input onChange={catalog} type="text" value={substr}
                                       placeholder='Поиск по каталогу'/>
                                <img src={search} alt=""/>
                                <button onClick={logi}>Записать логи в базу</button>
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
                <div className={style.mob__container}>
                    <div className={style.block__one}>
                        <img src={city} alt=""/>
                        <span>Город: </span><select>
                            <option>Брянск и область</option>
                        </select>
                        <img className={style.arrow} src={arrow} alt=""/>
                    </div>
                    <div className={style.block__two}>
                        <img src={pin} alt=""/>
                        <span>Адреса и режим работы</span>
                    </div>
                </div>
                <Menu/>

            </>
        </Context.Provider>
    );
};

export default Nav;