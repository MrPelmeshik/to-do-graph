import {IThemeItem} from "./IThemeItem";
import {Dispatch} from "react";

export interface IThemeSelectorComponent {
    theme: IThemeItem,
    setTheme: Dispatch<IThemeItem>
}