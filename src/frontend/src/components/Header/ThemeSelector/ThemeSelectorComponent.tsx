import React from "react";
import {ThemeToggler} from "@consta/uikit/ThemeToggler";
import {IThemeSelectorComponent} from "./type";
import {useAppSelector} from "../../../store/сonfigureStore";
import {THEMES} from "../../../definitions";
import {useDispatch} from "react-redux";
import {setTheme} from "../../../store/theme/actions";

export const ThemeSelectorComponent: React.FC<IThemeSelectorComponent>
    = ({}) => {
    const dispatch = useDispatch();
    const currentTheme = useAppSelector(state => state.theme);
    const updateTheme = (themeType: any) => dispatch(setTheme(themeType));

    return <ThemeToggler items={THEMES}
                         value={currentTheme}
                         getItemKey={theme => String(theme.key)}
                         onChange={({value}) => updateTheme(value.key)}
                         direction={'downStartLeft'}
    />
}