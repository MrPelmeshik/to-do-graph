import {IWorkAreaComponent} from "./type";
import css from './style.module.css';
import React from "react";
import {GraphComponent} from "./Graph";
import {DnDComponent} from "./DnD";
import {useAppSelector} from "../../store/сonfigureStore";
import {PAGES} from "../../definitions";

export const WorkAreaComponent: React.FC<IWorkAreaComponent>
    = ({}) => {
    const currentPage = useAppSelector(state => state.page);

    const getPage = (): JSX.Element => {
        switch (currentPage.key) {
            case PAGES[0].key: return <GraphComponent />;
            case PAGES[1].key: return <DnDComponent />;
            default: return <GraphComponent />;
        }
    };

    return <div className={css.main}>
        {getPage()}
    </div>
}