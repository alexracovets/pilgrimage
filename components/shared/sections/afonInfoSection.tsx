'use client';

import { cn } from '@/lib/utils';

import CustomArrow from "@/components/shared/customArrow";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Separator } from '@/components/ui/separator';
import { Button } from "@/components/ui/button";
import dataAfon from '@/data/dataAfon';

export default function AfonInfoSection() {
    return (
        <Section className={cn(
            'm-0 max-tablet:m-0 relative'
        )}>
            <Container className={cn(
                'w-ful h-full pt-[11rem] pb-[8rem]',
                'max-tablet:pb-[3.6rem]',
                'max-mobile:pt-[37.142rem]'
            )}>
                <div className='flex justify-between items start w-full flex-wrap gap-y-[5rem]'>
                    {
                        dataAfon.items.map((item, index) => {
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
                    <div className='w-full'>
                        {
                            dataAfon.program.map((item, index) => {
                                switch (item.type) {
                                    case 'title':
                                        return (
                                            <div key={index}>
                                                <div className='text-[4.8rem] font-[600]'>
                                                    {item.value}
                                                </div>
                                                <Separator gray className='my-[3rem]' />
                                            </div>
                                        )
                                    case 'list':
                                        return (
                                            <div key={index} className='flex justify-start items-start flex-col mb-[3rem]'>
                                                <div className='text-[3rem] font-[600] mb-[2rem]'>
                                                    {item.name}
                                                </div>
                                                <ul className='cost_list text-[1.8rem]'>
                                                    {
                                                        item.list?.map((li, idx) => {
                                                            return <li key={idx}>{li}</li>
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        )
                                    case 'days':
                                        return (
                                            <div key={index} className='flex justify-start items-start flex-col mb-[3rem] w-full'>
                                                <div className='text-[3rem] font-[600] mb-[2rem]'>
                                                    {item.name}
                                                </div>
                                                <Separator gray className='my-[1.6rem]' />
                                                {
                                                    item.days?.map((day, idx) => {
                                                        return (
                                                            <div key={idx} className='pl-[1rem] w-full'>
                                                                <div className='uppercase text-[2.5rem] font-[600] mb-[1.6rem]'>
                                                                    {day.name}
                                                                </div>
                                                                <ul className='cost_list text-[1.8rem]'>
                                                                    {day.list.map((li, id) => {
                                                                        return <li key={id}>{li}</li>
                                                                    })}
                                                                </ul>
                                                                <Separator gray className='my-[2rem]' />
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