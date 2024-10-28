import TourInfoSection from "@/components/shared/sections/tourInfoSection";
import TourMainSection from "@/components/shared/sections/tourMainSection";
import dataTours from "@/data/dataTours";
import { notFound } from 'next/navigation';

interface Params {
  params: {
    tourId: string;
  };
}

export async function generateStaticParams() {
  return dataTours.map((tour) => ({
    tourId: tour.name.toLowerCase(),
  }));
}

export default async function TourDetails({ params }: Params) {
  const { tourId } = params;
  const tour = dataTours.find((t) => t.name.toLowerCase() === tourId);

  if (!tour) {
    notFound();
  }

  return (
    <>
      <TourMainSection tour={tour} />
      <TourInfoSection tour={tour} />
    </>
  );
}
