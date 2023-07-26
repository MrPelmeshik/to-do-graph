import React from "react";
import headerStyle from './style.module.css';
import {IHeaderComponent} from "./type";
import {Header} from "@consta/uikit/Header";
import {LogoComponent} from "./Logo";
import {PaginationComponent} from "./Pagination";
import {ThemeSelectorComponent} from "./ThemeSelector";


export const HeaderComponent: React.FC<IHeaderComponent>
    = ({
           theme, setTheme,
           page, setPage
    }) =>
{
    return <Header className={'shadowCard'}
                   leftSide={
                    <div className={headerStyle.field}>
                        <LogoComponent />
                        <PaginationComponent page={page} setPage={setPage}/>
                    </div>
                   }
                   rightSide={
                    <div  className={headerStyle.field}>
                        <ThemeSelectorComponent theme={theme} setTheme={setTheme}/>
                    </div>
                   }
    />
}