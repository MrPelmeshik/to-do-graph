import React, {JSX, useEffect, useRef, useState} from "react";
import workedFieldStyle from './style.module.css';
import {IWorkedField} from "./type";
import {ICard} from "./Card/type";
import {Card} from "./Card/Card";

export const WorkedField: React.FC<IWorkedField>
    = ({}) => {
    const layerRef = useRef<HTMLDivElement>(null);
    const [viewport, setViewport] = useState({
        offset: {
            x: 0.0,
            y: 0.0
        },
        zoom: 1
    });
    const [isDragging, setIsDragging] = useState(false);
    const [cards, setCards] = useState<ICard[]>([
        {
            left: -20,
            top: -60,
            title: 'node #1',
        },
        {
            left: 230,
            top: 150,
            title: 'node #2',
        },
        {
            left: 330,
            top: 350,
            title: 'node #3',
        },
        {
            left: 1200,
            top: 600,
            title: 'node #4',
        },
    ]);

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) {
            return;
        }

        if (e.buttons !== 1) {
            setIsDragging(false);

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
    const getCards = ():JSX.Element[] => cards.map((card, index) => <Card key={index} top={card.top} left={card.left} title={card.title} />);

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

    return (
        <div className={workedFieldStyle.field}
             ref={layerRef}
             onMouseDown={handleMouseDown}
             onMouseUp={handleMouseUp}
             onMouseMove={handleMouseMove}
        >
            <div className={workedFieldStyle.container}>
                <div className={workedFieldStyle.nodesContainer}
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
    );
}
