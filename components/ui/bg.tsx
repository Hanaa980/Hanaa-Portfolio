import React from 'react'

export default function Bg() {
  return (
    <>
    <div className="  fixed inset-0  -z-50 ">
          <div className="w-105 h-105 bg-[#e0785e] rounded-[50%]  absolute -top-15 -right-20 blur-[80px]   opacity-[0.35]  animate-[float_18s_ease-in-out_infinite] "></div>
          <div className="w-95 h-95  bg-[#6b9dc2]  rounded-[50%] absolute -left-25 bottom-[20%] blur-[80px] delay-[-6s]  opacity-[0.35]  animate-[float_18s_ease-in-out_infinite] "></div>
          <div className="w-105 h-105 bg-[#7a9b76] rounded-[50%] absolute right-[15%] top-[45%] blur-[80px]  opacity-[0.35] delay-[-12s]    animate-[float_18s_ease-in-out_infinite] "></div>
        </div>
    </>
  )
}
