'use client';

import CustomArrow from "@/components/shared/customArrow";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";


export default function AboutSection() {
    return (
        <Section>
            <Container>
                <div className="flex justify-between items-center">
                    <div className={cn(
                        'flex flex-col justify-start items-start w-[60.9rem]',
                        'max-tablet:w-[33rem]'
                    )}>
                        <h2 className={cn(
                            'text-[6.6rem] font-[700] mb-[2.8rem]',
                            'max-tablet:text-[3.2rem] max-tablet:mb-[1.6rem]',
                            'max-mobile:text-[3rem] max-mobile:mb-[2.6rem]'
                        )}>
                            Про нас
                        </h2>
                        <p className={cn(
                            'text-[1.6rem] leading-[1.3] mb-[1.6rem]',
                            'max-tablet:text-[1rem] max-tablet:mb-[1rem]',
                            'max-mobile:text-[1.4rem] max-mobile:mb-[1.2rem]'
                        )}>
                            Паломницький центр Православної Церкви України — це духовна платформа для всіх, хто прагне глибше пізнати православну віру та відчути благодатні місця України та світу. Наш центр організовує паломницькі подорожі до святих місць, допомагаючи вірянам зміцнити свою віру, знайти внутрішній спокій та духовне натхнення.
                        </p>
                        <p className={cn(
                            'text-[1.6rem] leading-[1.3] mb-[2.8rem]',
                            'max-tablet:text-[1rem] max-tablet:mb-[1.6rem]',
                            'max-mobile:text-[1.4rem] max-mobile:mb-[2.6rem]'
                        )}>
                            Ми створюємо комфортні умови для подорожей, щоб кожен паломник міг зосередитися на головному — молитві та духовному збагаченні. Наша місія — супроводжувати вас на шляху до святих місць та допомогти відчути благословення, яке несе з собою паломництво.
                        </p>
                        <Button variant='outline_orange' className="flex justify-center items-center">
                            <CustomArrow color="#FF6328" />
                            <span className="text-regal-orange">Зв’язатись з нами</span>
                        </Button>
                    </div>
                    <div className={cn(
                        'w-[69.8rem] h-[47.2rem] relative',
                        'max-tablet:w-[33.2rem] max-tablet:h-[22.462rem]',
                        'max-mobile:hidden'
                    )}>
                        <Image src='img/about.png' fill alt="about" />
                        <div className={cn(
                            'uppercase absolute left-0 bottom-[5.4rem] text-[6.4rem] text-center text-regal-white font-[400] font-oswald flex justify-center items-center w-full',
                            'max-tablet:text-[3rem] bottom-[2.655rem]'
                        )}>
                            <div className={cn(
                                'w-[50rem] mx-auto leading-[1.1]',
                                'max-tablet:w-[25rem]'
                            )}>
                                Ми відкриваємо святі місця
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
