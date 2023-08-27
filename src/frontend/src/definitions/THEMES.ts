import {IconSun} from "@consta/icons/IconSun";
import {presetGpnDark, presetGpnDefault, presetGpnDisplay} from "@consta/uikit/Theme";
import {IconMoon} from "@consta/icons/IconMoon";
import {IconLightningBolt} from "@consta/icons/IconLightningBolt";
import {IThemeItem, ThemeTypes} from "../types";

export const THEMES: IThemeItem[] = [
    {
        key: ThemeTypes.DEFAULT,
        label: 'Светлая',
        icon: IconSun,
        preset: presetGpnDefault,
    },
    {
        key: ThemeTypes.DARK,
        label: 'Темная',
        icon: IconMoon,
        preset: presetGpnDark,
    },
    {
        key: ThemeTypes.DISPLAY,
        label: 'Темно-синяя',
        icon: IconLightningBolt,
        preset: presetGpnDisplay,
    }
];