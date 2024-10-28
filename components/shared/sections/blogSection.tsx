'use client';
import { CircleArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

import CustomArrow from "@/components/shared/customArrow";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import useIsMobile from '@/store/useIsMobile';
import dataBlog from "@/data/dataBlog";

export default function BlogSection() {
    const viewSize = useIsMobile(state => state.viewSize);

    return (
        <Section className={cn(
            'mt-[15.5rem] mb-[5rem]',
            'max-tablet:mt-[11.2rem]'
        )}>
            <Container>
                <h1 className={cn(
                    'text-[10rem] text-regal-orange font-oswald font-[600]',
                    'max-tablet:text-[4.8rem]',
                    'max-mobile:text-[3rem]'
                )}>
                    Блог
                </h1>
                <div className={cn(
                    'flex justify-between items-start flex-wrap my-[10rem] gap-y-[5rem]',
                    'max-tablet:my-[5rem]',
                    'max-mobile:gap-y-[2.6rem] max-mobile:flex-col'
                )}>
                    {
                        dataBlog.map((item, index) => {
                            let title = '';
                            let count = 0;

                            if (viewSize <= 1023 && viewSize > 539) {
                                count = 45;
                            } else if (viewSize <= 539) {
                                count = 40;
                            } else {
                                count = 73;
                            }

                            if (item.title.length > count) {
                                title = item.title.slice(0, count - 3) + '...';
                            } else {
                                title = item.title;
                            }

                            return (
                                <div key={index} className={cn(
                                    'flex justify-start items-start flex-col w-[69.9rem] h-[56.8rem] rounded-[2rem] border-regal-gray border-[.2rem]',
                                    'max-tablet:w-[32.9rem] max-tablet:h-[52.2rem]',
                                    'max-mobile:w-full max-mobile:h-[56.6rem]'
                                )}>
                                    <div className={cn(
                                        'relative w-full h-[35.7rem] rounded-[2rem] overflow-hidden',
                                        'max-tablet:h-[20rem]'
                                    )}>
                                        <Image src={`/blog/posts/${item.image}`} fill alt={item.name} priority className="object-cover" />
                                    </div>
                                    <div className="flex justify-between items-start w-full py-[2.8rem] px-[2.6rem]">
                                        <div className={cn(
                                            'flex justify-start items-start flex-col w-[49.3rem]',
                                            'max-tablet:w-full'
                                        )}>
                                            <div className={cn(
                                                'text-[2.6rem] font-[600] mb-[1.6rem] leading-[1.2] min-h-[6rem] flex justify-start items-center',
                                                'max-tablet:text-[2rem]'
                                            )}>
                                                {title}
                                            </div>
                                            <div className={cn(
                                                'text-[1.8rem] leading-[1.2] tracking-[0.01rem]',
                                                'max-tablet:tracking-[-0.01rem] max-tablet:mb-[2.6rem]'
                                            )}>
                                                {item.description}
                                            </div>
                                            <Button variant='outline_orange' className={cn(
                                                'justify-center items-center w-full hidden',
                                                'max-tablet:flex'
                                            )}>
                                                <CustomArrow color="#FF6328" />
                                                <span className="text-regal-orange">Деталі</span>
                                            </Button>
                                        </div>
                                        <CircleArrowRight strokeWidth={'.1rem'} className="w-[3.9rem] h-[3.9rem] max-tablet:hidden" />
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
