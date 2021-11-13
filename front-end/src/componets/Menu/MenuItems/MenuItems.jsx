import React from 'react';
import style from './MenuItems.module.scss'

const MenuItems = (props) => {
// console.log(props)
    if (props.v) {
        return (

            <div onMouseLeave={() => props.setState(false)} className={style.items}>
                <div className={style.container}>
                    {props.v}
                </div>
            </div>
        );
    }
    else {
        return null
    }
};

export default MenuItems;