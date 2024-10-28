'use client';

import { useEffect, useState } from 'react';
import Fade from 'embla-carousel-fade';
import { cn } from '@/lib/utils';
import Image from 'next/image';

import { Carousel, CarouselContent, CarouselItem, CarouselApi } from '@/components/ui/carousel';
import { TextSlider } from '@/components/shared/sliders/textSlider';

import useMainSlider from '@/store/useMainSlider';
import useIsMobile from '@/store/useIsMobile';

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
    const isMobile = useIsMobile(state => state.isMobile);
    const [api, setApi] = useState<CarouselApi>();
    const sliderOptions = {
        duration: 60,
        startIndex: slides.length - 1
    };

    useEffect(() => {
        if (!api) return;
        api.scrollTo(prevSlider);
    }, [api, prevSlider])

    return (
        <Carousel
            className="absolute left-0 top-0 w-full h-full z-[-1]"
            setApi={setApi}
            opts={sliderOptions}
            plugins={[Fade()]}
        >
            <CarouselContent className={cn(
                'w-full h-[100dvh]',
                'max-mobile:h-[35.142rem]'
            )}>
                {
                    slides.map((item, index) => {
                        return (
                            <CarouselItem key={index} className={cn(
                                'relative left-0 top-0 w-full h-full',
                                'max-mobile:pt-[10rem] max-mobile:px-[2rem]'
                            )}>
                                <Image src={`/main/bg/${item.name}.jpg`} fill priority alt='bg' className="object-cover" />
                                {isMobile ? <TextSlider slides={slides} /> : null}
                            </CarouselItem>
                        )
                    })
                }
            </CarouselContent>
        </Carousel>
    );
}