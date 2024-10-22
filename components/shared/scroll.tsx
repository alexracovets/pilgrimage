'use client';

import dynamic from 'next/dynamic';
const Scrollbars = dynamic(() => import('react-custom-scrollbars-2'), { ssr: false });

export const Scroll: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <Scrollbars
            autoHeight
            autoHeightMin={'100dvh'}
            renderTrackVertical={props => <div {...props} className={'bg-regal-white top-0 right-0 h-full w-[3px!important] rounded-[1rem]'} />}
            renderThumbVertical={props => <div {...props} className={'bg-regal-orange rounded-[1rem]'} />}
            universal={true}
        >
            {children}
        </Scrollbars>
    );
}; 