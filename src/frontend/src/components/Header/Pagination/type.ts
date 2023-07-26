import {IPageItem} from "./IPageItem";
import {Dispatch} from "react";

export interface IPaginationComponent {
    page: IPageItem;
    setPage: Dispatch<IPageItem>;
}