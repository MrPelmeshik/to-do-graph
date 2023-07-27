import React from "react";
import {IPaginationComponent} from "./type";
import css from './style.module.css';
import {Badge} from "@consta/uikit/Badge";
import {IPageItem} from "../../../types";
import {Tabs} from "@consta/uikit/Tabs";
import {PAGES} from "../../../definitions";
import {useAppSelector} from "../../../store/сonfigureStore";
import {setPage} from "../../../store/page/actions";
import {useDispatch} from "react-redux";


const getRightSideContent = (page: IPageItem) => page.tag
    ? <Badge size={'xs'}
             label={page.tag.label}
             status={page.tag.status}
             iconRight={page.tag.icon}
             minified={!!page.tag.minified}
             view={'stroked'}
    />
    : null;


export const PaginationComponent: React.FC<IPaginationComponent> = ({}) => {
    const dispatch = useDispatch();
    const currentPage = useAppSelector(state => state.page);
    const switchPage = (pageId: any) => dispatch(setPage(pageId));

    return <Tabs items={PAGES}
                 value={currentPage}
                 onChange={({ value }) => switchPage(value.key)}
                 getItemRightSide={getRightSideContent}
                 size={'s'}
                 view={'clear'}
    />
}
