import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CodeXml, GraduationCap, Heart, MapPin } from "lucide-react";
export default function About() {
  const techStack: string[] = [
   'React', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'SASS', 
    'Tailwind CSS', 'Bootstrap', 'Material UI (MUI)', 'Shadcn/UI', 'Flowbite', 
    'Redux Toolkit', 'Context API', 'React Router', 'Formik', 'Yup', 'REST APIs', 
    'AJAX', 'JSON', 'Axios', 'Git', 'GitHub', 'Figma', 'Responsive Design'
  ];
  return (
    <>
      <div className="mt-30" id="about">
        <div className=" ">
          {" "}
          <div className="flex items-center gap-2">
            <Heart className="text-(--primary-color) w-4 h-4" />
            <span className="text-(--secondary-color) text-[12px] uppercase tracking-[0.08em] font-semibold">
              About Me
            </span>
          </div>
          <h2 className="text-(--heading-color) text-[42px] font-[syne] font-bold mt-3 tracking-[-0.04em]">
            Details make <span className="text-(--primary-color)">the difference.</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-5 mt-10">
          <Card className=" mx-auto lg:w-2/3 w-full  p-5">
            <CardHeader>
              <CardDescription className="flex flex-col gap-3  text-[15px] text-[#444444] leading-[1.7] ">
                <p>
                  I'm a junior frontend developer based in
                  <span className="font-bold"> Giza, Egypt,</span> with hands-on
                  experience building responsive web applications using React
                  and modern JavaScript.
                </p>
                <p>
                  I care about clean code, reusable components, and making
                  interfaces that work beautifully across every screen size. My
                  best work happens where thoughtful design meets practical
                  engineering.
                </p>
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex gap-5 flex-wrap justify-center">
              <div className="flex gap-2 bg-[#F5F3EF] text-[12px] text-[#555] py-2 px-3 rounded-full">
                <MapPin className="text-(--primary-color) w-5 h-5" />
                <span>Giza, Egypt</span>
              </div>
              <div className="flex gap-2 bg-[#F5F3EF] text-[12px] text-[#555] py-2 px-3 rounded-full">
                <GraduationCap className="text-(--primary-color) w-5 h-5" />
                <span>Cairo University</span>
              </div>
              <div className="flex gap-2 bg-[#F5F3EF] text-[12px] text-[#555] py-2 px-3 rounded-full">
                <CodeXml className="text-(--primary-color) w-5 h-5" />

                <span>Frontend focused</span>
              </div>
            </CardFooter>
          </Card>
          <Card className="bg-(--heading-color) mx-auto w-full p-5 rounded-2xl md:w-3/4 lg:w-2/4">
            <h4 className="text-(--secondary-color) text-[12px] uppercase tracking-[0.08em] font-semibold my-2">
              Tech I work with
            </h4>
            <div className="flex gap-2 flex-wrap w-[90%] py-2">
              {techStack.map((skill, index) => (
                <span
                  key={index}
                  className=" bg-[#ffffff1a] text-[12px] text-white border border-white/25 py-2 px-3 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
