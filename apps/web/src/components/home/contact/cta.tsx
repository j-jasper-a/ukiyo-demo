"use client";

import { Button } from "@/components/common/button";
import { HeadingTertiary } from "@/components/common/heading-tertiary";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function CallToAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <div className="relative flex aspect-square flex-col items-center justify-center">
      <img
        src={"/assets/images/contact/exterior.webp"}
        alt="Contact"
        width={1080}
        height={1080}
        className="absolute left-0 top-0 -z-20 object-cover"
      />
      <div className="bg-dark/80 absolute left-0 top-0 -z-10 h-full" />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        layout={"position"}
        className="flex w-fit flex-col items-center gap-4 text-center sm:gap-8"
      >
        <HeadingTertiary text="You are invited and welcome." />
        <div>
          <p className="text-brand text-sm font-bold uppercase">Lunch</p>
          <p>11:30 AM - 3:30 PM</p>
        </div>
        <div>
          <p className="text-brand text-sm font-bold uppercase">Dinner</p>
          <p>7:30 PM - 11:30 PM</p>
        </div>
        <Button>Call Us</Button>
      </motion.div>
    </div>
  );
}
