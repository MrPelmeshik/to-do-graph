import React from "react";
import headerFieldStyle from './style.module.css';
import {IHeaderField} from "./type";
import {presetGpnDark, presetGpnDefault, presetGpnDisplay, ThemePreset} from "@consta/uikit/Theme";
import {Header, HeaderLogo, HeaderMenu, HeaderModule} from "@consta/uikit/Header";
import {Tag} from "@consta/uikit/Tag";
import {ThemeToggler} from "@consta/uikit/ThemeToggler";
import {Text} from "@consta/uikit/Text";
import {IconComponent} from "@consta/icons/Icon";
import {IconTest} from "@consta/icons/IconTest";
import {IconSun} from "@consta/icons/IconSun";
import {IconMoon} from "@consta/icons/IconMoon";
import {IconLightningBolt} from "@consta/icons/IconLightningBolt";


export type ThemeItem = 'Default' | 'Dark' | 'Display';

export const themes: ThemeItem[] = ['Default', 'Dark', 'Display'];

const getItemIcon = (item: ThemeItem): IconComponent => {
    switch (item) {
        case 'Default': return IconSun;
        case 'Dark': return IconMoon;
        case 'Display': return IconLightningBolt;
    }
};

export const getThemePreset = (item: ThemeItem): ThemePreset => {
    switch (item) {
        case 'Default': return presetGpnDefault;
        case 'Dark': return presetGpnDark;
        case 'Display': return presetGpnDisplay;
    }
};


export const HeaderField: React.FC<IHeaderField>
    = ({theme, setTheme}) =>
{
    return <Header className={'shadowCard'}
                   leftSide={
                    <>
                        <HeaderLogo>
                            <Text as={'span'} size={'l'} weight={'bold'} view={'primary'}>
                                to-do-graph
                            </Text>
                            {/*<Tag icon={IconTest} size={'xs'} label={'alpha'} mode={'info'} className={headerFieldStyle.headerTag}/>*/}
                        </HeaderLogo>
                        <HeaderMenu items={[]}/>
                        </>
                   }
                   rightSide={
                    <>
                        <HeaderModule>
                            <ThemeToggler items={themes}
                                          value={theme}
                                          getItemKey={(item: any) => item}
                                          getItemLabel={(item: any) => item}
                                          getItemIcon={getItemIcon}
                                          // size={'xs'}
                                          onChange={({value}) => setTheme(value)}
                                          direction={'downStartLeft'}
                            />
                        </HeaderModule>
                    </>
                   }
    />
}