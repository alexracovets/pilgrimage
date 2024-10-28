'use client';

import { Fade as Hamburger } from 'hamburger-react';
import React, { useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

import { Drawer, DrawerContent, DrawerTitle, DrawerHeader, DrawerDescription } from "@/components/ui/drawer";
import { Container } from "@/components/shared/container";

export const Header: React.FC = () => {
    const [underlineStyles, setUnderlineStyles] = useState({ left: '0px', width: '0px' });
    const menuRef = useRef<HTMLDivElement>(null);
    const [isMobuleMenu, setIsMobuleMenu] = useState(false);

    const links = [
        { href: '/', name: 'Головна' },
        { href: '/', name: 'Про нас' },
        { href: '/', name: 'Тури' },
        { href: '/blog', name: 'Блог' },
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
        <header className='absolute left-0 top-0 w-full py-[1rem] z-[10] bg-regal-orange'>
            <Container className='flex justify-between items-center'>
                <div className='relative flex justify-center items-center z-[100]'>
                    <div className={cn(
                        'w-[8.5rem] h-[8.5rem] mr-[2rem] relative',
                        'max-tablet:w-[4.2rem] max-tablet:h-[4.2rem] max-tablet:mr-[1rem]',
                        'max-mobile:w-[4rem] max-mobile:h-[4rem]'
                    )}>
                        <Image src='/logo.png' fill alt='logo' />
                    </div>
                    <div className='flex flex-col justify-center items-start uppercase'>
                        <h1 className={cn(
                            'text-regal-white text-[3.2rem] font-[700] mb-[1.4rem]',
                            'max-tablet:text-[1.4rem] max-tablet:mb-[.7rem]',
                            'max-mobile:text-[1.2rem]'
                        )}>
                            Паломницький центр
                        </h1>
                        <p className={cn(
                            'text-regal-white text-[2.2rem]',
                            'max-tablet:text-[1rem]',
                            'max-mobile:text-[.8rem]'
                        )}>
                            ПРАВОСЛАВНОЇ ЦЕРКВИ УКРАЇНИ
                        </p>
                    </div>
                </div>
                <div className={cn(
                    'menu-wrapper',
                    'max-mobile:hidden'
                )} ref={menuRef}>
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
                <div className='hidden max-mobile:block cursor:pointer realative z-[10]'>
                    <Hamburger toggled={isMobuleMenu} toggle={setIsMobuleMenu} color="#fff" size={18} />
                </div>

                <Drawer open={isMobuleMenu} onOpenChange={setIsMobuleMenu} direction='top'>
                    <DrawerContent className={cn(
                        ''
                    )}>
                        <DrawerHeader className='hidden'>
                            <DrawerTitle></DrawerTitle>
                            <DrawerDescription></DrawerDescription>
                        </DrawerHeader>
                        <div className='w-full h-full bg-regal-orange pointer-events-none'>
                            sadsadsa
                        </div>
                    </DrawerContent>
                </Drawer>
            </Container>
        </header>
    );
};