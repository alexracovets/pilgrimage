'use client';

import dynamic from 'next/dynamic';
const Scrollbars = dynamic(() => import('react-custom-scrollbars-2'), { ssr: false });

export const Scroll: React.FC<React.PropsWithChildren> = ({ children }) => {




    return (
        <Scrollbars
            renderTrackVertical={props => <div {...props} className={'bg-regal-white top-0 right-0 h-full w-[3px!important] rounded-[1rem] z-[10]'} />}
            renderThumbVertical={props => <div {...props} className={'bg-regal-orange rounded-[1rem]'} />}
            renderView={props => <div style={{ margin: '0!important', ...props.style }} />}
            universal={true}
            style={
                {
                    width: '100vw',
                    height: '100dvh',
                    overflowY: 'hidden'
                }
            }
        >
            {children}
        </Scrollbars>
    );
}; 