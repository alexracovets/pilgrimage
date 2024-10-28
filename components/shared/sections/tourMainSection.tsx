'use client';

import { CalendarClock } from "lucide-react";
import { cn } from '@/lib/utils';
import Image from 'next/image';

import { Container } from "@/components/shared/container";
import CustomArrow from "@/components/shared/customArrow";
import { Section } from "@/components/shared/section";
import { Price } from "@/components/shared/price";
import { Button } from "@/components/ui/button";

interface Tour {
    name: string;
    tourName: string;
    country: string;
    price: string;
    date: string;
    description: string;
}
interface StartTourSectionProps {
    tour: Tour;
}

export default function TourMainSection({ tour }: StartTourSectionProps) {
    console.log(tour)
    return (
        <Section className={cn(
            'h-[100dvh] m-0 max-tablet:m-0 relative',
            'max-mobile:h-auto'
        )}>
            <Image src={`/main/bg/${tour.name}.jpg`} fill priority alt='bg' className="object-cover z-[-1]" />
            <Container className={cn(
                'flex justify-end items-end w-ful h-full pt-[11rem] pb-[8rem] flex',
                'max-tablet:pb-[3.6rem]',
                'max-mobile:pt-[37.142rem]'
            )}>
                <div className='flex justify-start items-start flex-col w-[69.7rem]'>
                    <div className={cn(
                        'text-[2.6rem] text-regal-white mb-[1.8rem]',
                        'max-tablet:text-[1.2rem] max-tablet:mb-[.88rem]',
                        'max-mobile:text-[1.4rem] max-mobile:mb-[.97rem]'
                    )}>
                        {tour.tourName}
                    </div>
                    <div className={cn(
                        'uppercase text-[13.8rem] tracking-[-.3rem] text-regal-white font-oswald font-[500] mb-[2.8rem]',
                        'max-tablet:text-[6.8rem] max-tablet:mb-[1.4rem]',
                        'max-mobile:text-[5.6rem] max-mobile:mb-[1.5rem] '
                    )}>
                        {tour.country}
                    </div>
                    <div className={cn(
                        'flex justify-start items-center mb-[2.8rem]',
                        'max-tablet:mb-[1.4rem]'
                    )}>
                        <Price className={cn(
                            'mr-[3.8rem]',
                            'max-tablet:mr-[1.85rem] max-tablet:text-[1.2rem] max-tablet:p-0 max-tablet:w-[6.8rem] max-tablet:h-[2.4rem] max-tablet:flex max-tablet:justify-center max-tablet:items-center',
                            'max-mobile:w-[7.9rem] max-mobile:h-[2.339rem] max-mobile:text-[1.4rem]'
                        )}>
                            {tour.price}
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
                            {tour.date}
                        </div>
                    </div>
                    <div className={cn(
                        'text-[1.6rem] text-regal-white leading-[2.08rem] mb-[2.8rem]',
                        'max-tablet:text-[1rem] max-tablet:leading-[1.3rem] max-tablet:mb-[1.4rem]'
                    )}>
                        {tour.description}
                    </div>
                    <Button variant='secondary' className="flex justify-center items-center">
                        <CustomArrow color="#FF6328" />
                        <span className="text-regal-orange">Замовити тур</span>
                    </Button>
                </div>

            </Container>
        </Section>
    );
}