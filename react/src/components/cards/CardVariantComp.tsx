import { cn } from '@lib/utils/helper';
import React from 'react';

interface TProps {
    title: string;
    Component: React.ReactNode;
    withBorder?: boolean;
    customeClass?: {
        container?: string;
    }
}

const CardVariantComp = (props: TProps) => {
    const { title, Component, customeClass, withBorder = true } = props
    return (
        <div className={cn({
            ' flex flex-row-reverse  items-center  gap-1 justif-start rounded-md min-w-[6rem] md:min-w-[8rem]': true,
            [`${customeClass?.container}`]: customeClass?.container,
            ' border flex-col  p-2 justify-center': withBorder,
            '[&>p]:min-w-[7rem] [&>p]:max-w-[7rem] ':!withBorder
        })}>
            {Component}
            <p className="text-body-tiny">{title}</p>
        </div>
    )
}

export default CardVariantComp