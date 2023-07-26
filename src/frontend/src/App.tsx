import React from 'react';
import appStyle from './App.module.css';
import {Layout} from "@consta/uikit/Layout";
import {Theme} from "@consta/uikit/Theme";
import {FooterComponent, HeaderComponent, MainComponent, MenuComponent} from "./components";
import {useAppSelector} from "./store/сonfigureStore";


export const App = () => {
  const currentTheme = useAppSelector(state => state.theme.preset);

  return <Theme preset={currentTheme}>
    <Layout direction={'column'}
            className={appStyle.app}
    >
      <Layout flex={0}
              className={'z10'}
      >
        <HeaderComponent />
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