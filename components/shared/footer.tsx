'use client';

import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

import { Container } from "@/components/shared/container";

export const Footer: React.FC = () => {
    const phone = '+380503525236';
    const post = 'pilgrimage_center@ukr.net';
    const socialStyle = 'w-[4.8rem] h-[4.8rem] max-tablet:w-[3.6rem] max-tablet:h-[3.6rem]'
    const cosial = [
        {
            href: '/',
            icon: <FaFacebook className={socialStyle} />
        },
        {
            href: '/',
            icon: <FaYoutube className={socialStyle} />
        },
        {
            href: '/',
            icon: <FaInstagram className={socialStyle} />
        }
    ]

    return (
        <footer className='bg-regal-orange'>
            <Container className={cn(
                'py-[10rem] text-regal-white',
                'max-tablet:py-[5rem]'
            )}>
                <h2 className={cn(
                    'text-[6.6rem] font-[700] mb-[4.8rem]',
                    'max-tablet:text-[3.2rem] max-tablet:mb-[6.2rem]'
                )}>
                    Контакти
                </h2>
                <div className='flex flex-wrap gap-y-[2.2rem]'>
                    <div className={cn(
                        'flex flex-col justify-start items-start w-[calc(100%/3)]',
                        'max-tablet:w-[calc(100%/2)] max-tablet:order-1'
                    )}>
                        <h3 className={cn(
                            'text-[2.6rem] font-[700] mb-[1.6rem]',
                            'max-tablet:text-[1.8rem]'
                        )}>
                            Адреса
                        </h3>
                        <div className={cn(
                            'text-[1.6rem]',
                            'max-tablet:text-[1.4rem]'
                        )}>
                            <p className='leading-[1.3]'>
                                вул. Трьохсвятительська 4Б <br />
                                м. Київ, 01001 <br />
                                Україна
                            </p>
                        </div>
                    </div>
                    <div className={cn(
                        'flex flex-col justify-start items-start w-[calc(100%/3)]',
                        'max-tablet:w-[calc(100%/2)] max-tablet:order-2'
                    )}>
                        <h3 className={cn(
                            'text-[2.6rem] font-[700] mb-[1.6rem]',
                            'max-tablet:text-[1.8rem]'
                        )}>
                            Графік роботи адміністрації
                        </h3>
                        <div className={cn(
                            'text-[1.6rem]',
                            'max-tablet:text-[1.4rem]'
                        )}>
                            <p className='mb-[1.6rem] leading-[1.3]'>
                                Понеділок – П’ятниця <br />
                                з 10:00 до 17:00
                            </p>
                            <p className='leading-[1.3]'>
                                Субота, Неділя - вихідні
                            </p>
                        </div>
                    </div>
                    <div className={cn(
                        'flex flex-col justify-start items-start w-[calc(100%/3)]',
                        'max-tablet:w-[calc(100%/2)] max-tablet:order-4'
                    )}>
                        <h3 className={cn(
                            'text-[2.6rem] font-[700] mb-[1.6rem]',
                            'max-tablet:text-[1.8rem]'
                        )}>
                            Соціальні мережі
                        </h3>
                        <div className='flex justify-start items-start text-[1.6rem] gap-x-[2.8rem]'>
                            {cosial.map((item, index) => {
                                return (
                                    <Link key={index} href={item.href} target="_blank">
                                        {item.icon}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                    <div className={cn(
                        'flex flex-col justify-start items-start w-[calc(100%/3)]',
                        'max-tablet:w-[calc(100%/2)] max-tablet:order-3'
                    )}>
                        <h3 className={cn(
                            'text-[2.6rem] font-[700] mb-[1.6rem]',
                            'max-tablet:text-[1.8rem]'
                        )}>
                            Телефон
                        </h3>
                        <div className={cn(
                            'text-[1.6rem]',
                            'max-tablet:text-[1.4rem]'
                        )}>
                            <Link href={`tel:${phone}`} target="_blank" className='mb-[1.6rem] leading-[1.3]'>
                                {phone}
                            </Link>
                        </div>
                    </div>
                    <div className={cn(
                        'flex flex-col justify-start items-start w-[calc(100%/3)]',
                        'max-tablet:w-[calc(100%/2)] max-tablet:order-5'
                    )}>
                        <h3 className={cn(
                            'text-[2.6rem] font-[700] mb-[1.6rem]',
                            'max-tablet:text-[1.8rem]'
                        )}>
                            Електронна пошта
                        </h3>
                        <div className={cn(
                            'text-[1.6rem]',
                            'max-tablet:text-[1.4rem]'
                        )}>
                            <Link href={`mailto:${post}`} target="_blank" className='mb-[1.6rem] leading-[1.3]'>
                                {post}
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </footer >
    );
};
