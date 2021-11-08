import React from 'react';
import company from '../../image/header/company.png'
import dollar from '../../image/header/dollar.png'
import car from '../../image/header/car.png'
import arms from '../../image/header/arms.png'
import style from './Header.module.scss'

console.log(style)

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.container}>
                <ul className={style.header__list}>
                    <li><img src={company} alt=""/><span>О компании</span></li>
                    <li><img src={dollar} alt=""/><span>Оплата</span></li>
                    <li><img src={car} alt=""/><span>Доставка</span></li>
                    <li><img src={arms} alt=""/><span>Партнерство</span></li>
                </ul>
                <select className={style.header__region}>
                    <option>Брянск и область</option>
                    {/*<option>Пункт 2</option>*/}

                </select>
            </div>
        </div>
    );
};

export default Header;