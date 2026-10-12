import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";
import { GithubIcon } from "../icons/lucide-github";
import { LinkedinIcon } from "../icons/lucide-linkedin";
import { Card } from "../ui/card";

export default function Contact() {
  return (
    <>
      <Card id='contact' className="mt-30 bg-[#1a1a1a] mx-auto   p-10 rounded-4xl flex items-center text-center relative before:content-[''] before:absolute before:top-[-50%] before:right-[-10%] before:w-100 before:h-100 before:rounded-full before:bg-(--primary-color) before:opacity-15 before:blur-[60px]">
        <h3 className="text-white text-[42px] font-[syne] font-bold mt-3 tracking-[-0.04em] ">
          Let's build
          <span className="text-(--primary-color) block">something good.</span>
        </h3>
        <p className="text-[#B0B0B0] text-[15px]">
          Whether you have a project in mind or just want to say <br />
          hi, I'd love to hear from you.
        </p>
        <Link
          // href="mailto:hanaaragab228@gmail.com"
          href="https://wa.me/01129406714"
          className="  bg-white! border-[#ece8e1] gap-2  border rounded-full flex  text-[14px] font-semibold py-3.5 px-6.5 "
        >
          Start a conversation
          <ArrowUpRight className="h-5 w-4.5 " />
        </Link>
        <div className="flex gap-10 my-2">
          
          <Link href="mailto:hanaaragab228@gmail.com" className=" bg-[#ffffff1a] text-[9px] text-white border border-white/25 py-2 px-3 rounded-full">
            <Mail className="w-4" />
          </Link>
          <Link href='https://www.linkedin.com/in/hanaa-ragab-102413325'  className=" bg-[#ffffff1a] text-[9px] text-white border border-white/25 py-2 px-3 rounded-full">
            <LinkedinIcon className="w-4" />
          </Link>
          <Link  href='https://github.com/Hanaa980?tab=repositories' className=" bg-[#ffffff1a] text-[9px] text-white border border-white/25 py-2 px-3 rounded-full">
            <GithubIcon className="w-4" />
          </Link>
        </div>
      </Card>
    </>
  );
}
