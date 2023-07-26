import React from "react";
import {ThemeToggler} from "@consta/uikit/ThemeToggler";
import {IThemeSelectorComponent} from "./type";
import {getItemIcon, themes} from "./ThemeService";

export const ThemeSelectorComponent: React.FC<IThemeSelectorComponent>
    = ({theme, setTheme}) => {
    return <ThemeToggler items={themes}
                         value={theme}
                         getItemKey={(item: any) => item}
                         getItemLabel={(item: any) => item}
                         getItemIcon={getItemIcon}
                         onChange={({value}) => setTheme(value)}
                         direction={'downStartLeft'}
    />
}