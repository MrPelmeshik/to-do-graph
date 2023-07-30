import React from "react";
import {INotFoundComponent} from "./type";
import css from './style.module.css';
import {Text} from "@consta/uikit/Text";

export const NotFoundComponent: React.FC<INotFoundComponent>
    = ({}) => {
    return <div className={css.main}>
        <Text as={'b'}>ЕррОр 404</Text><br/>
        <Text>Пиздец ты Алеша! А ну ка иди отсюда!</Text>
    </div>
}