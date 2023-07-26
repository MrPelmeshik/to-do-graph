import {IPageItem} from "../../types";
import {PAGES} from "../../definitions";
import {createReducer} from "@reduxjs/toolkit";
import {setPage} from "./actions";


const getPageById = (pageId: number): IPageItem => pageId
    ? PAGES[pageId] ?? PAGES[0]
    : PAGES[0];

export default createReducer(getPageById(0), {
    [setPage.type]: (theme, action) => getPageById(action.payload)
});