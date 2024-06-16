import React from 'react'

interface TProps {
    title: string;
    Component: React.ReactNode;
    customeClass?: {
        container?: string;
    }
}

const CardVariantComp = (props: TProps) => {
    const { title, Component, customeClass } = props
    return (
        <div className={`${customeClass?.container} flex flex-col gap-1 items-center border p-2 rounded-md min-w-[6rem] md:min-w-[8rem]`}>
            {Component}
            <p className="text-body-tiny">{title}</p>
        </div>
    )
}

export default CardVariantComp