"use client";

import { useEffect, useState } from "react";

export function HeadingPrimary() {
  const [copyIndex, setCopyIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const copies = [
    "The taste of Kyoto on your plate",
    "A memory of elegance in flavors",
    "The harmony of colors and tastes",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setCopyIndex((prevIndex) => (prevIndex + 1) % copies.length);
        setIsFadingOut(false);
      }, 500);
    }, 5000);

    return () => {
      clearTimeout(interval);
      clearInterval(interval);
    };
  }, [copies.length]);

  return (
    <h1
      className={`font-special text-center text-[clamp(2.5rem,4vw,5rem)] drop-shadow-2xl transition-opacity duration-500 ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {copies[copyIndex]}
    </h1>
  );
}
