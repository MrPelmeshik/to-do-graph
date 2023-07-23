import React, {useState} from 'react';
import appStyle from './App.module.css';
import {HeaderField, ThemeItem, themes} from "./components/Header/HeaderField";
import {MainField} from "./components/MainField/MainField";
import {Footer} from "./components/Footer/Footer";
import {Layout} from "@consta/uikit/Layout";


export const App = () => {
  const [theme, setTheme] = useState<ThemeItem>(themes[0]);

  return <div className={appStyle.app}>
    <Layout direction={'column'} flex={1}>
      <HeaderField theme={theme} setTheme={setTheme} />
      <Layout flex={1}>
        <Layout flex={1}>
          Menu
        </Layout>
        <Layout flex={4}>
          Main field
          {/*<MainField />*/}
        </Layout>
      </Layout>
      Footer
      {/*<Footer />*/}
    </Layout>
  </div>
}