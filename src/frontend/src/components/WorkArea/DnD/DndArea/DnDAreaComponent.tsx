import React, {useState} from "react";
import {IDnDAreaComponent} from "./type";
import css from './style.module.css';
import {DnDBlockComponent} from "./DnDBlock";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import { useDrop } from 'react-dnd';

const cards: number[] = [1,2,3];

export const DnDAreaComponent: React.FC<IDnDAreaComponent>
    =({}) => {
    const [basket, setBasket] = useState<number[]>([])
    const [{isOver}, dropRef] = useDrop({
        accept: 'test_card',
        drop: (card) => setBasket(cards),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    })

    return <div className={[css.main, 'shadowCard', 'p-l-l p-t-l p-r-l p-b-l'].join(' ')}>
        <DndProvider backend={HTML5Backend}>
            <React.Fragment>
                <div className='pets'>
                    {cards.map(card => <DnDBlockComponent draggble={true} key={card} name={card.toString()}/>)}
                </div>
                <div className='basket' ref={dropRef}>
                    {basket.map(card => <DnDBlockComponent draggble={false} key={card} name={card.toString()}/>)}
                    {isOver && <div>Drop Here!</div>}
                </div>
            </React.Fragment>
        </DndProvider>
    </div>
}
