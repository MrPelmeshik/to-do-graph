import {IPageItem} from "./IPageItem";
import {IconTest} from "@consta/icons/IconTest";

export const pages: IPageItem[] = [
    {
        label: 'Worked field',
    },
    {
        label: 'DnD',
        tag: {
            label: 'test',
            icon: IconTest,
            status: 'normal',
        },
    },
]