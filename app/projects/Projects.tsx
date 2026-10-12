import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight, CodeXml } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "./projectData";

export default function Projects() {
  return (
    <>
      <div className=" " id="project">
        <div className="flex items-center gap-2">
          <CodeXml className="text-(--primary-color) w-4 h-4" />
          <span className="text-(--secondary-color) text-[12px] uppercase tracking-[0.08em] font-semibold">
            Selected Work
          </span>
        </div>
        <h2 className="text-(--heading-color) w-90 text-[32px] md:text-[42px] font-[syne] font-bold mt-3 tracking-[-0.04em]">
          Projects I'm <span className="text-(--primary-color)">proud of.</span>
        </h2>
        <div className="flex flex-wrap w-full lg:flex-nowrap gap-3  gap-y-10 lg:gap-5 my-10">
          {projectsData.map((project) => (
            <Link
              href={`projects/${project.id}`}
              key={project.id}
              className="sm:w-[49%]  
            lg:w-1/3 w-full  "
            >
              <Card className="hover:scale-[1.03] duration-500  mx-auto w-full max-w-sm pt-0 h-110">
               
                <Image
                  src={project.screenshots[0]?.image}
                  alt={`screenshot of ${project.title}`}
                  className="relative z-20 aspect-video w-full object-cover brightness-60  dark:brightness-40"
                />
                <CardHeader>
                  <CardAction>
                    <Badge className="bg-[#d9785755] text-(--primary-color)">
                      {project.category}
                    </Badge>
                  </CardAction>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.summary}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardFooter>
                  <div className="flex ">
                    <span>View Details </span>
                    <ArrowUpRight className="h-5 w-4.5 " />
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
