import { getAssetURL } from '@lib/utils/helper';
import React from 'react'

interface TProps extends React.HTMLProps<HTMLImageElement> {
    src: string;
    alt?: string;
}

const Image = (props: TProps) => {
    const { src, alt, ...attrs } = props

    return (
        <img src={getAssetURL({ name: src })} alt={alt || src.replace('-', ' ')} {...attrs} />
    )
}

export default Image