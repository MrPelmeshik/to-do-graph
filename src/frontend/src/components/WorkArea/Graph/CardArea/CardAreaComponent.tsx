import {ICardAreaComponent} from "./type";
import React, {JSX, useState} from "react";
import css from "./style.module.css";
import {CardComponent, ICard} from "./Card";

export const CardAreaComponent: React.FC<ICardAreaComponent>
    = ({viewport, setExistSelectedCard}) => {
    const [cards, setCards] = useState<ICard[]>([
        {
            id: 1,
            title: 'card #1',
            position: {
                left: -20,
                top: -60,
            }
        },
        {
            id: 2,
            title: 'card #2',
            position: {
                left: 230,
                top: 150,
            }
        },
        {
            id: 3,
            title: 'card #3',
            position: {
                left: 330,
                top: 350,
            }
        },
        {
            id: 4,
            title: 'card #4',
            position: {
                left: 1200,
                top: 600,
            }
        },
    ]);
    const getCards = (): JSX.Element[] => cards.map((card, index) =>
        <CardComponent key={card.id}
                       card={card}
                       setExistSelectedCard={setExistSelectedCard}
        />);

    return <div className={css.container}>
        <div className={css.nodesContainer}
             style={{
                 transform: `translate(${viewport.offset.x * viewport.zoom}px, ${
                     viewport.offset.y * viewport.zoom
                 }px) scale(${viewport.zoom})`
             }}
        >
            {getCards()}
        </div>
    </div>
}