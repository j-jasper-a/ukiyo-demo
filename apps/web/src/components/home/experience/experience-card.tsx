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
  const isImageInView = useInView(imageRef, {
    once: true,
  });

  return (
    <div className="grid grid-cols-1 items-center gap-8 overflow-hidden lg:grid-cols-2 lg:gap-16">
      <motion.div
        ref={imageRef}
        initial={{ opacity: 0, x: reversed ? 100 : -100 }}
        animate={isImageInView ? { opacity: 1, x: 0 } : {}}
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
        initial={{ opacity: 0, x: reversed ? -100 : 100 }}
        animate={isImageInView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        layout={"position"}
        className={`flex h-fit flex-col justify-between gap-4 lg:gap-8 ${
          reversed ? "lg:-order-1" : ""
        }`}
      >
        <div className="flex flex-col gap-4 lg:gap-8">
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
