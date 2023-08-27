import React from "react";
import {IDnDBlockComponent} from "./type";
import css from './style.module.css';
import {useDrag} from "react-dnd";

export const DnDBlockComponent: React.FC<IDnDBlockComponent>
    = ({key, name, draggble}) => {
    const [{ isDragging }, dragRef] = useDrag({
        type: 'test_card',
        item: { key, name: name },
        collect: (monitor) => ({
            isDragging: draggble/*monitor.isDragging()*/
        })
    });

    return <div className={css.main}
                ref={dragRef}
    >
        <b>{name}</b>
        {isDragging && 'Oops'}
    </div>
}