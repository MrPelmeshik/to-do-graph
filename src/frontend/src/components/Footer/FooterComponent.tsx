import {IFooterComponent} from "./type";
import React, {useEffect, useState} from "react";
import css from './style.module.css';
import {ServiceCardComponent} from "./ServiceCard";

export const FooterComponent: React.FC<IFooterComponent>
    = ({}) => {
    const [coords, setCoords] = useState({x: 0, y: 0});

    useEffect(() => {
        const handleWindowMouseMove = (event: MouseEvent) => {
            setCoords({
                x: event.clientX,
                y: event.clientY,
            });
        };
        window.addEventListener('mousemove', handleWindowMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleWindowMouseMove,
            );
        };
    }, []);

    return <footer className={[css.main, 'shadowCard'].join(' ')}>
        <ServiceCardComponent label={'cursor_position'} values={[coords.x, coords.y]} />
    </footer>
}