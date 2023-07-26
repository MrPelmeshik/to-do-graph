import {createReducer} from "@reduxjs/toolkit";
import {setDarkTheme, setDefaultTheme, setDisplayTheme} from "./actions";
import {IconComponent} from "@consta/icons/Icon";
import {presetGpnDark, presetGpnDefault, presetGpnDisplay, ThemePreset} from "@consta/uikit/Theme";
import {IconSun} from "@consta/icons/IconSun";
import {IconLightningBolt} from "@consta/icons/IconLightningBolt";
import {IconMoon} from "@consta/icons/IconMoon";

enum themeType {
    DEFAULT,
    DARK,
    DISPLAY,
}

interface IThemeItem {
    type: themeType;
    icon: IconComponent;
    preset: ThemePreset;
}

const themes: IThemeItem[] = [
    {
        type: themeType.DEFAULT,
        icon: IconSun,
        preset: presetGpnDefault
    },
    {
        type: themeType.DARK,
        icon: IconMoon,
        preset: presetGpnDark
    },
    {
        type: themeType.DISPLAY,
        icon: IconLightningBolt,
        preset: presetGpnDisplay
    }
]

const getThemeByType = (type: themeType): IThemeItem =>
    themes.find(theme => theme.type === type) ?? themes[0];

export default createReducer(getThemeByType(themeType.DEFAULT), {
    [setDefaultTheme.type]: (theme) => getThemeByType(themeType.DEFAULT),
    [setDarkTheme.type]: (theme) => getThemeByType(themeType.DARK),
    [setDisplayTheme.type]: (theme) => getThemeByType(themeType.DISPLAY)
});