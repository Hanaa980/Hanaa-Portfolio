import { ArrowUpRight, Calendar } from "lucide-react";
import Link from "next/link";

export default function Education() {
  return (
    <>
      <div className=" mt-30">
        <div className="my-10">
          {" "}
          <div className="flex items-center gap-2">
            <Calendar className="text-(--primary-color) w-4 h-4" />
            <span className="text-(--secondary-color) text-[12px] uppercase tracking-[0.08em] font-semibold">
              Background
            </span>
          </div>
          <h2 className="text-(--heading-color) text-[42px] font-[syne] font-bold mt-3 tracking-[-0.04em]">
            Education & <span className="text-(--primary-color)">certification.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-10  ">
          <div className="flex gap-5">
            <div className="relative p-2 border-5 border-(--primary-color) w-6 h-6 rounded-full bg-(--primary-color)  before:absolute before:left-1.75 before:top-0 before:h-33 before:w-0.5 before:bg-[#ece8e1] before:content-[''] before:-z-10">
              <div className="w-6 h-6 border-5 rounded-full absolute -top-1 -left-1"></div>
            </div>
            <div className=" flex gap-1 flex-col">
              <span className="text-(--secondary-color) text-[12px] uppercase tracking-[0.08em] font-semibold">
                Sep 2024 — Mar 2025
              </span>
              <h3 className="text-(--heading-color) text-[20px] font-[syne] font-bold  tracking-[-0.04em]">
                Front-End Development Diploma
              </h3>
              <p className="text-(--secondary-color)">Route Academy</p>
              <Link
                href="https://drive.google.com/file/d/1zfefcHfa2-m2PhhlpR9hxhDiR70CF9zk/view?usp=sharing"
                className="flex text-(--primary-color)"
              >
                View certificate <ArrowUpRight className="h-5 w-4.5 " />
              </Link>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="relative p-2 border-5 border-(--primary-color) w-6 h-6 rounded-full bg-(--primary-color) ">
              <div className="w-6 h-6 border-5 rounded-full absolute -top-1 -left-1"></div>
            </div>
            <div className="  flex gap-1 flex-col">
              <span className="text-(--secondary-color) text-[12px] uppercase tracking-[0.08em] font-semibold">
                Bachelor’s · Gratuated 2026
              </span>
              <h3 className="text-(--heading-color) text-[20px] font-[syne] font-bold tracking-[-0.04em]">
                Cairo University
              </h3>
              <p className="text-(--secondary-color)">
                Faculty of Arts, Spanish Department
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
