'use client';

import { CircleArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Price } from "@/components/shared/price";
import { Button } from "@/components/ui/button";

export default function TourSection() {
    const cards = [
        {
            name: 'Болгарія',
            description: 'Православний дитячий табір',
            price: '590 €',
            image: 'tour/0.jpg'
        },
        {
            name: 'Греція',
            description: 'Паломницько-відпочинковий тур',
            price: '555 €',
            image: 'tour/1.jpg'
        },
        {
            name: 'Грузія',
            description: 'Паломницький тур',
            price: 'nan',
            image: 'tour/2.jpg'
        },
        {
            name: 'Закарпаття',
            description: 'Паломницько-оздоровчий тур',
            price: '1800 €',
            image: 'tour/3.jpg'
        },
        {
            name: 'Польща',
            description: 'Паломницький тур',
            price: '150 €',
            image: 'tour/4.jpg'
        },
        {
            name: 'Румунія',
            description: 'Паломницький тур',
            price: '120 €',
            image: 'tour/5.jpg'
        },
        {
            name: 'Угорщина',
            description: 'Паломницько-оздоровчий тур',
            price: '170 €',
            image: 'tour/6.jpg'
        },
        {
            name: 'Чорногорія',
            description: 'Паломницький тур',
            price: 'nan',
            image: 'tour/7.jpg'
        }
    ]

    return (
        <Section>
            <Container>
                <h2 className={cn(
                    'text-[6.6rem] font-[700] mb-[5rem]',
                    'max-tablet:text-[3.2rem]'
                )}>
                    Обирай свій тур
                </h2>
                <div className="flex flex-wrap justify-between gap-y-[1.5rem]">
                    {
                        cards.map((card, index) => {
                            return (
                                <div key={index} className={cn(
                                    'flex flex-col justify-start items-start w-[34.2rem] border-regal-gray border-[0.2rem] rounded-[2rem] cursor-pointer',
                                    'max-tablet:w-[33rem]'
                                )}>
                                    <div className="relative w-full h-[35.7rem] rounded-[2rem] scale-[1.01] overflow-hidden">
                                        <Image src={card.image} alt={card.name} fill />
                                    </div>
                                    <div className="flex flex-col justify-start items-start w-full p-[2.6rem]">
                                        <h4 className="text-[2.6rem] font-[700] mb-[1.6rem]">{card.name}</h4>
                                        <p className="text-[1.6rem] mb-[2.6rem]">{card.description}</p>
                                        <div className="flex justify-between items-center w-full">
                                            <Price className="uppercase">{card.price}</Price>
                                            <CircleArrowRight strokeWidth={'.1rem'} className="w-[3.9rem] h-[3.9rem]" />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <Button variant='outline_orange' className="mx-auto text-regal-orange mt-[5rem]">Показати всі</Button>
            </Container>
        </Section>
    );
}