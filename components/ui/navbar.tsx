"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
// import { Button } from "@base-ui/react";
import { Button } from "@/components/ui/button";
// import { Button, PopoverTrigger } from "@base-ui/react";
import Link from "next/link";
import * as React from "react";
import { useEffect, useRef, useState } from "react";

// Simple logo component for the navbar
// const Logo = (props: React.SVGAttributes<SVGElement>) => {
//   return (
//     <svg
//       aria-label="Logo"
//       role="img"
//       fill="none"
//       height="1em"
//       viewBox="0 0 324 323"
//       width="1em"
//       xmlns="http://www.w3.org/2000/svg"
//       {...(props as any)}
//     >
//       <rect fill="currentColor" height="323" rx="161.5" width="323" x="0.5" />
//       <circle
//         cx="162"
//         cy="161.5"
//         fill="white"
//         r="60"
//         className="dark:fill-black"
//       />
//     </svg>
//   );
// };

// Hamburger icon component
const HamburgerIcon = ({
  className,
  ...props
}: React.SVGAttributes<SVGElement>) => (
  <svg
    aria-label="Menu"
    className={cn("pointer-events-none", className)}
    fill="none"
    height={16}
    role="img"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width={16}
    xmlns="http://www.w3.org/2000/svg"
    {...(props as any)}
  >
    <path
      className="origin-center -translate-y- transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-315"
      d="M4 12L20 12"
    />
    <path
      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
      d="M4 12H20"
    />
    <path
      className="origin-center translate-y-1.75 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-135"
      d="M4 12H20"
    />
  </svg>
);

// Types
export interface NavbarNavLink {
  href: string;
  label: string;
  active?: boolean;
}

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks?: NavbarNavLink[];
  signInText?: string;
  signInHref?: string;
  ctaText?: string;
  ctaHref?: string;
  onSignInClick?: () => void;
  onCtaClick?: () => void;
}

// Default navigation links
const defaultNavigationLinks: NavbarNavLink[] = [
  // { href: "#", label: "Home", active: true },
  { href: "#project", label: "work" },
  { href: "#about", label: "about" },
  { href: "#contact", label: "contact" },
];

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
      // logo = <Logo />,
      logoHref = "#",
      navigationLinks = defaultNavigationLinks,
      signInText = "Sign In",
      signInHref = "#signin",
      ctaText = "Get Started",
      ctaHref = "#get-started",
      onSignInClick,
      onCtaClick,
      ...props
    },
    ref,
  ) => {
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLElement>(null);

    // useEffect(() => {
    //   const checkWidth = () => {
    //     if (containerRef.current) {
    //       const width = containerRef.current.offsetWidth;
    //       setIsMobile(width < 768); // 768px is md breakpoint
    //     }
    //   };

    //   checkWidth();

    //   const resizeObserver = new ResizeObserver(checkWidth);
    //   if (containerRef.current) {
    //     resizeObserver.observe(containerRef.current);
    //   }
    //   return () => {
    //     resizeObserver.disconnect();
    //   };
    // }, []);
    // ✅ الجديد: بيقيس الشاشة كاملة بدقة
    useEffect(() => {
      const checkWidth = () => {
        setIsMobile(window.innerWidth < 768);
      };

      checkWidth(); // فحص أولي أول ما الصفحة تفتح
      window.addEventListener("resize", checkWidth);

      return () => {
        window.removeEventListener("resize", checkWidth);
      };
    }, []);

    // Combine refs
    const combinedRef = React.useCallback(
      (node: HTMLElement | null) => {
        containerRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref],
    );
    const scrollToSection = (e: React.MouseEvent, href: string) => {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
    return (
      <header
        className={cn(
          " fixed top-5 inset-x-0 shadow-md mx-auto rounded-full z-50 md:w-125 w-41.25  border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 px-5 pe-3 no-underline ",
          className,
        )}
        ref={combinedRef}
        {...(props as any)}
      >
        <div className=" relative  w-full m-auto py-1">
          <div className="container mx-auto flex  items-center justify-between w-full">
            {/* Left side */}
            <div className="flex items-center justify-between w-full ">
              <Link 
                // type="button"
                href={'/#home'}
                className="flex items-center space-x-2 text-primary hover:text-primary/90 transition-colors cursor-pointer"
                // onClick={(e) => e.preventDefault()}
              >
                {/* <div className="text-2xl">{logo}</div> */}
                <span className="w-auto font-bold text-[15px] ">
                  Hanaa Ragab
                </span>
              </Link>
              {/* Navigation menu */}
              {!isMobile && (
                <NavigationMenu className="flex w-[70%] items-center text-[13px] text-[#1A1A1A] ">
                  <NavigationMenuList className="gap-5 w-full  ">
                    {navigationLinks.map((link, index) => (
                      <NavigationMenuItem key={index}>
                        <Link
                          // type="button"
                          // onClick={(e) => handleScroll(e, link.href)}
                          href={link.href}
                          className={cn(
                            "group inline-flex h-9 w-max items-center p-1 justify-center rounded-md  text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer no-underline",
                            link.active
                              ? "bg-accent text-accent-foreground"
                              : "text-foreground/80 hover:text-foreground",
                          )}
                          onClick={(e) => scrollToSection(e, link.href)}
                        >
                          {link.label}
                        </Link>
                      </NavigationMenuItem>
                    ))}
                    <Link
                      className="text-[12px] font-semibold  md:px-4.5 md:py-2.25 shadow-sm text-white  bg-black! px-3 block  border rounded-full!"
                      href={""}
                    >
                      {/* {ctaText} */}
                      Get in touch
                    </Link>
                  </NavigationMenuList>
                </NavigationMenu>
              )}
            </div>

            <div className="flex items-center gap-2  ">
              {/* Mobile menu trigger */}
              {isMobile && (
                <Popover>
                  <PopoverTrigger
                    render={
                      <Button
                        className="h-9 w-9 rounded-full hover:bg-red-100/50"
                        size="icon"
                        variant="ghost"
                      />
                    }
                  >
                    <HamburgerIcon />
                    {/* </Button> */}
                  </PopoverTrigger>
                  <PopoverContent
                    align="start"
                    className=" p-2 -z-30 w-41.25 absolute -right-13 top-3"
                  >
                    <NavigationMenu className="max-w-none flex flex-col items-center ">
                      <NavigationMenuList className="flex-col items-start gap-1  w-full ">
                        {navigationLinks.map((link, index) => (
                          <NavigationMenuItem className="w-full" key={index}>
                            <Link
                              // type="button"
                              href={link.href}
                              className={cn(
                                "flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer no-underline",
                                link.active
                                  ? "bg-accent text-accent-foreground"
                                  : "text-foreground/80",
                              )}
                              onClick={(e) => scrollToSection(e, link.href)}
                            >
                              {link.label}
                            </Link>
                          </NavigationMenuItem>
                        ))}
                      </NavigationMenuList>
                      {/* <NavigationMenuList> */}

                      {/* </NavigationMenuList> */}
                    </NavigationMenu>
                    <Link
                      className="text-[12px] font-semibold  shadow-sm text-white  bg-black! px-3 py-2 block  border rounded-full!"
                      href={"/#contact"}
                    >
                      {/* {ctaText} */}
                      Get in touch
                    </Link>
                  </PopoverContent>
                </Popover>
              )}

              {/* Main nav */}
            </div>
          </div>
        </div>
      </header>
    );
  },
);
