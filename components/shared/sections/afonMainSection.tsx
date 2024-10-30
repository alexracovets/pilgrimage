'use client';

import { CalendarClock } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { cn } from '@/lib/utils';
import Image from 'next/image';

import { Container } from "@/components/shared/container";
import CustomArrow from "@/components/shared/customArrow";
import { Section } from "@/components/shared/section";
import { Price } from "@/components/shared/price";
import { Button } from "@/components/ui/button";

export default function AfonMainSection() {

    return (
        <Section className='h-[100dvh] m-0 max-tablet:m-0 relative'>
            <Image src='/img/afon_main.jpg' alt='afon' fill priority className="object-cover object-left-top z-[-1]" />
            <Container className={cn(
                'flex justify-end items-end w-ful h-full pt-[11rem] pb-[8rem] flex',
                'max-tablet:pb-[9.5rem]',
                'max-mobile:pb-[2rem]'
            )}>
                <div className={cn(
                    'flex justify-start items-start flex-col w-[69.7rem]',
                    'max-tablet:w-[33.2rem]',
                    'max-mobile:w-full'
                )}>
                    <div className={cn(
                        'flex justify-start items-center text-[2.6rem] mb-[1.8rem]',
                        'max-tablet:text-[1.2rem] max-tablet:mb-[.88rem]',
                        'max-mobile:text-[1.4rem] max-mobile:mb-[.97rem]'
                    )}>
                        <FaStar color="#000000" className={cn(
                            'mr-[1.8rem] w-[2.2rem] h-[2.2rem]',
                            'max-tablet:w-[1.2rem] max-tablet:h-[1.2rem]'
                        )} />
                        <span className={cn(
                            'text-[2.6rem] font-[700]',
                            'max-tablet:text-[1.2rem]',
                            'max-mobile:text-[1.4rem]'
                        )}>
                            VIP пропозиція
                        </span>
                    </div>
                    <div className={cn(
                        'uppercase text-[10rem] tracking-[-.3rem] text-regal-white font-oswald font-[500] mb-[2.8rem]',
                        'max-tablet:text-[6.8rem] max-tablet:mb-[1.4rem]',
                        'max-mobile:text-[5.6rem] max-mobile:mb-[1.5rem] '
                    )}>
                        СВЯТА ГОРА АФОН
                    </div>
                    <div className={cn(
                        'flex justify-start items-center mb-[2.8rem]',
                        'max-tablet:mb-[1.4rem]'
                    )}>
                        <Price className={cn(
                            'mr-[3.8rem] bg-regal-black',
                            'max-tablet:mr-[1.85rem] max-tablet:text-[1.2rem] max-tablet:p-0 max-tablet:w-[6.8rem] max-tablet:h-[2.4rem] max-tablet:flex max-tablet:justify-center max-tablet:items-center',
                            'max-mobile:w-[7.9rem] max-mobile:h-[2.339rem] max-mobile:text-[1.4rem]'
                        )}>
                            450 €
                        </Price>
                        <div className={cn(
                            'flex justify-start items-center uppercase text-regal-white text-[1.8rem]',
                            'max-tablet:text-[1.2rem]'
                        )}>
                            <CalendarClock
                                color="#fff"
                                strokeWidth={'0.2rem'}
                                className={cn(
                                    'w-[2.2rem] h-[2.2rem] mr-[1.4rem]',
                                    'max-tablet:w-[1.4rem] max-tablet:h-[1.4rem] max-tablet:mr-[.7rem]'
                                )}
                            />
                            17 грудня - 23 грудня
                        </div>
                    </div>
                    <div className={cn(
                        'text-[1.6rem] text-regal-white leading-[2.08rem] mb-[2.8rem]',
                        'max-tablet:text-[1rem] max-tablet:leading-[1.3rem] max-tablet:mb-[1.4rem]'
                    )}>
                        Відвідання та підтримка нашої україномовної келії Свв. Архангелів, звершення молитви за Україну та наших воїнів.
                    </div>
                    <Button variant='destructive' className="flex justify-center items-center">
                        <CustomArrow color="#FF6328" />
                        <span className="text-regal-orange">Замовити тур</span>
                    </Button>
                </div>

            </Container>
        </Section>
    );
}