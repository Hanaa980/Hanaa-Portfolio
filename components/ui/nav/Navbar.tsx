// // "use client";

// // import { useState } from "react";

// // import Link from "next/link";

// // import {
// //   NavigationMenu,
// //   // NavigationMenuContent,
// //   NavigationMenuItem,
// //   NavigationMenuLink,
// //   NavigationMenuList,
// // } from "@/components/ui/navigation-menu";

// // export default function Navbar() {
// //   function menu() {
// //     setIsOpen(!isOpen);
// //     console.log(isOpen);
// //   }

// //   const [isOpen, setIsOpen] = useState(false);
// //   // fixed  top-5 w-[30%] flex m-auto
// //   return (
// //     <>
// //       <header className="flex justify-center ">
// //         <div className="fixed top-5 w-[30%] ">
// //           <div className=" flex items-center justify-between  rounded-full bg-white  px-5 py-2">
// //             <h2 className="text-[14px] font-bold mr-1">Hanaa Ragab</h2>

// //             <button onClick={menu} className="block md:hidden ">
// //               {isOpen ? "x" : "☰"}
// //             </button>

// //             <div
// //               className={` flex flex-col
// //          absolute w-full md:w-auto
// //            md:static
// //         `}
// //             >
// //               <NavigationMenu>
// //                 <NavigationMenuList>
// //                   <NavigationMenuItem
// //                     className={`absolute right-5 -left-5 top-7 md:static  md:flex md:flex-row  m ${isOpen ? " opacity-100 " : "opacity-0 -translate-y-1.25 md:opacity-100 md:translate-y-0 "}
// //          bg-white top-150- text-gray-500 `}
// //                   >
// //                     <NavigationMenuLink
// //                       render={
// //                         <Link onClick={() => setIsOpen(false)} href="">
// //                           Work
// //                         </Link>
// //                       }
// //                     />
// //                     <NavigationMenuLink
// //                       render={
// //                         <Link onClick={() => setIsOpen(false)} href="">
// //                           About
// //                         </Link>
// //                       }
// //                     />
// //                     <NavigationMenuLink
// //                       render={
// //                         <Link onClick={() => setIsOpen(false)} href="">
// //                           Cntact
// //                         </Link>
// //                       }
// //                     />
// //                     <NavigationMenuLink
// //                       render={
// //                         <Link
// //                           className="text-white  bg-black! px-3 block  border rounded-full! "
// //                           onClick={() => setIsOpen(false)}
// //                           href=""
// //                         >
// //                           Get in touch
// //                         </Link>
// //                       }
// //                     />
// //                   </NavigationMenuItem>
// //                 </NavigationMenuList>
// //               </NavigationMenu>
// //             </div>
// //           </div>
// //         </div>
// //       </header>
// //     </>
// //   );
// // }

// "use client";

// import { Button } from "@/components/ui/button";
// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuList,
// } from "@/components/ui/navigation-menu";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { cn } from "@/lib/utils";
// import * as React from "react";
// import { useEffect, useRef, useState } from "react";

// // Hamburger icon component for mobile
// const HamburgerIcon = ({
//   className,
//   ...props
// }: React.SVGAttributes<SVGElement>) => (
//   <svg
//     aria-label="Menu"
//     className={cn("pointer-events-none", className)}
//     fill="none"
//     height={16}
//     role="img"
//     stroke="currentColor"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     strokeWidth="2"
//     viewBox="0 0 24 24"
//     width={16}
//     xmlns="http://www.w3.org/2000/svg"
//     {...(props as any)}
//   >
//     <path
//       className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
//       d="M4 12L20 12"
//     />
//     <path
//       className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
//       d="M4 12H20"
//     />
//     <path
//       className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
//       d="M4 12H20"
//     />
//   </svg>
// );

// export interface NavbarNavLink {
//   href: string;
//   label: string;
// }

// // روابط الصفحة المفتوحة
// const portfolioLinks: NavbarNavLink[] = [
//   { href: "#work", label: "Work" },
//   { href: "#about", label: "About" },
//   { href: "#contact", label: "Contact" },
// ];

// export const Navbar = React.forwardRef<
//   HTMLElement,
//   React.HTMLAttributes<HTMLElement>
// >(({ className, ...props }, ref) => {
//   const [isMobile, setIsMobile] = useState(false);
//   const containerRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const checkWidth = () => {
//       if (containerRef.current) {
//         const width = window.innerWidth; // Changed to window width to detect screen size accurately for the floating nav
//         setIsMobile(width < 768);
//       }
//     };
//     checkWidth();
//     window.addEventListener("resize", checkWidth);
//     return () => window.removeEventListener("resize", checkWidth);
//   }, []);

//   const combinedRef = React.useCallback(
//     (node: HTMLElement | null) => {
//       containerRef.current = node;
//       if (typeof ref === "function") ref(node);
//       else if (ref) ref.current = node;
//     },
//     [ref],
//   );

//   return (
//     <header
//       className={cn(
//         // جعلنا النافبار عائم (Floating) في المنتصف وبحواف دائرية (Pill-shape)
//         "fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[max-content] min-w-[320px] rounded-full border bg-white/90 backdrop-blur-md px-3 py-2 shadow-sm [&_*]:no-underline transition-all",
//         className,
//       )}
//       ref={combinedRef}
//       {...props}
//     >
//       <div className="flex items-center justify-between gap-4 sm:gap-8">
//         {/* Logo / Name */}
//         <div className="flex items-center gap-2 pl-2">
//           <a
//             href="#"
//             className="font-semibold text-gray-900 hover:text-black transition-colors cursor-pointer text-base whitespace-nowrap"
//           >
//             Hanaa Ragab
//           </a>
//         </div>

//         {/* Center Links (Desktop) */}
//         {!isMobile && (
//           <NavigationMenu className="flex">
//             <NavigationMenuList className="gap-2">
//               {portfolioLinks.map((link, index) => (
//                 <NavigationMenuItem key={index}>
//                   <a
//                     href={link.href}
//                     className="group inline-flex h-9 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-gray-500 transition-colors hover:text-black focus:text-black cursor-pointer"
//                   >
//                     {link.label}
//                   </a>
//                 </NavigationMenuItem>
//               ))}
//             </NavigationMenuList>
//           </NavigationMenu>
//         )}

//         {/* Right side (CTA & Mobile Menu) */}
//         <div className="flex items-center gap-2">
//           {/* Get in touch Button */}
//           <Button
//             className="text-sm font-medium px-5 h-9 rounded-full bg-black text-white hover:bg-black/90 shadow-none"
//             onClick={() => (window.location.href = "#get-in-touch")}
//           >
//             Get in touch
//           </Button>

//           {/* Mobile menu trigger */}
//           {isMobile && (
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Button
//                   className="h-9 w-9 rounded-full hover:bg-gray-100"
//                   size="icon"
//                   variant="ghost"
//                 >
//                   <HamburgerIcon />
//                 </Button>
//               </PopoverTrigger>
//               <PopoverContent align="end" className="w-48 p-2 rounded-xl mt-2">
//                 <NavigationMenu className="max-w-none">
//                   <NavigationMenuList className="flex-col items-start gap-1">
//                     {portfolioLinks.map((link, index) => (
//                       <NavigationMenuItem className="w-full" key={index}>
//                         <a
//                           href={link.href}
//                           className="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-black"
//                         >
//                           {link.label}
//                         </a>
//                       </NavigationMenuItem>
//                     ))}
//                   </NavigationMenuList>
//                 </NavigationMenu>
//               </PopoverContent>
//             </Popover>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// });

// Navbar.displayName = "Navbar";

// // Demo
// export function Demo() {
//   return (
//     <div className="min-h-screen bg-gray-50 relative">
//       <Navbar />
//     </div>
//   );
// }
