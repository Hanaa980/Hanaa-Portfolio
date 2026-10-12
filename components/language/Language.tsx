import { Card, CardDescription, CardHeader } from "../ui/card";

export default function Language() {
  return (
    <>
      <Card className=" mx-auto mt-30  p-5">
        <CardHeader>
          <h4 className="text-(--secondary-color) text-[12px] uppercase tracking-[0.08em]  my-2">
            Languages
          </h4>
        </CardHeader>
        <CardDescription className="flex gap-5 flex-wrap justify-center">
          <div className="flex gap-2 bg-[#F5F3EF] text-[12px] text-[#555] py-2 px-3 rounded-full">
            <span className="font-bold">Arabic </span>
            <span>Native</span>
          </div>
          <div className="flex gap-2 bg-[#F5F3EF] text-[12px] text-[#555] py-2 px-3 rounded-full">
            <span className="font-bold">English </span>
            <span>Intermediate</span>{" "}
          </div>
          <div className="flex gap-2 bg-[#F5F3EF] text-[12px] text-[#555] py-2 px-3 rounded-full">
            <span className="font-bold">Spanish </span>
            <span>Intermediate</span>{" "}
          </div>
        </CardDescription>
      </Card>
    </>
  );
}
