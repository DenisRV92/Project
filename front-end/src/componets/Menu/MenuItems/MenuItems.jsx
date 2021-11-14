import React from 'react';
import style from './MenuItems.module.scss'
import PresentMenu from "./PresentMenu/PresentMenu";

const MenuItems = (props) => {

    if (props.v) {
        if (props.v !== 'КРОВЛЯ') {
            return (

                <div onMouseLeave={() => props.setState(false)} className={style.items}>
                    <div className={style.container}>
                        {props.v}
                    </div>
                </div>
            );
        }
        else {
         return   <PresentMenu/>
        }
    }
else
    {
        return null
    }
};

export default MenuItems;