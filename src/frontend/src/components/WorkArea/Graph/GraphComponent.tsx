import React, {JSX, useEffect, useRef, useState} from "react";
import css from './style.module.css';
import {IGraphComponent} from "./type";
import {CardComponent, ICard} from "./CardArea/Card";
import {CardAreaComponent} from "./CardArea";


export const GraphComponent: React.FC<IGraphComponent>
    = ({}) => {
    const layerRef = useRef<HTMLDivElement>(null);
    const [viewport, setViewport] = useState({
        offset: {
            x: 0.0,
            y: 0.0
        },
        zoom: 1
    });
    const [isDraggingField, setIsDraggingField] = useState(false);
    const [existSelectedCard, setExistSelectedCard] = useState(false);

    const handleMouseDown = () => {
        console.log('Area handleMouseDown')
        setIsDraggingField(true);
    }
    const handleMouseUp = (event: React.MouseEvent) => {
        console.log('Area handleMouseUp')
        setIsDraggingField(false);
    }
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!existSelectedCard || !isDraggingField) {
            return;
        }

        if (e.buttons !== 1) {
            setIsDraggingField(false);
            return;
        }

        setViewport((prev) => ({
            ...prev,
            offset: {
                x: prev.offset.x + e.movementX / viewport.zoom,
                y: prev.offset.y + e.movementY / viewport.zoom
            }
        }));
    };

    useEffect(() => {
        if (!layerRef.current) {
            return;
        }

        layerRef.current.onwheel = (e: WheelEvent) => {
            e.preventDefault();
            e.stopPropagation();

            if (e.ctrlKey) {
                const speedFactor = (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 0.002) * 10;

                setViewport((prev) => {
                    const pinchDelta = -e.deltaY * speedFactor;

                    return {
                        ...prev,
                        zoom: Math.min(
                            1.3,
                            Math.max(0.1, prev.zoom * Math.pow(2, pinchDelta))
                        )
                    };
                });
            }
        };
    }, [setViewport]);

    return <div className={css.field}
                ref={layerRef}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
    >
        <CardAreaComponent viewport={viewport}
                           setExistSelectedCard={setExistSelectedCard}
        />
    </div>
}
