import React from "react";
import {ICardComponent} from "./type";
import cardStyle from './style.module.css';

export const CardComponent: React.FC<ICardComponent>
    = ({card }) => {
    return <div className={[cardStyle.main, 'shadowCard', 'r-s'].join(' ')}
                style={{
                    left: card.position.left,
                    top: card.position.top
                }}
                draggable={true}
    >
        card #{card.id}
        <br/>
        def: (left: {card.position.left}; top: {card.position.top})
    </div>
}