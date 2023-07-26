import {IconComponent} from "@consta/icons/Icon";

export type IPageItem = {
    label: string;
    tag?: {
        label: string;
        icon: IconComponent;
        status: 'system' | 'normal' | 'warning' | 'error' | 'success';
        minified?: boolean;
    };
    disabled?: boolean;
};