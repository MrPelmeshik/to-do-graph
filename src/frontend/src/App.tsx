import React, {useState} from 'react';
import appStyle from './App.module.css';
import {getThemePreset, HeaderComponent, ThemeItem, themes} from "./components/Header/HeaderComponent";
import {MainComponent} from "./components/Main/MainComponent";
import {FooterComponent} from "./components/Footer/FooterComponent";
import {MenuComponent} from "./components/Menu/MenuComponent";
import {Layout} from "@consta/uikit/Layout";
import {Theme} from "@consta/uikit/Theme";


export const App = () => {
  const [theme, setTheme] = useState<ThemeItem>(themes[0]);

  return <Theme preset={getThemePreset(theme)}>
      <Layout direction={'column'}
              className={appStyle.app}>
        <Layout flex={0} className={'z100'}>
          <HeaderComponent theme={theme} setTheme={setTheme}/>
        </Layout>
        <Layout flex={10}>
          <Layout flex={0} className={'z10'}>
            <MenuComponent/>
          </Layout>
          <Layout flex={1}>
            <MainComponent/>
          </Layout>
        </Layout>
        {/*<Layout flex={1} className={'z100'}
                verticalAlign={'bottom'}>
          <Footer/>
        </Layout>*/}
      </Layout>
  </Theme>
}