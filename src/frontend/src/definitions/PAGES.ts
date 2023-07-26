import {IPageItem} from "../types";
import {IconTest} from "@consta/icons/IconTest";

export const PAGES: IPageItem[] = [
    {
        key: 0,
        label: 'Worked field',
    },
    {
        key: 1,
        label: 'DnD',
        tag: {
            label: 'test',
            icon: IconTest,
            status: 'normal',
        },
    },
]