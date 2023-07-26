import React from "react";
import headerStyle from './style.module.css';
import {IHeaderComponent} from "./type";
import {Header} from "@consta/uikit/Header";
import {LogoComponent} from "./Logo";
import {PaginationComponent} from "./Pagination";
import {ThemeSelectorComponent} from "./ThemeSelector";


export const HeaderComponent: React.FC<IHeaderComponent> = ({}) =>
{
    return <Header className={'shadowCard'}
                   leftSide={
                    <div className={headerStyle.field}>
                        <LogoComponent />
                        <PaginationComponent />
                    </div>
                   }
                   rightSide={
                    <div  className={headerStyle.field}>
                        <ThemeSelectorComponent />
                    </div>
                   }
    />
}