import {IMainField} from "./type";
import mainFieldStyle from './MainField.module.css';
import React from "react";

export const MainField: React.FC<IMainField>
    = ({}) => {
    return <div className={mainFieldStyle.main}>
        Main component
    </div>
}