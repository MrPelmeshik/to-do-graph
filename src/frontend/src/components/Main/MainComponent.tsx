import {IMainComponent} from "./type";
import mainStyle from './style.module.css';
import React from "react";
import {WorkedFieldComponent} from "../WorkedField";
import {TestFieldComponent} from "../TestField";

export const MainComponent: React.FC<IMainComponent>
    = ({}) => {
    return <div className={mainStyle.main}>
        {/*<WorkedFieldComponent />*/}
        <TestFieldComponent />
    </div>
}