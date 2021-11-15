import React from 'react';
import style from './CatalogItem.module.scss'
import Highlighter from "react-highlight-words";

const CatalogItem = (props) => {

    return (


            <div className={style.catalog}>


                <div className={style.catalog__img}>
                    <img src={props.img} alt=""/>
                </div>
                <div className={style.catalog__name}>
                    <Highlighter
                        searchWords={[props.substr]}
                        textToHighlight={props.name}
                    />
                </div>
                <div className="catalog__number">
                    <span>Доступное количество: {props.number} шт</span>
                </div>
                <div className="catalog__price">
                   <span>Цена: {props.price}</span>
                </div>
            </div>

    );
};

export default CatalogItem;