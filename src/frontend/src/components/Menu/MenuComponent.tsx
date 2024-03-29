import {IMenuComponent} from "./type";
import css from './style.module.css';
import React from "react";

export const MenuComponent: React.FC<IMenuComponent>
    = ({}) => {
    return <div className={[css.menu, 'shadowCard m-b-l m-t-l r-l-l'].join(' ')}>
        menu
    </div>
}