'use client';

import { cn } from '@/lib/utils';
import React from 'react';

interface Props { className?: string; }

export const Container: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
    return (
        <div className={cn(
            'mx-auto w-full px-[5rem]',
            'px-[3rem]',
            className)}
        >
            {children}
        </div>
    );
};