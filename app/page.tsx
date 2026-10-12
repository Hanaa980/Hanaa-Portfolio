import { projectsData } from "./projects/projectData";

import About from "@/components/About/About";
import Contact from "@/components/contact/Contact";
import Education from "@/components/Education/Education";
import Language from "@/components/language/Language";
import Link from "next/link";
import Projects from "./projects/Projects";
import { ArrowUpRight, Sparkles } from "lucide-react";
export default function Home() {
  return (
    <>
      <main id="home" className=" px-5 md:max-w-280  mx-auto ">
        <div
          className="flex flex-col items-center justify-center gap-7.5  h-[95vh] mt-10 sm:mt-0 px-10   
         "
        >
          <div className=" border border-[#ece8e1] py-1 px-4 rounded-3xl bg-[#FFFFFFB3] flex gap-2 items-center text-[12px] ">
            <Sparkles className=" text-(--primary-color) w-3.75 " />
            <p className="text-(--secondary-color) font-semibold">
              Available for opportunities
            </p>
          </div>

          <div className="text-center">
            <h1 className="font-bold leading-[1.02] tracking-[-0.04em] font-[syne] text-[32px]">
              Frontend developer <br /> who builds with
              <span className="text-(--primary-color)"> care.</span>
            </h1>
            <p className="mb-2 md:mt-5 text-(--secondary-color) leading-[1.65] text-[17px]  text-center">
              I turn ideas into responsive, accessible web experiences using
              <br /> React, modern JavaScript, and a lot of attention to detail.
            </p>
          </div>

          <div className="flex gap-3.5 items-center flex-col sm:flex-row">
            <Link
              href={"/#project"}
              className="text-white  items-center bg-black!  gap-2  border rounded-full flex  text-[14px] font-semibold py-3.5 px-6.5  "
            >
              See my work <ArrowUpRight className="h-5 w-4.5 " />
            </Link>
            <Link
              href="mailto:hanaaragab228@gmail.com"
              className="  bg-white! border-[#ece8e1] gap-2  border rounded-full flex  text-[14px] font-semibold py-3.5 px-6.5 "
            >
              Contact me
            </Link>
          </div>

          <div className="flex gap-12 items-center ">
            <div className="flex flex-col gap-1">
              <span className="font-bold font-[syne] text-4xl  text-center">
                {projectsData.length}
              </span>
              <span className="text-[12px] uppercase text-(--secondary-color)">
                Projects shipped
              </span>
            </div>
            <div className="flex flex-col ">
              <span className="font-bold  font-[syne] text-4xl text-center">
                12+
              </span>
              <span className="text-[12px] uppercase text-(--secondary-color)">
                Technologies
              </span>
            </div>
            <div className="flex flex-col ">
              <span className="font-bold  font-[syne] text-4xl text-center">
                2026
              </span>
              <span className="text-[12px] uppercase text-(--secondary-color)">
                Graduating
              </span>
            </div>
          </div>
        </div>
        <Projects />
        <About />
        <Education />
        <Language />
        <Contact />
      </main>
    </>
  );
}
