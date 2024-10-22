'use client';

import { Carousel, CarouselContent, CarouselItem, CarouselApi } from '@/components/ui/carousel';
import { CalendarClock } from "lucide-react";
import { useEffect, useState } from 'react';
import Fade from 'embla-carousel-fade';

import CustomArrow from "@/components/shared/customArrow";
import { Price } from "@/components/shared/price";
import { Button } from "@/components/ui/button";

interface Slide {
    name: string;
    country: string;
    tourName: string;
    price: string;
    date: string;
    description: string;
}

interface Props {
    slides: Slide[];
}

export const TextSlider: React.FC<Props> = ({ slides }) => {
    const [api, setApi] = useState<CarouselApi>();

    useEffect(() => {
        if (!api) return;
        api.scrollNext();
    }, [api]);

    return (
        <Carousel className="w-[52rem]" setApi={setApi} plugins={[Fade()]}>
            <CarouselContent className='w-full'>
                {
                    slides.map((item, index) => {
                        return (
                            <CarouselItem key={index} className="flex flex-col w-[52rem] justify-start items-start">
                                <div className="text-[2.6rem] text-regal-white mb-[1.8rem]">
                                    {item.tourName}
                                </div>
                                <div className="uppercase text-[10.8rem] tracking-[-.3rem] text-regal-white font-oswald font-[500] mb-[2.8rem]">
                                    {item.country}
                                </div>
                                <div className="flex justify-start items-center mb-[2.8rem]">
                                    <Price className="mr-[3.8rem]">
                                        {item.price}
                                    </Price>
                                    <div className="flex justify-start items-center uppercase text-regal-white text-[1.8rem]">
                                        <CalendarClock color="#fff" size={'2.2rem'} strokeWidth={'0.2rem'} className="mr-[1.4rem]" />
                                        {item.date}
                                    </div>
                                </div>
                                <div className="text-[1.6rem] text-regal-white leading-[2.08rem] mb-[2.8rem]">
                                    {item.description}
                                </div>
                                <Button variant='outline' className="flex justify-center items-center">
                                    <CustomArrow className="mr-[1rem]" />
                                    <span className="text-regal-white">Детальніше</span>
                                </Button>
                            </CarouselItem>
                        )
                    })
                }
            </CarouselContent>
        </Carousel>
    );
}