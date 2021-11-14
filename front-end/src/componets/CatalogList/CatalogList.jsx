import React from 'react';
import style from './CatalogList.module.scss'
import CatalogItem from "./CatalogItems/CatalogItem";

const CatalogList = (props) => {
// console.log(props)
    if (props.context.length !== 0) {
        const Catalog = props.context.map(v =>
            <CatalogItem name={v['Наименования']}
                         img={v['Картинка']}
                         number={v['Доступное количество']}
                         price={v['Цена']}
                         substr={props.substr}
            />)
        return (
            <div className={style.catalog}>
                <div className={style.container}>
                    {Catalog}
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default CatalogList;