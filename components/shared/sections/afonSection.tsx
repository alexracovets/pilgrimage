'use client';

import { FaStar } from "react-icons/fa";
import Image from "next/image";

import CustomArrow from "@/components/shared/customArrow";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";

export default function AfonSection() {
    return (
        <Section>
            <Container>
                <div className="relative w-full h-[45.8rem] rounded-[2rem] outline outline-[.6rem] outline-regal-orange overflow-hidden p-[9rem] text-regal-white">
                    <Image src='img/afon.jpg' fill alt="afon" className="object-cover z-[-1]" />
                    <div className="absolute top-[7.5rem] right-[28.35rem] w-[38.9rem] h-[19.9rem] border-[.3rem] border-regal-white flex justify-end items-start">
                        <div className="w-[19.2rem] h-[3.3rem] bg-regal-white flex justify-center items-start p-[.6rem]">
                            <FaStar color="#FF6328" size="1.8rem" className="mr-[.4rem]" />
                            <span className="text-[1.6rem] text-regal-black">VIP пропозиція</span>
                        </div>
                    </div>

                    <h2 className="text-[6.4rem] font-[700] mb-[2.8rem]">Свята гора Афон</h2>
                    <p className="text-[1.6rem] w-[52rem] mb-[2.8rem] leading-[1.3]">
                        Паломницький центр Православної Церкви України запрошує вас здійснити духовну подорож на Святу Гору Афон — одне з найвеличніших святих місць православного світу.
                    </p>
                    <Button className="flex justify-center items-center">
                        <CustomArrow className="mr-[1rem]" />
                        <span>Детальніше</span>
                    </Button>
                </div>
            </Container>
        </Section>
    );
}
