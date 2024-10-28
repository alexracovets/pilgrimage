'use client';

import { cn } from '@/lib/utils';

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Separator } from '@/components/ui/separator';

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

export default function TourInfoSection({ tour }: StartTourSectionProps) {

    return (
        <Section className={cn(
            'h-[100dvh] m-0 max-tablet:m-0 relative',
            'max-mobile:h-auto'
        )}>
            <Container className={cn(
                'w-ful h-full pt-[11rem] pb-[8rem]',
                'max-tablet:pb-[3.6rem]',
                'max-mobile:pt-[37.142rem]'
            )}>
                <div className='flex justify-between items start w-full flex-wrap gap-y-[5rem]'>
                    <div className='w-[69.9rem]'>
                        <div className='text-[4.8rem] font-[600]'>
                            Дата
                        </div>
                        <Separator className='my-[3rem]' />
                        <div className='text-[1.8rem]'>
                            {tour.date}
                        </div>
                    </div>
                    <div className='w-[69.9rem]'>
                        <div className='text-[4.8rem] font-[600]'>
                            Відправлення
                        </div>
                        <Separator className='my-[3rem]' />
                        <div className='text-[1.8rem]'>
                            {tour.date}
                        </div>
                    </div>
                    <div className='w-[69.9rem]'>
                        <div className='text-[4.8rem] font-[600]'>
                            Програма туру
                        </div>
                        <Separator className='my-[3rem]' />
                        <div className='text-[1.8rem]'>
                            {tour.date}
                        </div>
                    </div>
                    <div className='w-[69.9rem]'>
                        <div className='text-[4.8rem] font-[600]'>
                            Харчування
                        </div>
                        <Separator className='my-[3rem]' />
                        <div className='text-[1.8rem]'>
                            {tour.date}
                        </div>
                        <div className='text-[4.8rem] font-[600] mt-[5rem]'>
                            Ціна
                        </div>
                        <Separator className='my-[3rem]' />
                        <div className='text-[1.8rem]'>
                            {tour.date}
                        </div>
                    </div>
                </div>

            </Container>
        </Section>
    );
}