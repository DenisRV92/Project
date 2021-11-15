import React from 'react';
import style from './PresentMenu.module.scss'

const PresentMenu = (props) => {
    return (
        <div onMouseLeave={()=>props.setState(false)} className={style.present}>
            <div className={style.block__one}>

                <span className={style.title}>Кровельные <br/> материалы</span>

                <div className={style.one__item}>
                    <div className={style.item__page}>
                        <span>Металлическая кровля</span>
                        <ul>
                            <li>Металлочерепица</li>
                            <li>Профлист</li>
                            <li>Фальцевая кровля</li>
                        </ul>
                        <span>Мягкая кровля</span>
                        <ul>
                            <li>Гибкая черепица</li>
                            <li>Рулонная кровля</li>
                        </ul>
                        <span>Наплавляемая кровля</span>
                    </div>
                    <div className={style.item__page}>
                        <span>Гофрированная кровля</span>
                        <ul>
                            <li>Ондулин</li>
                            <li>Ондувилла</li>
                        </ul>
                        <span>Композитная черепица</span>
                        <span>Натуральная черепица</span>
                        <span>Экокровля</span>
                        <ul>
                            <li>Сланцевая кровля</li>
                            <li>Деревянная кровля</li>
                            <li>Соломенная кровля</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={style.block__two}>
                <div className={style.two__page}>
                    <span>Комплектующие <br/>для кровли</span>
                    <ul>
                        <li>Доборные элементы</li>
                        <li>Система вентиляции</li>
                        <li>Элементы безопасности</li>
                        <li>Плиты OSB</li>
                        <li>Софиты</li>
                        <li>Крепеж</li>
                        <li>Флюгеры</li>
                    </ul>
                </div>
                <div className={style.two__page}>
                    <span>Изоляционные<br/> материалы </span>
                    <ul>
                        <li>Пленки</li>
                        <li>Система вентялиции</li>
                    </ul>
                </div>
            </div>
            <div className={style.block__three}>
                <span>Водосточные <br/>системы</span>
                <ul>
                    <li>Водостоки из пластика</li>
                    <li>Водостоки из металла</li>
                </ul>
            </div>
        </div>
    );
};

export default PresentMenu;