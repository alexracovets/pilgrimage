'use client';

import { useEffect, useRef } from "react";
import { cn } from '@/lib/utils';

import CustomArrow from "@/components/shared/customArrow";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Separator } from '@/components/ui/separator';
import { Button } from "@/components/ui/button";

import Intersection from '@/tools/intersection';
import useHeader from '@/store/useHeader';
import dataAfon from '@/data/dataAfon';

export default function AfonInfoSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const setActiveLink = useHeader(state => state.setActiveLink);

    useEffect(() => {
        if (sectionRef.current) {
            const cleanup = Intersection(sectionRef, setActiveLink, 'afonLink');
            return () => {
                if (cleanup) cleanup();
            };
        }
    }, [setActiveLink]);

    return (
        <Section ref={sectionRef} className='m-0 max-tablet:m-0 h-full'>
            <Container className={cn(
                'py-[10rem]',
                'max-tablet:py-[5rem]'
            )}>
                <div className={cn(
                    'flex justify-between items start w-full flex-wrap gap-y-[5rem] mb-[10rem]',
                    'max-tablet:mb-[5rem]',
                    'max-mobile:gap-y-[4rem]'
                )}>
                    {
                        dataAfon.items.map((item, index) => {
                            return (
                                <div key={index} className={cn(
                                    'w-[69.9rem]',
                                    'max-tablet:w-[33rem]',
                                    'max-mobile:w-full'
                                )}>
                                    <div className={cn(
                                        'text-[4.8rem] font-[600]',
                                        'max-tablet:text-[3.2rem]',
                                        'max-mobile:text-[3rem]'
                                    )}>
                                        {item.name}
                                    </div>
                                    <Separator gray className={cn(
                                        'my-[3rem]',
                                        'max-tablet:my-[1.6rem]'
                                    )} />
                                    <div className={cn(
                                        'text-[1.8rem]',
                                        'max-tablet:text-[1.6rem]'
                                    )}>
                                        {item.value}
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className='w-full'>
                        {
                            dataAfon.program.map((item, index) => {
                                switch (item.type) {
                                    case 'title':
                                        return (
                                            <div key={index}>
                                                <div className={cn(
                                                    'text-[4.8rem] font-[600]',
                                                    'max-tablet:text-[3.2rem]',
                                                    'max-mobile:text-[3rem]'
                                                )}>
                                                    {item.value}
                                                </div>
                                                <Separator gray className={cn(
                                                    'my-[3rem] mb-[5rem]',
                                                    'max-tablet:my-[1.6rem]'
                                                )} />
                                            </div>
                                        )
                                    case 'list':
                                        return (
                                            <div key={index} className='flex justify-start items-start flex-col mb-[3rem]'>
                                                <div className={cn(
                                                    'text-[3rem] font-[600] my-[2rem]',
                                                    'max-tablet:text-[2.5rem]',
                                                    'max-mobile:text-[2.2rem]'
                                                )}>
                                                    {item.name}
                                                </div>
                                                <Separator gray className={cn(
                                                    'my-[3rem]',
                                                    'max-tablet:my-[1.6rem]'
                                                )} />
                                                <ul className={cn(
                                                    'cost_list text-[1.8rem]',
                                                    'max-tablet:text-[1.6rem]',
                                                    'max-mobile:mb-[1.4rem]'
                                                )}>
                                                    {
                                                        item.list?.map((li, idx) => {
                                                            return <li key={idx} className='leading-[1.2]'>{li}</li>
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        )
                                    case 'days':
                                        return (
                                            <div key={index} className='flex justify-start items-start flex-col mb-[3rem] last-of-type:mb-0 w-full'>
                                                <div className={cn(
                                                    'text-[3rem] font-[600] my-[2rem]',
                                                    'max-tablet:text-[2.5rem]',
                                                    'max-mobile:text-[2.2rem]'
                                                )}>
                                                    {item.name}
                                                </div>
                                                <Separator gray className={cn(
                                                    'my-[3rem]',
                                                    'max-tablet:my-[1.6rem]'
                                                )} />
                                                {
                                                    item.days?.map((day, idx) => {
                                                        return (
                                                            <div key={idx} className={cn(
                                                                'w-full mb-[5rem] last-of-type:mb-0',
                                                                'max-mobile:mb-[2rem]'
                                                            )}>
                                                                <div className={cn(
                                                                    'uppercase text-[2.5rem] font-[600] mb-[1.6rem]',
                                                                    'max-tablet:text-[2rem]'
                                                                )}>
                                                                    {day.name}
                                                                </div>
                                                                <Separator gray className={cn(
                                                                    'my-[3rem]',
                                                                    'max-tablet:my-[1.6rem]'
                                                                )} />
                                                                <ul className={cn(
                                                                    'cost_list text-[1.8rem]',
                                                                    'max-tablet:text-[1.6rem]',
                                                                    'max-mobile:mb-[1.4rem]'
                                                                )}>
                                                                    {day.list.map((li, id) => {
                                                                        return <li key={id} className='leading-[1.2]'>{li}</li>
                                                                    })}
                                                                </ul>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    default:
                                        break;
                                }
                            })
                        }
                    </div>
                </div>
                <Button variant='outline_orange' className={cn(
                    'flex justify-center items-center mx-auto'
                )}>
                    <CustomArrow color="#FF6328" />
                    <span className="text-regal-orange">Замовити тур</span>
                </Button>
            </Container>
        </Section >
    );
}