import {IMenuField} from "./type";
import menuFieldStyle from './style.module.css';
import React from "react";

export const MenuField: React.FC<IMenuField>
    = ({}) => {
    return <div className={[menuFieldStyle.menu, 'shadowCard m-b-l m-t-l r-l-l'].join(' ')}>
        menu
    </div>
}