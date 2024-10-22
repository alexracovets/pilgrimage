'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';


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
        <header className='absolute left-0 top-0 w-full py-[5rem] z-[1]'>
            <Container className='flex justify-between items-center'>
                <div className='flex justify-center items-center'>
                    <div className='w-[8.5rem] h-[8.5rem] mr-[2rem] relative'>
                        <Image src='/logo.png' fill alt='logo' />
                    </div>
                    <div className='flex flex-col justify-center items-start uppercase'>
                        <h1 className='text-regal-white text-[3.2rem] font-[700] mb-[1.4rem]'>Паломницький центр</h1>
                        <p className='text-regal-white text-[2.2rem]'>ПРАВОСЛАВНОЇ ЦЕРКВИ УКРАЇНИ</p>
                    </div>
                </div>
                <div className="menu-wrapper" ref={menuRef}>
                    <nav className="flex justify-between items-center w-[79rem]">
                        {links.map((link, index) => (
                            <Link href={link.href} key={index} legacyBehavior passHref>
                                <a className={`uppercase text-[1.6rem] text-regal-white font-[700] py-[.8rem]`}
                                    onMouseEnter={handleMouseEnter}
                                >
                                    {link.name}
                                </a>
                            </Link>
                        ))}
                        <div className='absolute bottom-0 h-[0.2rem] bg-regal-orange transition-all ease-out duration-300' style={underlineStyles}></div>
                    </nav>
                </div>
            </Container>
        </header>
    );
};
