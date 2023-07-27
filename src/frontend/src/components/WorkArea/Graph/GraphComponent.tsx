import React, {JSX, useEffect, useRef, useState} from "react";
import css from './style.module.css';
import {IGraphComponent} from "./type";
import {CardComponent, ICard} from "./Card";


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

    const handleMouseDown = () => setIsDraggingField(true);
    const handleMouseUp = () => setIsDraggingField(false);
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDraggingField) {
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
    const getCards = (): JSX.Element[] => cards.map((card, index) =>
        <CardComponent key={card.id}
                       card={card}
        />);

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
        <div className={css.container}>
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
    </div>
}
