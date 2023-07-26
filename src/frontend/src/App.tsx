import React, {useState} from 'react';
import appStyle from './App.module.css';
import {Layout} from "@consta/uikit/Layout";
import {Theme} from "@consta/uikit/Theme";
import {FooterComponent, HeaderComponent, MainComponent, MenuComponent} from "./components";
import {getThemePreset, IThemeItem, themes} from "./components/Header/ThemeSelector";
import {IPageItem, pages} from "./components/Header/Pagination";

export const App = () => {
  const [theme, setTheme] = useState<IThemeItem>(themes[0]);
  const [page, setPage] = useState<IPageItem>(pages[0]);

  return <Theme preset={getThemePreset(theme)}>
      <Layout direction={'column'}
              className={appStyle.app}
      >
        <Layout flex={0}
                className={'z10'}
        >
          <HeaderComponent theme={theme} setTheme={setTheme}
                           page={page} setPage={setPage}
          />
        </Layout>
        <Layout flex={10}
        >
          <Layout flex={0}
                  className={'z10'}
          >
            <MenuComponent/>
          </Layout>
          <Layout flex={1}>
            <MainComponent/>
          </Layout>
        </Layout>
        {/*<Layout flex={1}
                className={'z10'}
                verticalAlign={'bottom'}
        >
          <FooterComponent />
        </Layout>*/}
      </Layout>
  </Theme>
}