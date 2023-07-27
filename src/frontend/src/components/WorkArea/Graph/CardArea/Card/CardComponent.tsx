import React, {useEffect, useState} from "react";
import {ICardComponent} from "./type";
import css from './style.module.css';

export const CardComponent: React.FC<ICardComponent>
    = ({card, setExistSelectedCard }) => {
    const [isDraggingField, setIsDraggingField] = useState(false);

    useEffect(() => {
        setExistSelectedCard(!isDraggingField);
    }, [isDraggingField]);

    const handleMouseDown = () => {
        console.log('Card handleMouseDown');
        setIsDraggingField(true);
    }
    const handleMouseUp = (event: React.MouseEvent) => {
        console.log('Card handleMouseUp');
        setIsDraggingField(false);
    }
    const handleMouseMove = (event: React.MouseEvent) => {
        // console.log('handleMouseMove', event);
        if (!isDraggingField) {
            return;
        }

        if (event.buttons !== 1) {
            setIsDraggingField(false);
            return;
        }
        console.log('movement', event.movementX, event.movementY)

        card.position.left += event.movementX;
        card.position.top += event.movementY;
    }

    return <div className={[css.main, 'shadowCard', 'r-s'].join(' ')}
                style={{
                    left: card.position.left,
                    top: card.position.top
                }}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                draggable={true}
    >
        card #{card.id}
        <br/>
        def: (left: {card.position.left}; top: {card.position.top})
    </div>
}