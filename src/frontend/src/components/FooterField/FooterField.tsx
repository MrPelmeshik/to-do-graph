import {IFooter} from "./type";
import React from "react";
import footerFieldStyle from './style.module.css';
import {Text} from "@consta/uikit/Text";

export const FooterField: React.FC<IFooter>
    = ({}) => {
    return <footer className={[footerFieldStyle.footer, 'shadowCard'].join(' ')}>
    </footer>
}