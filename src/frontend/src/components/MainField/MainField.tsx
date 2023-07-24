import {IMainField} from "./type";
import mainFieldStyle from './style.module.css';
import React from "react";
import {WorkedField} from "../WorkedField/WorkedField";

export const MainField: React.FC<IMainField>
    = ({}) => {
    return <div className={mainFieldStyle.main}>
        <WorkedField />
    </div>
}