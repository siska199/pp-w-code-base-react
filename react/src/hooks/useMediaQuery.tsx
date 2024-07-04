import { useState, useEffect } from 'react';

const mediaQueryConfig = {
    isMinLg: '(min-width: 1024px)',
    isMinMd: '(min-width: 768px)',
    isMaxMd: '(max-width: 768px)',

    isMinSm: '(min-width: 640px)'

};

interface TMediaQueryMatches {
    isMinLg: boolean;
    isMinMd: boolean;
    isMaxMd: boolean;
    isMinSm: boolean;
}

const useMediaQuery = () => {
    const [matches, setMatches] = useState<TMediaQueryMatches>(() => {
        const initialMatches: TMediaQueryMatches = {
            isMinLg: window.matchMedia(mediaQueryConfig.isMinLg).matches,
            isMinMd: window.matchMedia(mediaQueryConfig.isMinMd).matches,
            isMaxMd: window.matchMedia(mediaQueryConfig.isMaxMd).matches,
            isMinSm: window.matchMedia(mediaQueryConfig.isMinSm).matches,

        };
        return initialMatches;
    });

    useEffect(() => {

        const mediaQueryLists = {
            isMinLg: window.matchMedia(mediaQueryConfig.isMinLg),
            isMinMd: window.matchMedia(mediaQueryConfig.isMinMd),
            isMaxMd: window.matchMedia(mediaQueryConfig.isMaxMd),
            isMinSm: window.matchMedia(mediaQueryConfig.isMinSm),
        };

        const handleMediaQueryChange = () => {
            setMatches({
                isMinLg: mediaQueryLists.isMinLg.matches,
                isMinMd: mediaQueryLists.isMinMd.matches,
                isMaxMd: mediaQueryLists.isMaxMd.matches,
                isMinSm: mediaQueryLists.isMinLg.matches,
            });
        };

        Object.values(mediaQueryLists).forEach(mediaQueryList => {
            mediaQueryList.addEventListener('change', handleMediaQueryChange);
        });

        const handleResize = () => {
            handleMediaQueryChange();
        };

        window.addEventListener('resize', handleResize);

        // Initial check
        handleMediaQueryChange();

        return () => {
            Object.values(mediaQueryLists).forEach(mediaQueryList => {
                mediaQueryList.removeEventListener('change', handleMediaQueryChange);
            });
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return matches;
};

export default useMediaQuery;
