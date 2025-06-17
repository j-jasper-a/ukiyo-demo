"use client";

import { Container } from "@/components/common/container";
import { Logo } from "@/components/common/logo";
import { navLinks } from "@/data/navigation";
import {
  XIcon as CloseIcon,
  ListIcon as MenuIcon,
} from "@phosphor-icons/react";
import { useCallback, useEffect, useState } from "react";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);

  const scrollHandler = useCallback(() => {
    if (window.scrollY >= 150) {
      setIsBackgroundVisible(true);
    } else {
      setIsBackgroundVisible(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, [scrollHandler]);

  return (
    <div
      className={`fixed z-20 sm:hidden ${
        isBackgroundVisible
          ? "bg-dark/80 backdrop-blur transition-all duration-300"
          : ""
      }`}
    >
      <Container className="flex flex-row justify-between p-4">
        <Logo small white className="z-10 h-8" />
        <button onClick={() => setIsOpen(!isOpen)} className="z-10 w-fit">
          {isOpen ? (
            <CloseIcon className="h-8 w-8" />
          ) : (
            <MenuIcon className="h-8 w-8" />
          )}
        </button>
      </Container>
      {isOpen && (
        <div className="bg-dark absolute left-0 top-0 flex h-screen flex-col items-center justify-center gap-8 duration-300">
          {navLinks.map(({ text, href }) => (
            <a
              href={href}
              key={text}
              className="w-fit text-2xl uppercase"
              onClick={() => setIsOpen(false)}
            >
              {text}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
