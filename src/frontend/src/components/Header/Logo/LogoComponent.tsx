import React from "react";
import {Text} from "@consta/uikit/Text";
import {ILogoComponent} from "./type";
import css from './style.module.css';

export const LogoComponent: React.FC<ILogoComponent>
    = ({}) => {
    return <div className={css.main}>
        <Text as={'span'} size={'l'} weight={'bold'} view={'primary'}>
            to-do-graph
        </Text>
        {/*<Tag icon={IconTest} size={'xs'} label={'alpha'} mode={'info'} className={headerFieldStyle.headerTag}/>*/}
    </div>
}
