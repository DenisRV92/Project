import React, {useContext} from 'react';
import {Context} from "../Nav/Nav";
import CatalogItem from "./CatalogItems/CatalogItem";

const CatalogList = () => {
    const [context] = useContext(Context);

    console.log(context)
    // //
    if (context.length !== 0) {
        const Catalog = context.map(v =>
            <CatalogItem name={v['Наименования']}
                                                      img={v['Картинка']}
                                                      number={v['Доступное количество']}
                                                      price={v['Цена']}
        />)
        return (
            <div>
                {Catalog}
            </div>
        );
    } else {
        return null;
    }
};

export default CatalogList;