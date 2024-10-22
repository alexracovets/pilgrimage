'use client';

import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";


import { Container } from "@/components/shared/container";
import Link from 'next/link';

export const Footer: React.FC = () => {
    const phone = '+380503525236';
    const post = 'pilgrimage_center@ukr.net';
    const cosial = [
        {
            href: '/',
            icon: <FaFacebook className='w-[4.8rem] h-[4.8rem]' />
        },
        {
            href: '/',
            icon: <FaYoutube className='w-[4.8rem] h-[4.8rem]' />
        },
        {
            href: '/',
            icon: <FaInstagram className='w-[4.8rem] h-[4.8rem]' />
        }
    ]

    return (
        <footer className='bg-regal-orange'>
            <Container className='py-[10rem] text-regal-white'>
                <h2 className='text-[6.6rem] font-[700] mb-[4.8rem]'>Контакти</h2>
                <div className='flex flex-wrap gap-y-[2.2rem]'>
                    <div className='flex flex-col justify-start items-start w-[calc(100%/3)]'>
                        <h3 className='text-[2.6rem] font-[700] mb-[1.6rem]'>Адреса</h3>
                        <div className='text-[1.6rem]'>
                            <p className='leading-[1.3]'>
                                вул. Трьохсвятительська 4Б <br />
                                м. Київ, 01001 <br />
                                Україна
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-start items-start w-[calc(100%/3)]'>
                        <h3 className='text-[2.6rem] font-[700] mb-[1.6rem]'>Графік роботи адміністрації</h3>
                        <div className='text-[1.6rem]'>
                            <p className='mb-[1.6rem] leading-[1.3]'>
                                Понеділок – П’ятниця <br />
                                з 10:00 до 17:00
                            </p>
                            <p className='leading-[1.3]'>
                                Субота, Неділя - вихідні
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-start items-start w-[calc(100%/3)]'>
                        <h3 className='text-[2.6rem] font-[700] mb-[1.6rem]'>Соціальні мережі</h3>
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
                    <div className='flex flex-col justify-start items-start w-[calc(100%/3)]'>
                        <h3 className='text-[2.6rem] font-[700] mb-[1.6rem]'>Телефон</h3>
                        <div className='text-[1.6rem]'>
                            <Link href={`tel:${phone}`} target="_blank" className='mb-[1.6rem] leading-[1.3]'>
                                {phone}
                            </Link>
                        </div>
                    </div>
                    <div className='flex flex-col justify-start items-start w-[calc(100%/3)]'>
                        <h3 className='text-[2.6rem] font-[700] mb-[1.6rem]'>Електронна пошта</h3>
                        <div className='text-[1.6rem]'>
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
