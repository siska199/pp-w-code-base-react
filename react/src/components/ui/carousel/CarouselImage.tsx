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
    const [currentIndex, setCurrentIndex] = useState(0);

    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            const handleResize = () => {
                if (containerRef.current) {
                    setContainerWidth(containerRef.current.offsetWidth);
                }
            };

            // Set initial width
            handleResize();

            // Add resize listener
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, 100)
    }, []);

    const getItemsPerView = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1024 && itemsPerView.lg) {
            return itemsPerView.lg;
        } else if (screenWidth >= 768 && itemsPerView.md) {
            return itemsPerView.md;
        } else if (itemsPerView.sm) {
            return itemsPerView.sm;
        } else {
            return 1; // Default fallback
        }
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    const itemWidth = containerWidth / getItemsPerView();

    return (
        <div className={cn("relative w-full", className)} ref={containerRef}>
            <div className="overflow-hidden w-full">
                <div className="relative flex transition-left duration-500 ease-in-out" style={{ left: `-${currentIndex * itemWidth}px`, width: `${items.length * itemWidth}px` }}>
                    {items.map((item, index) => (
                        <div key={index} className="flex justify-center items-center border bg-black" style={{ width: `${itemWidth}px` }}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            <Button
                label={<IconChevronLeft className='icon-white w-[2rem] h-[2rem]' />}
                variant={"transparent"}
                onClick={handlePrev}
                className='absolute top-1/2 left-2 transform -translate-y-1/2'
                disabled={currentIndex === 0}
            />

            <Button
                label={<IconChevronRight className='icon-white w-[2rem] h-[2rem]' />}
                variant={"transparent"}
                onClick={handleNext}
                className='absolute top-1/2 right-2 transform -translate-y-1/2'
                disabled={currentIndex === (items?.length) - getItemsPerView() }

            />

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 p-2">
                {Array.from({ length: Math.ceil(items.length / getItemsPerView()) }).map((_, index) => (
                    <Button
                        key={index}
                        label={""}
                        variant={"transparent"}
                        className={`h-3 w-3 !p-0 rounded-full ${index * getItemsPerView() === currentIndex ? 'bg-white' : 'bg-white/30'}`}
                        onClick={() => setCurrentIndex(index * getItemsPerView())}
                    />
                ))}
            </div>
        </div>
    );
};

export default CarouselImage;
