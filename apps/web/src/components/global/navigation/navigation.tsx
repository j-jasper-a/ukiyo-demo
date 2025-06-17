"use client";

import { Container } from "@/components/common/container";
import { Logo } from "@/components/common/logo";
import { NavigationLink } from "@/components/common/navigation-link";
import { navLinks } from "@/data/navigation";
import { motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { buttonStyle } from "../../common/button";

export function Navigation() {
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY >= 150) {
      setIsBackgroundVisible(true);
    } else {
      setIsBackgroundVisible(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <motion.div
      layout
      className={`fixed left-0 top-0 z-20 hidden lg:block ${
        isBackgroundVisible ? "bg-dark/80 shadow-md backdrop-blur" : "mt-8"
      }`}
    >
      <Container large>
        <nav className="hidden h-20 grid-cols-3 items-center px-4 lg:grid lg:px-8">
          <Logo />
          <ul className="flex w-fit flex-row gap-4 justify-self-center whitespace-nowrap font-bold uppercase lg:gap-16">
            {navLinks &&
              navLinks.map(({ text, href }) => (
                <NavigationLink key={href} text={text} href={href} />
              ))}
          </ul>
          <a href="/#contact" className={`${buttonStyle()} justify-self-end`}>
            Book a Table
          </a>
        </nav>
      </Container>
    </motion.div>
  );
}
