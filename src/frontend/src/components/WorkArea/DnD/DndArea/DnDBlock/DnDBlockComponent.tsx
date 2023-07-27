import React from "react";
import {IDnDBlockComponent} from "./type";
import css from './style.module.css';

export const DnDBlockComponent: React.FC<IDnDBlockComponent>
    = ({}) => {
    return <div className={css.main}>
        DnDBlockComponent
    </div>
}