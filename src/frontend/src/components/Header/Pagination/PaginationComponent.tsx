import React from "react";
import {IPaginationComponent} from "./type";
import paginationStyle from './style.module.css';
import {Badge} from "@consta/uikit/Badge";
import {IPageItem} from "./IPageItem";
import {Tabs} from "@consta/uikit/Tabs";
import {pages} from "./PaginationService";


const getPageLabel = (page: IPageItem) => page.label;
const getRightSideContent = (page: IPageItem) => page.tag
    ? <Badge size={'xs'}
             label={page.tag.label}
             status={page.tag.status}
             iconRight={page.tag.icon}
             minified={!!page.tag.minified}
             view={'stroked'}
    />
    : null;


export const PaginationComponent: React.FC<IPaginationComponent>
    = ({page, setPage}) => {
    return <Tabs value={page}
                 onChange={({ value }) => setPage(value)}
                 items={pages}
                 getItemLabel={getPageLabel}
                 getItemRightSide={getRightSideContent}
                 size={'s'}
                 view={'clear'}
    />
}
