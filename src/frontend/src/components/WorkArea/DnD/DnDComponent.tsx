import React from "react";
import {IDnDComponent} from "./test";
import css from './style.module.css';
import {DnDAreaComponent} from "./DndArea";

export const DnDComponent: React.FC<IDnDComponent>
    = ({}) => {
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }}>
        <DnDAreaComponent />
    </div>
}