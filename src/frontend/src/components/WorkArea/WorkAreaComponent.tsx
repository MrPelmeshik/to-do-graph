import {IWorkAreaComponent} from "./type";
import css from './style.module.css';
import React from "react";
import {GraphComponent} from "./Graph";
import {DnDComponent} from "./DnD";
import {useAppSelector} from "../../store/сonfigureStore";
import {PAGES} from "../../definitions";
import {NotFoundComponent} from "./NotFound";

export const WorkAreaComponent: React.FC<IWorkAreaComponent>
    = ({}) => {
    const currentPage = useAppSelector(state => state.page);

    const getPage = (): JSX.Element => {
        switch (currentPage.key) {
            case 0: return <GraphComponent />;
            case 1: return <DnDComponent />;
            default: return <NotFoundComponent />;
        }
    };

    return <div className={css.main}>
        {getPage()}
    </div>
}