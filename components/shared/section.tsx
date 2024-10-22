'use client';

import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
    className?: string;
}

export const Section: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
    return (
        <section className={cn('my-[10rem] relative', className)}>{children}</section>
    );
};