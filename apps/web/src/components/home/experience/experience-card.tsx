"use client";

import { buttonStyle } from "@/components/common/button";
import { HeadingTertiary } from "@/components/common/heading-tertiary";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

type ExperienceCardProps = {
  heading: string;
  tag: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
};

export function ExperienceCard({
  heading,
  tag,
  text,
  imageSrc,
  imageAlt,
  reversed,
}: ExperienceCardProps) {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const isImageInView = useInView(imageRef, {
    once: true,
  });
  const isTextInView = useInView(textRef, {
    once: true,
  });
  const isInView = isImageInView && isTextInView;

  return (
    <div className="grid grid-cols-1 items-center gap-8 overflow-hidden sm:grid-cols-2 sm:gap-16">
      <motion.div
        ref={imageRef}
        initial={{ opacity: 0, x: reversed ? 100 : -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        layout={"position"}
        className="aspect-square"
      >
        <img src={imageSrc} alt={imageAlt} width={1080} height={1080} />
      </motion.div>
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, x: reversed ? -100 : 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        layout={"position"}
        className={`flex h-fit flex-col justify-between gap-4 sm:gap-8 ${
          reversed ? "sm:-order-1" : ""
        }`}
      >
        <div className="flex flex-col gap-4 sm:gap-8">
          <p className="text-brand font-bold uppercase">{tag}</p>
          <HeadingTertiary text={heading} />
          <p className="text-lg opacity-75">{text}</p>
        </div>
        <a href="/#contact" className={buttonStyle()}>
          Discover Ukiyo
        </a>
      </motion.div>
    </div>
  );
}
