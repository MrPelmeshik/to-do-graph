import {IFooterComponent} from "./type";
import React from "react";
import footerStyle from './style.module.css';
import {Text} from "@consta/uikit/Text";

export const FooterComponent: React.FC<IFooterComponent>
    = ({}) => {
    return <footer className={[footerStyle.main, 'shadowCard'].join(' ')}>
    </footer>
}