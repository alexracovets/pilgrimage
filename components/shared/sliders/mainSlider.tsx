'use client';

import { Carousel, CarouselContent, CarouselItem, CarouselApi } from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import Fade from 'embla-carousel-fade';
import Image from 'next/image';

import useMainSlider from '@/store/useMainSlider';

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

export const MainSlider: React.FC<Props> = ({ slides }) => {
    const prevSlider = useMainSlider(state => state.prevSlider);
    const [api, setApi] = useState<CarouselApi>();

    const sliderOptions = {
        duration: 60
    }

    useEffect(() => {
        if (!api) return;
        api.scrollTo(prevSlider);
    }, [api, prevSlider])

    return (
        <Carousel className="absolute left-0 top-0 w-full h-full z-[-1]" opts={sliderOptions} setApi={setApi} plugins={[Fade()]}>
            <CarouselContent className='w-full h-[100dvh]'>
                {
                    slides.map((item, index) => {
                        return (
                            <CarouselItem key={index} className="relative left-0 top-0 w-full h-full  ">
                                <Image src={`main/bg/${item.name}.jpg`} fill priority alt='bg' className="object-cover" />
                            </CarouselItem>
                        )
                    })
                }
            </CarouselContent>
        </Carousel>
    );
}