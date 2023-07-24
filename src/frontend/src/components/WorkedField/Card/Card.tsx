import React from "react";
import {ICard} from "./type";
import cardStyle from './style.module.css';

export const Card: React.FC<ICard>
    = ({top, left, title}) => {
    return <div className={cardStyle.main}
                style={{
                    left: left,
                    top: top,
                }}
    >
        {title}
    </div>
}