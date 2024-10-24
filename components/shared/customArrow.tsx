import { cn } from '@/lib/utils';
import React from 'react';

interface ArrowSvgProps {
    color?: string;
    className?: string;
}

const customArrow: React.FC<ArrowSvgProps> = ({ color = 'white', className }) => {
    return (
        <div className={cn(
            'w-[6.3rem] h-[1.6rem]',
            'max-tablet:w-[3rem] h-[1rem]',
            className
        )}>
            <svg
                width={'100%'}
                height={'100%'}
                viewBox="0 0 63 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M62.7071 8.70711C63.0976 8.31658 63.0976 7.68342 62.7071 7.29289L56.3431 0.928932C55.9526 0.538408 55.3195 0.538408 54.9289 0.928932C54.5384 1.31946 54.5384 1.95262 54.9289 2.34315L60.5858 8L54.9289 13.6569C54.5384 14.0474 54.5384 14.6805 54.9289 15.0711C55.3195 15.4616 55.9526 15.4616 56.3431 15.0711L62.7071 8.70711ZM0 9H62V7H0V9Z"
                    fill={color}
                />
            </svg>
        </div>
    );
};

export default customArrow;
