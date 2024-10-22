'use client';

import { Carousel, CarouselContent, CarouselItem, CarouselApi } from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import Image from 'next/image';

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

export const CardSlider: React.FC<Props> = ({ slides }) => {
    const [api, setApi] = useState<CarouselApi>();

    const sliderOptions = {
        align: "start" as const,
        loop: true,
        dragFree: true
    }

    useEffect(() => {
        if (!api) return;

        api.on('pointerUp', () => {
            const closestSlide = api.selectedScrollSnap();
            api.scrollTo(closestSlide)
        });
    }, [api]);

    return (
        <Carousel setApi={setApi} className="w-[79rem]" opts={sliderOptions}>
            <CarouselContent className='w-full'>
                {
                    slides.map((item, index) => {
                        return (
                            <CarouselItem key={index} className="basis-1/3">
                                <div className='relative w-[25.3rem] h-[40.7rem]'>
                                    <Image src={`main/bg/${item.name}.jpg`} fill priority alt='bg' className="object-cover" />
                                </div>

                            </CarouselItem>
                        )
                    })
                }
            </CarouselContent>
        </Carousel >
    );
}