'use client';

import React, { useEffect } from 'react';

import useIsMobile from '@/store/useIsMobile';

export const CheckIsMobile: React.FC = () => {
    const setIsMobile = useIsMobile(state => state.setIsMobile);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 540);
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [setIsMobile]);

    return null;
};