import {Dispatch} from "react";
import {ThemeItem} from "./HeaderField";

export interface IHeaderField {
    theme: ThemeItem;
    setTheme:Dispatch<ThemeItem>;
}