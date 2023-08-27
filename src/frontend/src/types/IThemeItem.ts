import {IconComponent} from "@consta/icons/Icon";
import {ThemePreset} from "@consta/uikit/Theme";
import {ThemeTypes} from "./ThemeTypes";

export interface IThemeItem {
    key: ThemeTypes;
    label: string;
    icon: IconComponent;
    preset: ThemePreset;
}