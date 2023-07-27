import React from "react";
import {IServiceCardComponent} from "./type";
import css from './style.module.css';

export const ServiceCardComponent: React.FC<IServiceCardComponent>
    = ({label, values}) => {
    return <div className={css.main}>
        <b>{label}:</b>{values.map(value => <div>{value}</div>)}
    </div>
}