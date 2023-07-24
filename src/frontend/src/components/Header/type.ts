import {Dispatch} from "react";
import {ThemeItem} from "./HeaderComponent";

export interface IHeaderComponent {
    theme: ThemeItem;
    setTheme:Dispatch<ThemeItem>;
}