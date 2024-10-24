'use client';

import React, { useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

import { Container } from "@/components/shared/container";

export const Header: React.FC = () => {
    const [underlineStyles, setUnderlineStyles] = useState({ left: '0px', width: '0px' });
    const menuRef = useRef<HTMLDivElement>(null);

    const links = [
        { href: '/', name: 'Головна' },
        { href: '/', name: 'Про нас' },
        { href: '/', name: 'Тури' },
        { href: '/', name: 'Блог' },
        { href: '/', name: 'Афон' },
        { href: '/', name: 'Контакти' }
    ];

    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const linkRect = e.currentTarget.getBoundingClientRect();
        const menuRect = menuRef.current?.getBoundingClientRect();
        if (menuRect) {
            setUnderlineStyles({
                left: `${linkRect.left - menuRect.left}px`,
                width: `${linkRect.width}px`
            });
        }
    };


    return (
        <header className={cn(
            'absolute left-0 top-0 w-full py-[1rem] z-[1] bg-regal-orange',
            ''
        )}>
            <Container className='flex justify-between items-center'>
                <div className='flex justify-center items-center'>
                    <div className={cn(
                        'w-[8.5rem] h-[8.5rem] mr-[2rem] relative',
                        'max-tablet:w-[4.2rem] max-tablet:h-[4.2rem] max-tablet:mr-[1rem]'
                    )}>
                        <Image src='/logo.png' fill alt='logo' />
                    </div>
                    <div className='flex flex-col justify-center items-start uppercase'>
                        <h1 className={cn(
                            'text-regal-white text-[3.2rem] font-[700] mb-[1.4rem]',
                            'max-tablet:text-[1.4rem] max-tablet:mb-[.7rem]'
                        )}>Паломницький центр</h1>
                        <p className={cn(
                            'text-regal-white text-[2.2rem]',
                            'max-tablet:text-[1rem]'
                        )}>
                            ПРАВОСЛАВНОЇ ЦЕРКВИ УКРАЇНИ
                        </p>
                    </div>
                </div>
                <div className="menu-wrapper" ref={menuRef}>
                    <nav className={cn(
                        'flex justify-start items-center gap-[7rem]',
                        'gap-[2rem]'
                    )}>
                        {links.map((link, index) => (
                            <Link href={link.href} key={index} legacyBehavior passHref>
                                <a className={cn(
                                    'uppercase text-[1.6rem] text-regal-white font-[700] p-[.8rem]',
                                    'max-tablet:text-[.8rem] max-tablet:p-[.4rem]'
                                )}
                                    onMouseEnter={handleMouseEnter}
                                >
                                    {link.name}
                                </a>
                            </Link>
                        ))}
                        <div className={cn(
                            'absolute bottom-0 h-[0.2rem] bg-regal-white transition-all ease-out duration-300',
                            'max-tablet:h-[0.1rem]'
                        )} style={underlineStyles}></div>
                    </nav>
                </div>
            </Container>
        </header>
    );
};