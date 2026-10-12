
'use client'
import React from 'react'

import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Project } from "./../../app/projects/projectData";
import Image from 'next/image';
interface project{
  project:Project;
}
export default function Carsoul({ project }: { project: Project }) {
  return (
     <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]} className='w-100 mx-auto'>
      <CarouselContent>
        {project?.screenshots.map((screen, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex  w-full items-center justify-center p-6 h-65 ">
                  <Image src={screen!.image||''} alt="screenshot"  className="w-full h-full object-contain"/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
