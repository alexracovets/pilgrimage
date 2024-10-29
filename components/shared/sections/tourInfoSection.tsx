'use client';

import { cn } from '@/lib/utils';

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Separator } from '@/components/ui/separator';

interface Day {
    name: string;
    list: string[];
}

interface Items {
    name: string;
    value: string;
}

interface Program {
    type: string;
    value?: string;
    name?: string;
    list?: string[];
    days?: Day[]
}

interface More {
    items: Items[];
    program: Program[];
}

interface Tour {
    page: string;
    country: string;
    tourName: string;
    price: string;
    duration: string;
    description: string;
    more: More;
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
                    {
                        tour.more.items.map((item, index) => {
                            return (
                                <div key={index} className='w-[69.9rem]'>
                                    <div className='text-[4.8rem] font-[600]'>
                                        {item.name}
                                    </div>
                                    <Separator gray className='my-[3rem]' />
                                    <div className='text-[1.8rem]'>
                                        {item.value}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </Container>
        </Section>
    );
}