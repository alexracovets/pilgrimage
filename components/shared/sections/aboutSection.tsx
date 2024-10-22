'use client';

import CustomArrow from "@/components/shared/customArrow";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function AboutSection() {
    return (
        <Section>
            <Container>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col justify-start items-start w-[60.9rem]">
                        <h2 className="text-[6.6rem] font-[700] mb-[2.8rem]">Про нас</h2>
                        <p className="text-[1.6rem] leading-[2.08rem] mb-[1.6rem]">
                            Паломницький центр Православної Церкви України — це духовна платформа для всіх, хто прагне глибше пізнати православну віру та відчути благодатні місця України та світу. Наш центр організовує паломницькі подорожі до святих місць, допомагаючи вірянам зміцнити свою віру, знайти внутрішній спокій та духовне натхнення.
                        </p>
                        <p className="text-[1.6rem] leading-[2.08rem] mb-[2.8rem]">
                            Ми створюємо комфортні умови для подорожей, щоб кожен паломник міг зосередитися на головному — молитві та духовному збагаченні. Наша місія — супроводжувати вас на шляху до святих місць та допомогти відчути благословення, яке несе з собою паломництво.
                        </p>
                        <Button variant='outline_orange' className="flex justify-center items-center">
                            <CustomArrow className="mr-[1rem]" color="#FF6328" />
                            <span className="text-regal-orange">Зв’язатись з нами</span>
                        </Button>
                    </div>
                    <div className="w-[69.8rem] h-[47.2rem] relative">
                        <Image src='img/about.png' fill alt="about" />
                        <div className="uppercase absolute left-0 bottom-[5.4rem] text-[6.4rem] text-center text-regal-white font-[400] font-oswald flex justify-center items-center w-full">
                            <div className="w-[50rem] mx-auto leading-[1.1]">
                                Ми відкриваємо святі місця
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}