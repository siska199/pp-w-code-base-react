import { getAssetURL } from '@lib/utils/helper';
import React, { useState } from 'react';

interface TProps extends React.HTMLProps<HTMLImageElement> {
    src: string;
    alt?: string;
}

const Image = (props: TProps) => {
    const { src, alt, ...attrs } = props;
    const [isLoading, setIsLoading] = useState(true);

    const handleLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className="relative">
            <img
                src={src?.includes('http') ? src : getAssetURL({ name: src })}
                alt={alt || src.replace('-', ' ')}
                onLoad={handleLoad}
                className={isLoading ? 'blur-effect' : 'clear-effect'}
                {...attrs}
            />
        </div>
    );
};

export default Image;
