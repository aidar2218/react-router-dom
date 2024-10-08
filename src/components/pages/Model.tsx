import React from 'react';
import {useParams} from "react-router-dom";
import {adidasArr} from "./Adidas";

export const Model = () => {

    const params = useParams();

    const id = Number(params.id)

    console.log(params);
    return (
        <div style={{textAlign: "center"}}>
            <h2>{adidasArr[id].model}</h2>
            <h4>{adidasArr[id].collection}</h4>
            <h3>{adidasArr[id].price}</h3>
            <img src={adidasArr[id].picture}
                 alt={adidasArr[id].model}
                 style={{width: "300px",height: "auto"}}
            />
        </div>
    );
};