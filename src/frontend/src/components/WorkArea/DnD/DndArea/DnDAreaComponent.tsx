import React from "react";
import {IDnDAreaComponent} from "./type";
import css from './style.module.css';
import {DnDBlockComponent} from "./DnDBlock";

export const DnDAreaComponent: React.FC<IDnDAreaComponent>
    =({}) => {
    return <div className={[css.main, 'shadowCard', 'p-l-l p-t-l p-r-l p-b-l'].join(' ')}>
        <DnDBlockComponent />
        <DnDBlockComponent />
        <DnDBlockComponent />
    </div>
}
