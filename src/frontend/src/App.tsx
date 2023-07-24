import React, {useState} from 'react';
import appStyle from './App.module.css';
import {getThemePreset, HeaderField, ThemeItem, themes} from "./components/HeaderField/HeaderField";
import {MainField} from "./components/MainField/MainField";
import {FooterField} from "./components/FooterField/FooterField";
import {MenuField} from "./components/MenuField/MenuField";
import {Layout} from "@consta/uikit/Layout";
import {Theme} from "@consta/uikit/Theme";


export const App = () => {
  const [theme, setTheme] = useState<ThemeItem>(themes[0]);

  return <Theme preset={getThemePreset(theme)}>
      <Layout direction={'column'}
              className={appStyle.app}>
        <Layout flex={0} className={'z100'}>
          <HeaderField theme={theme} setTheme={setTheme}/>
        </Layout>
        <Layout flex={10}>
          <Layout flex={0} className={'z10'}>
            <MenuField/>
          </Layout>
          <Layout flex={1}>
            <MainField/>
          </Layout>
        </Layout>
        {/*<Layout flex={1} className={'z100'}
                verticalAlign={'bottom'}>
          <FooterField/>
        </Layout>*/}
      </Layout>
  </Theme>
}