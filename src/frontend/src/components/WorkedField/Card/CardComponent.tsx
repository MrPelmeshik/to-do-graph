import React, {useState} from "react";
import {ICardComponent} from "./type";
import cardStyle from './style.module.css';
import {useDrop} from "react-dnd";
import {ICard} from "./ICard";

export const CardComponent: React.FC<ICardComponent>
    = ({card }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [_, drop] = useDrop({
        accept: card.title,
        drop(item: ICard) {
            // updateSelectionsOrder(item.id, card.id);
        },
        collect: (monitor) => setIsHovered(monitor.isOver()),
    });

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