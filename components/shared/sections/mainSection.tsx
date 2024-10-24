'use client';

import { cn } from '@/lib/utils';

import { MainSlider } from '@/components/shared/sliders/mainSlider';
import { TextSlider } from '@/components/shared/sliders/textSlider';
import { CardSlider } from '@/components/shared/sliders/cardSlider';
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

import dataTours from "@/data/dataTours"

export default function MainSection() {

  return (
    <Section className="h-[100dvh] m-0 max-tablet:m-0">
      <MainSlider slides={dataTours} />
      <Container className={cn(
        'flex justify-center items-end w-full h-full pt-[8rem] pb-[8rem]',
        'max-tablet:pb-[3.6rem]'
      )}>
        <div className="flex justify-between items-end w-full">
          <TextSlider slides={dataTours} />
          <CardSlider slides={dataTours} />
        </div>
      </Container>
    </Section>
  );
}