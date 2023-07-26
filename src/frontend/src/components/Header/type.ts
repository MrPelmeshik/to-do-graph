import {Dispatch} from "react";
import {IThemeItem} from "./ThemeSelector";
import {IPageItem} from "./Pagination";

export interface IHeaderComponent {
    theme: IThemeItem;
    setTheme:Dispatch<IThemeItem>;

    page: IPageItem;
    setPage: Dispatch<IPageItem>;
}