import {IFooterComponent} from "./type";
import React from "react";
import css from './style.module.css';

export const FooterComponent: React.FC<IFooterComponent>
    = ({}) => {
    return <footer className={[css.main, 'shadowCard'].join(' ')}>
    </footer>
}