import React from 'react';
import style from './MenuItems.module.scss'

const MenuItems = (props) => {

    if (props.v) {
        return (

            <div onMouseLeave={() => props.setState(false)} className={style.items}>
                <div className={style.container}>
                    {props.v}
                </div>
            </div>
        );
    }
};

export default MenuItems;