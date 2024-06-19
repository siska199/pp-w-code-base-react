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
            ' flex   gap-1 rounded-md min-w-[6rem] md:min-w-[8rem]': true,
            [`${customeClass?.container}`]: customeClass?.container,
            ' border flex-col  p-2 justify-center items-center ': withBorder,
            '[&>p]:min-w-[7rem] [&>p]:max-w-[7rem] justify-end [&>p]:!text-left [&>p]:font-semibold gap-2 md:gap-8   flex-col-reverse md:flex-row-reverse  md:flex-nowrap md:items-center ': !withBorder
        })}>
            {Component}
            <p className="text-body-tiny ">{title}</p>
        </div>
    )
}

export default CardVariantComp