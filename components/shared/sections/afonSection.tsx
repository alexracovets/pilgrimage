'use client';

import { FaStar } from "react-icons/fa";
import { cn } from "@/lib/utils";
import Image from "next/image";

import CustomArrow from "@/components/shared/customArrow";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";

export default function AfonSection() {
    return (
        <Section>
            <Container>
                <div className={cn(
                    'relative w-full h-[45.8rem] rounded-[2rem] border-[.6rem] border-regal-orange overflow-hidden p-[9rem] text-regal-white',
                    'max-tablet:h-[22.186rem] max-tablet:p-[4rem]'
                )}>
                    <Image src='img/afon.jpg' fill alt="afon" className="object-cover z-[-1]" />
                    <div className={cn(
                        'absolute top-[7.5rem] right-[28.35rem] w-[38.9rem] h-[19.9rem] border-[.3rem] border-regal-white flex justify-end items-start',
                        'max-tablet:w-[23.1rem] max-tablet:h-[11.817rem] max-tablet:border-[.2rem] max-tablet:top-[.7rem] max-tablet:right-[9.5rem]'
                    )}>
                        <div className={cn(
                            'w-[19.2rem] h-[3.3rem] bg-regal-white flex justify-center items-start p-[.6rem]',
                            'max-tablet:w-[13.9rem] max-tablet:h-[3rem]'
                        )}>
                            <FaStar color="#FF6328" className={cn(
                                'mr-[.4rem] w-[1.8rem] h-[1.8rem]',
                                'max-tablet:w-[1.2rem] max-tablet:h-[1.2rem]'
                            )} />
                            <span className={cn(
                                'text-[1.6rem] text-regal-black',
                                'max-tablet:text-[1.4rem]'
                            )}>VIP пропозиція</span>
                        </div>
                    </div>

                    <h2 className={cn(
                        'text-[6.4rem] font-[700] mb-[2.8rem]',
                        'max-tablet:text-[3.6rem] max-tablet:mb-[1.6rem]'
                    )}>Свята гора Афон</h2>
                    <p className={cn(
                        'text-[1.6rem] w-[52rem] mb-[2.8rem] leading-[1.3]',
                        'max-tablet:text-[1rem] max-tablet:mb-[1.6rem] max-tablet:w-[28.7rem]'
                    )}>
                        Паломницький центр Православної Церкви України запрошує вас здійснити духовну подорож на Святу Гору Афон — одне з найвеличніших святих місць православного світу.
                    </p>
                    <Button className="flex justify-center items-center">
                        <CustomArrow className={cn(
                            'mr-[1rem]',
                            'max-tablet:mr-[.6rem]'
                        )} />
                        <span>Детальніше</span>
                    </Button>
                </div>
            </Container>
        </Section>
    );
}
