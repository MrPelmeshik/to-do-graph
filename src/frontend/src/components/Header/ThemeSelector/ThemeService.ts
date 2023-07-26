import {IconComponent} from "@consta/icons/Icon";
import {IconSun} from "@consta/icons/IconSun";
import {IconMoon} from "@consta/icons/IconMoon";
import {IconLightningBolt} from "@consta/icons/IconLightningBolt";
import {presetGpnDark, presetGpnDefault, presetGpnDisplay, ThemePreset} from "@consta/uikit/Theme";
import {IThemeItem} from "./IThemeItem";

export const themes: IThemeItem[] = ['Default', 'Dark', 'Display'];

export const getItemIcon = (item: IThemeItem): IconComponent => {
    switch (item) {
        case 'Default': return IconSun;
        case 'Dark': return IconMoon;
        case 'Display': return IconLightningBolt;
    }
};

export const getThemePreset = (item: IThemeItem): ThemePreset => {
    switch (item) {
        case 'Default': return presetGpnDefault;
        case 'Dark': return presetGpnDark;
        case 'Display': return presetGpnDisplay;
    }
};