import React from 'react';

const CatalogItem = (props) => {
    console.log(props)
    return (
        <div>
            {props.name}
            <img src={props.img} alt=""/>
            {props.number}
            {props.price}
        </div>
    );
};

export default CatalogItem;