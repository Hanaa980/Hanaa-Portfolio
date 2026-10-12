
import * as React from "react";

import Image from "next/image";
import { projectsData } from "../projectData";
import { GithubIcon } from "@/components/icons/lucide-github";
import {
  ArrowBigLeft,
  CheckCircle2Icon,
  Code2,
  ExternalLink,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Carsoul from "@/components/ui/carsoul";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetails({ params }: PageProps) {
  const { id } = await params;

  const project = projectsData.find((p) => p.id === id);
  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <Link href="/" className="px-4 py-2 bg-black text-white rounded-full">
          Back to Home
        </Link>
      </div>
    );
  }
  return (
    <>
      <div
        className=""
        style={{ "--project-color": project?.color } as React.CSSProperties}
      >
        
        <div className=" w-full h-[80vh] relative text-white p-5 ">
          <Image
            src={project!.screenshots[0]?.image}
            alt={project!.screenshots[0]!.title}
            width={500}
            height={300}
            className=" absolute inset-0 -z-10  rounded-b-4xl  w-full object-cover h-full "
          />
          <div className="absolute top-0  -z-10 right-0 left-0 bg-[#070706d7] rounded-b-4xl bottom-0 "></div>
          <div className="flex flex-col justify-end h-[65vh] px-5 md:max-w-280  mx-auto">
            <Badge className="bg-[#ece8e66f] text-white mb-10 p-3  ">
              <Link href="/" className="flex items-center p-2 gap-1">
                {" "}
                <ArrowBigLeft />
                <span>Home</span>{" "}
              </Link>
            </Badge>
            <Badge className=" bg-[#ece8e66f] text-white mb-10 p-2 h-15 animate-bounce">
              {/* {project?.icon} */}
              <Image
                src={project!.icon || ""}
                alt="priject icon"
                width={40}
                height={60}
                className="w-15 "
              ></Image>
            </Badge>
            <Badge className="bg-[#ece8e66f] text-white mb-10 p-3 ">
              {project?.category}
            </Badge>
            <h1 className=" text-[46px] font-[syne] font-bold  mb-5 tracking-[-0.04em]">
              {project?.title}
            </h1>
            <p>{project?.summary}</p>

            <div className="links mt-7 flex gap-2">
              <Link href={project!.githubUrl}>
                {" "}
                <div className="flex gap-1 justify-center items-center px-3 py-2 bg-white w-40 rounded-full text-black text-[16px] font-semibold">
                  <GithubIcon className="w-5 " />
                  <span>source code</span>
                </div>{" "}
              </Link>
              <Link href={project!.demoUrl}>
                <div className="flex gap-1 justify-center items-center px-3 py-2 bg-transparent border w-40 rounded-full text-[16px] font-semibold">
                  <ExternalLink className="w-5 " />
                  <span>live demo</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="px-5 md:max-w-280  mx-auto ">
          <div className="flex flex-wrap gap-3 mt-10">
            <div className="w-[48.5%]  gap-1 py-6 px-4 bg-white border  rounded-2xl text-(--project-color) flex items-center justify-center flex-col ">
              <span className="text-[32px] font-bold  font-[syne] text-(--project-color)">
                {project?.features.length}
              </span>
              <p className="text-(--secondary-color) font-semibold text-[11px] uppercase">
                features
              </p>
            </div>
            <div className="w-[48.5%]   gap-1  py-6 px-4 bg-white border  rounded-2xl text-(--project-color) flex items-center justify-center flex-col ">
              <span className="text-[32px] font-bold  font-[syne] text-(--project-color)">
                {project?.technologies.length}
              </span>
              <p className="text-(--secondary-color) font-semibold text-[11px] uppercase">
                technologies
              </p>
            </div>
            <div className="w-[48.5%]   gap-1 py-6 px-4 bg-white border  rounded-2xl text-(--project-color) flex items-center justify-center flex-col ">
              <span className="text-[32px] font-bold  font-[syne] text-(--project-color)">
                {project?.screenshots.length}
              </span>
              <p className="text-(--secondary-color) font-semibold text-[11px] uppercase">
                screenshots
              </p>
            </div>
            <div className="w-[48.5%]  gap-1  py-6 px-4 bg-white border  rounded-2xl text-(--project-color) flex items-center justify-center flex-col ">
              <span className="text-[32px] font-bold  font-[syne] text-(--project-color)">
                {project?.highlights.length}
              </span>
              <p className="text-(--secondary-color) font-semibold text-[11px] uppercase">
                highlights
              </p>
            </div>
          </div>
          {/* ------------------- */}
          <div className="my-7">
            <h2 className="text-(--heading-color) text-[26px] font-[syne] font-bold my-5 tracking-[-0.04em]">
              <span className="text-(--project-color) text-[14px] me-1">
                01
              </span>
              About this project
            </h2>
            <p className=" text-[18px] text-[#444444] leading-[1.7] font-medium">
              {project?.description}
            </p>
          </div>
          {/* ------------------- */}
          <div className="my-7">
            <h2 className="text-(--heading-color) text-[26px] font-[syne] font-bold my-5 tracking-[-0.04em]">
              <span className="text-(--project-color) text-[14px] me-1">
                02
              </span>{" "}
              Tech stack
            </h2>

            <div className="flex flex-wrap gap-3">
              {project?.technologies.map((tech, index) => (
                <div
                  key={index}
                  className=" text-[14px] font-semibold flex items-center bg-white border rounded-full  px-5 py-2 justify-center gap-1"
                >
                  <span>
                    <Code2 className="w-4 text-(--project-color)" />
                  </span>
                  {tech}
                </div>
              ))}
            </div>
          </div>
          {/* ------------------- */}

          <Carsoul project={project} />

          {/* ------------------- */}

          <div className="my-7">
            <h2 className="text-(--heading-color) text-[26px] font-[syne] font-bold my-9 tracking-[-0.04em]">
              <span className="text-(--project-color) text-[14px] me-1">
                04
              </span>
              Key features
            </h2>
            <div className="flex flex-col  gap-5 ">
              {project?.features.map((feature, index) => (
                <div
                  key={index}
                  className="  flex flex-col  bg-white border rounded-2xl  p-6  gap-4 hover:-translate-y-1 hover:shadow-md duration-300 "
                >
                  <span className="text-(--project-color) text-[28px] me-1 font-[syne] font-bold">
                    {feature.number}
                  </span>
                  <h4 className="text-(--heading-color) text-[20px] font-[syne] font-bold tracking-[-0.04em]">
                    {" "}
                    {feature.title}
                  </h4>
                  <p className=" text-[14px] text-[#676767] leading-[1.7] ">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* ------------------- */}

          <div className="my-7">
            <h2 className="text-(--heading-color) text-[26px] font-[syne] font-bold my-9 tracking-[-0.04em]">
              <span className="text-(--project-color) text-[14px] me-1">
                05
              </span>
              Highlights
            </h2>
            <div className="flex flex-col  gap-5 ">
              {project?.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="  flex items-center   bg-white border rounded-2xl  p-6  gap-4 hover:translate-x-2 hover:border-(--project-color) duration-300 "
                >
                  <span
                    className={`text-[${project.color}] text-[28px] me-1 font-[syne] font-bold `}
                  >
                    <CheckCircle2Icon style={{ color: project.color }} />
                  </span>
                  <span className="text-(--heading-color) text-[14px] font-[syne] font-bold tracking-[-0.04em]">
                    {" "}
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* ------------------- */}

          <div className="my-9">
            <p className="text-[#676767] text-[12px] uppercase my-3 font-bold">
              All projects
            </p>
            <div className="flex flex-col  gap-5 ">
              {projectsData?.map((projects, index) => (
                <Link key={index} href={`${projects?.id}`}>
                  {" "}
                  <div
                    className={`flex items-center justify-between   bg-white border rounded-2xl  p-3  gap-4 hover:-translate-y-1 hover:text-[#a1a1a1] duration-300 ${projects.id == id ? "border-(--project-color) " : ""} `}
                  >
                    <div className="flex items-center ">
                      <span className="text-(--project-color) text-[28px] me-1 font-[syne] font-bold border-(--project-color)">
                        <Image
                          src={projects!.icon || ""}
                          alt="priject icon"
                          width={40}
                          height={60}
                          className="w-5 "
                        ></Image>
                      </span>
                      <span className="text-[14px] font-[syne] font-semibold tracking-[-0.04em]">
                        {" "}
                        {projects.title}
                      </span>{" "}
                    </div>
                    <div className="">
                      {" "}
                      {projects.id == id ? (
                        <span className="text-[12px] text-[#444] ">
                          viewing
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
