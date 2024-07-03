/* eslint-disable react/jsx-handler-names */
import React, { useState, useEffect, useRef } from 'react';
import { cn } from "@lib/utils/helper"; // Assuming you have this utility
import Button from '@components/ui/Button';
import { IconChevronLeft, IconChevronRight } from '@assets/icons';

interface CarouselProps {
    items: React.ReactNode[];
    className?: string;
    itemsPerView?: {
        sm?: number;
        md?: number;
        lg?: number;
    };
}

const CarouselImage: React.FC<CarouselProps> = ({ items, className, itemsPerView = { sm: 1, md: 3, lg: 4 } }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleGetItemsPerView = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1024 && itemsPerView.lg) {
            return Math.min(itemsPerView.lg, items.length); // Ensure itemsPerView doesn't exceed items.length
        } else if (screenWidth >= 768 && itemsPerView.md) {
            return Math.min(itemsPerView.md, items.length);
        } else if (itemsPerView.sm) {
            return Math.min(itemsPerView.sm, items.length);
        } else {
            return Math.min(1, items.length); // Default fallback, ensure at least one item visible
        }
    };

    const handlePrev = () => setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));

    const handleNext = () => setCurrentIndex(prevIndex => Math.min(prevIndex + 1, items.length - handleGetItemsPerView()));

    const handleClickGroupItem = (group: number) => {
        const itemsPerViewCount = handleGetItemsPerView();
        const itemsLength = items?.length || 0;
        const isLastGroup = Math.ceil(itemsLength / itemsPerViewCount) === (group + 1);
        let updateIndex = group * itemsPerViewCount;

        if (isLastGroup) {
            const stepBack = itemsLength % itemsPerViewCount === 0 ? 0 : itemsPerViewCount - (itemsLength % itemsPerViewCount);
            updateIndex -= stepBack;
        }

        setCurrentIndex(updateIndex);
    };

    const itemWidth = containerWidth / handleGetItemsPerView();

    return (
        <div className={cn("relative w-full", className)} ref={containerRef}>
            
            <div className="overflow-hidden w-full h-full">
                <div className="relative w-full h-full flex transition-left duration-500 ease-in-out" style={{ left: `-${currentIndex * itemWidth}px`, width: `${items.length * itemWidth}px` }}>
                    {items.map((item, index) => (
                        <div key={index} className="flex w-full h-full bg-primary-100 justify-center items-center" style={{ width: `${itemWidth}px` }}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            <Button
                label={<IconChevronLeft className='icon-white w-[2rem] h-[2rem]' />}
                variant="transparent"
                onClick={handlePrev}
                className="absolute top-1/2 left-2 transform -translate-y-1/2"
                disabled={currentIndex === 0}
            />

            <Button
                label={<IconChevronRight className='icon-white w-[2rem] h-[2rem]' />}
                variant="transparent"
                onClick={handleNext}
                className="absolute top-1/2 right-2 transform -translate-y-1/2"
                disabled={currentIndex >= items.length - handleGetItemsPerView()}
            />

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 p-2">
                {Array.from({ length: Math.ceil(items.length / handleGetItemsPerView()) }).map((_, group) => {
                    let isCurrentGroup = group * handleGetItemsPerView() === currentIndex
                    const isSpecialCase = items?.length % handleGetItemsPerView() !== 0
                    const lastGroupIndex = Math.ceil(items.length / handleGetItemsPerView()) - 1

                    if (isSpecialCase && group === lastGroupIndex) {
                        const stepBack = items?.length % handleGetItemsPerView() === 0 ? 0 : handleGetItemsPerView() - (items.length % handleGetItemsPerView());
                        const updateIndex = lastGroupIndex * handleGetItemsPerView() - stepBack
                        if (updateIndex === currentIndex) {
                            isCurrentGroup = true
                        }
                    }
                    return (
                        <Button
                            key={group}
                            label=""
                            variant="transparent"
                            className={`h-3 w-3 !p-0 rounded-full ${isCurrentGroup ? 'bg-white' : 'bg-white/30'}`}
                            onClick={() => handleClickGroupItem(group)}
                        />
                    );
                })}
            </div>
            
        </div>
    );
};

export default CarouselImage;
