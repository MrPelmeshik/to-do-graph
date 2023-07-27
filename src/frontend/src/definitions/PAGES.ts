import {IPageItem} from "../types";
import {IconTest} from "@consta/icons/IconTest";

export const PAGES: IPageItem[] = [
    {
        key: 0,
        label: 'Graph',
    },
    {
        key: 1,
        label: 'DnD',
        tag: {
            label: '',
            icon: IconTest,
            status: 'normal',
        },
    },
]