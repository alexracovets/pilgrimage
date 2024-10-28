'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

import { Carousel, CarouselContent, CarouselItem, CarouselApi } from '@/components/ui/carousel';
import { Slider } from "@/components/ui/slider";

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

export const CardSlider: React.FC<Props> = ({ slides }) => {
    const currentSlide = useMainSlider(state => state.currentSlide);
    const setCurrentSlide = useMainSlider(state => state.setCurrentSlide);
    const setLengthSlider = useMainSlider(state => state.setLengthSlider);
    const [sliderValue, setSliderValue] = useState([0]);
    const [sliderActive, setSliderActive] = useState(false);
    const [api, setApi] = useState<CarouselApi>();
    const sliderRef = useRef(null);

    const sliderOptions = {
        align: "start" as const,
        loop: true,
        dragFree: true,
        duration: 40
    }

    useEffect(() => {
        const slidesCount = slides.length;
        const nearestSlide = Math.round((sliderValue[0] / 100) * (slidesCount - 1));
        setCurrentSlide(nearestSlide);
    }, [sliderValue, slides, setCurrentSlide]);

    useEffect(() => {
        if (!api) return;
        api.scrollTo(currentSlide);
        if (!sliderActive) {
            setSliderValue([Math.round((currentSlide / (slides.length - 1)) * 100)]);
        }
    }, [api, currentSlide, slides, sliderActive])

    useEffect(() => {
        setLengthSlider(slides.length)
    }, [slides, setLengthSlider])

    useEffect(() => {
        if (!api) return;

        api.on('pointerUp', () => {
            const closestSlide = api.selectedScrollSnap();
            api.scrollTo(closestSlide);
            setCurrentSlide(closestSlide)
        });
    }, [api, setCurrentSlide]);

    return (
        <div className={cn(
            'w-[79rem]',
            'max-tablet:w-[45rem]',
            'max-mobile:w-[40.2rem]'
        )}>
            <Carousel setApi={setApi} className={cn(
                'w-full mb-[4.6rem]',
                'max-mobile:mb-[2.5rem]'
            )} opts={sliderOptions}>
                <CarouselContent className='w-full'>
                    {
                        slides.map((item, index) => {
                            return (
                                <CarouselItem key={index} className={cn(
                                    'basis-1/3',
                                    'max-tablet:basis-1/2'
                                )}>
                                    <div className={cn(
                                        'relative w-[25.3rem] h-[40.7rem] rounded-[2rem] overflow-hidden py-[3.5rem] px-[3rem]',
                                        'max-tablet:w-[21.2rem] max-tablet:h-[34.2rem] max-tablet:px-[2.6rem] max-tablet:py-[3rem]',
                                        'max-mobile:w-[19.1rem] max-mobile:h-[14.2rem] max-mobile:p-[2rem]'
                                    )}>
                                        <Image src={`main/bg/${item.name}.jpg`} fill priority alt='bg' className="object-cover z-[-1]" />
                                        <hr className='w-[2rem] h-[.4rem] bg-regal-white mb-[1.6rem]' />
                                        <div className='text-[1.4rem] text-regal-white mb-[1.4rem]'>
                                            {item.tourName}
                                        </div>
                                        <div className={cn(
                                            'uppercase text-[4rem] text-regal-white font-oswald font-[400] tracking-[-0.2rem]',
                                            'max-mobile:text-[3rem]'
                                        )}>
                                            {item.country}
                                        </div>
                                    </div>
                                </CarouselItem>
                            )
                        })
                    }
                </CarouselContent>
            </Carousel >
            <Slider
                ref={sliderRef}
                value={sliderValue}
                onValueChange={value => setSliderValue(value)}
                onPointerEnter={() => setSliderActive(true)}
                onPointerLeave={() => setSliderActive(false)}
            />
        </div>
    );
}