import {createReducer} from "@reduxjs/toolkit";
import {setTheme} from "./actions";
import {IThemeItem, ThemeTypes} from "../../types";
import {THEMES} from "../../definitions";


const getThemeByType = (type: ThemeTypes): IThemeItem =>
    THEMES.find(theme => theme.key === type ?? ThemeTypes.DEFAULT) ?? THEMES[0];

export default createReducer(getThemeByType(ThemeTypes.DEFAULT), {
    [setTheme.type]: (theme, action) => getThemeByType(action.payload)
});