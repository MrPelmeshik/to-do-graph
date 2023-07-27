import {IWorkAreaComponent} from "./type";
import mainStyle from './style.module.css';
import React from "react";
import {GraphComponent} from "./Graph";
import {TestFieldComponent} from "./TestField";
import {useAppSelector} from "../../store/сonfigureStore";
import {PAGES} from "../../definitions";

export const WorkAreaComponent: React.FC<IWorkAreaComponent>
    = ({}) => {
    const currentPage = useAppSelector(state => state.page);

    const getPage = (): JSX.Element => {
        switch (currentPage.key) {
            case PAGES[0].key: return <GraphComponent />;
            case PAGES[1].key: return <TestFieldComponent />;
            default: return <GraphComponent />;
        }
    };

    return <div className={mainStyle.main}>
        {getPage()}
    </div>
}