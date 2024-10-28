'use client';

import { cn } from '@/lib/utils';

import CustomArrow from "@/components/shared/customArrow";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Separator } from '@/components/ui/separator';
import { Button } from "@/components/ui/button";

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
                    <div className='w-[69.9rem]'>
                        <div className='text-[4.8rem] font-[600]'>
                            Тривалість
                        </div>
                        <Separator gray className='my-[3rem]' />
                        <div className='text-[1.8rem]'>
                            6 Днів
                        </div>
                    </div>
                    <div className='w-[69.9rem]'>
                        <div className='text-[4.8rem] font-[600]'>
                            Відправлення
                        </div>
                        <Separator gray className='my-[3rem]' />
                        <div className='text-[1.8rem]'>
                            Київ, Рівне, Тернопіль, Чернівці
                        </div>
                    </div>
                    <div className='w-[69.9rem]'>
                        <div className='text-[4.8rem] font-[600]'>
                            Харчування
                        </div>
                        <Separator gray className='my-[3rem]' />
                        <div className='text-[1.8rem] font-[600]'>
                            Сніданки та Вечері
                        </div>
                    </div>
                    <div className='w-[69.9rem]'>
                        <div className='text-[4.8rem] font-[600]'>
                            Вартість
                        </div>
                        <Separator gray className='my-[3rem]' />
                        <div className='text-[1.8rem] font-[600]'>
                            450 €
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='text-[4.8rem] font-[600]'>
                            Програма Туру
                        </div>
                        <Separator gray className='my-[3rem]' />
                        <div className='flex justify-start items-start flex-col mb-[3rem]'>
                            <div className='text-[3rem] font-[600] mb-[2rem]'>
                                ВКЛЮЧЕНІ У ВАРТІСТЬ:
                            </div>
                            <ul className='cost_list2 text-[1.8rem]'>
                                <li>Переїзд комфортабельним мікроавтобусом на 8 пасажирів;</li>
                                <li>Ночівля в готелі зі сніданком в містечку Урануполі;</li>
                                <li>Послуги україномовного гіда на Афоні;</li>
                                <li>Бронювання Діамонітіріонів та ночівель в монастирях Афону;</li>
                                <li>Переїзди мікроавтобусами за програмою по Афону.</li>
                            </ul>
                        </div>
                        <div className='flex justify-start items-start flex-col mb-[3rem]'>
                            <div className='text-[3rem] font-[600] mb-[2rem]'>
                                У ВАРТІСТЬ НЕ ВКЛЮЧЕНО:
                            </div>
                            <ul className='cost_list text-[1.8rem]'>
                                <li>Діамонітіріон «Афонська віза» (Для священнослужителів 10 Євро, для мирян 25 Євро);</li>
                                <li>Квитки на пором від 9,5 до 14,5 Євро в одну сторону. (Ціна залежить від вибору порому групою).</li>
                            </ul>
                        </div>
                        <div className='flex justify-start items-start flex-col mb-[3rem]'>
                            <div className='text-[3rem] font-[600] mb-[2rem]'>
                                ОРІЄНТОВНА ПРОГРАМА ПАЛОМНИЦТВА:
                            </div>
                            <Separator gray className='my-[1.6rem]' />
                            <div className='pl-[1rem]'>
                                <div className='uppercase text-[2.5rem] font-[600] mb-[1.6rem]'>
                                    1 день:
                                </div>
                                <ul className='cost_list text-[1.8rem]'>
                                    <li>Виїзд з України.</li>
                                    <li>Переїзд комфортабельним мікроавтобусом до Греції територією Румунії та Болгарії.</li>
                                </ul>
                            </div>
                            <Separator gray className='my-[2rem]' />
                            <div className='pl-[1rem]'>
                                <div className='uppercase text-[2.5rem] font-[600] mb-[1.6rem]'>
                                    2 день:
                                </div>
                                <ul className='cost_list text-[1.8rem]'>
                                    <li>Прибуття в Салоніки. Поклоніння мощам святого великомученика Димитрія Солунського.</li>
                                    <li>Переїзд в Урануполі. Поселення в готель, ночівля.</li>
                                </ul>
                            </div>
                            <Separator gray className='my-[2rem]' />
                            <div className='pl-[1rem]'>
                                <div className='uppercase text-[2.5rem] font-[600] mb-[1.6rem]'>
                                    3 день:
                                </div>
                                <ul className='cost_list text-[1.8rem]'>
                                    <li>Сніданок, виселення з готелю, отримання Діамонітіріонів «Афонських віз».</li>
                                    <li>Заїзд поромом до головного порту Афону - Дафні.</li>
                                    <li>Переміщення рейсовим автобусом в столицю автономної чернечої республіки Святої Гори Афон - Каріес.</li>
                                    <li>Поклоніння до найвідомішої та найшанованішої на Афоні чудотвоної ікони Божої Матері  «Достойно є» у головному храмі столиці Протат.</li>
                                    <li>Монастир Кутлумуш. По можливості відвідування Благовіщенської келії.</li>
                                    <li>Переміщення мікроавтобусом до Святого монастиря Пантократор.</li>
                                    <li>По можливості зупинка в скиту святого пророка Іллі.</li>
                                    <li>Поселення, трапеза, ночівля.</li>
                                </ul>
                            </div>
                            <Separator gray className='my-[2rem]' />
                            <div className='pl-[1rem]'>
                                <div className='uppercase text-[2.5rem] font-[600] mb-[1.6rem]'>
                                    4 день:
                                </div>
                                <ul className='cost_list text-[1.8rem]'>
                                    <li>Ранкова служба, трапеза. Піший перехід до монастирів Ставронікіта та Іверон.</li>
                                    <li>Переїзд мікроавтобусом до монастиря Ксенофонт.</li>
                                    <li>Трапеза, ночівля.</li>
                                </ul>
                            </div>
                            <Separator gray className='my-[2rem]' />
                            <div className='pl-[1rem]'>
                                <div className='uppercase text-[2.5rem] font-[600] mb-[1.6rem]'>
                                    5 день:
                                </div>
                                <ul className='cost_list text-[1.8rem]'>
                                    <li>Ранкова служба, трапеза.</li>
                                    <li>Піший перехід до монастиря Дохіар.</li>
                                    <li>Виїзд поромом в Урануполі.</li>
                                    <li>Повернення додому.</li>
                                </ul>
                            </div>
                            <Separator gray className='my-[2rem]' />
                            <div className='pl-[1rem]'>
                                <div className='uppercase text-[2.5rem] font-[600] mb-[1.6rem]'>
                                    6 день:
                                </div>
                                <ul className='cost_list text-[1.8rem]'>
                                    <li>Прибуття в Україну.</li>
                                </ul>
                            </div>
                            <Separator gray className='my-[2rem]' />
                        </div>
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