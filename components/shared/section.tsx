'use client';

import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
    className?: string;
    id?: string;
}

export const Section: React.FC<React.PropsWithChildren<Props>> = ({ className, id, children }) => {
    return (
        <section className={cn(
            'my-[10rem] relative overflow-hidden',
            'max-tablet:my-[5rem]',
            className)}
            id={id}
        >
            {children}
        </section>
    );
};