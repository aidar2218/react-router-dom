import React from 'react';
import {useParams} from "react-router-dom";
import {adidasArr, ShoesItemType} from "./Adidas";
import {pumaArr} from "./Puma";

type CrossModelsType = {
    [key: string]: ShoesItemType[];
}

const crossModels: CrossModelsType = {
    adidas: adidasArr,
    puma: pumaArr
}

export const Model = () => {

    const {model, id} = useParams();

    const currentModel = model ? crossModels[model].find(el => el.id === Number(id)) : null;

    console.log(model, id);
    return (
        <div style={{textAlign: "center"}}>
            {currentModel ? <>
                <h2>{currentModel.model}</h2>
                <h4>{currentModel.collection}</h4>
                <h3>{currentModel.price}</h3>
                <img src={currentModel.picture}
                     alt={currentModel.model}
                     style={{width: "300px", height: "auto"}}
                />
            </> : <h2>Can not find this model</h2>
            }
        </div>
    );
};