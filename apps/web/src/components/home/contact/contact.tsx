"use client";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { SectionTitle } from "@/components/common/section-title";
import { CallToAction } from "@/components/home/contact/cta";
import { InfoCard } from "@/components/home/contact/info-card";
import {
  MailboxIcon as MdEmail,
  MapPinIcon as MdLocationPin,
  PhoneIcon as MdPhone,
} from "@phosphor-icons/react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function Contact() {
  const infoRef = useRef(null);
  const isInView = useInView(infoRef, {
    once: true,
  });

  return (
    <Section id="contact">
      <SectionTitle text="Contact" />
      <Container className="px-4 sm:px-8">
        <div className="grid grid-cols-1 overflow-hidden sm:grid-cols-2">
          <CallToAction />
          <motion.div
            ref={infoRef}
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            layout={"position"}
            className="flex aspect-square flex-col items-center justify-center"
          >
            <div className="flex w-fit flex-col gap-4 text-lg">
              <InfoCard>
                <MdLocationPin className="text-brand h-8 w-8" />
                <p>
                  12/3, 4th Avenue,
                  <br />
                  Fivetown, Dhaka-6789,
                  <br />
                  Bangladesh{" "}
                </p>
              </InfoCard>
              <InfoCard>
                <MdEmail className="text-brand h-8 w-8" />
                <p>contact@ukiyo.com</p>
              </InfoCard>
              <InfoCard>
                <MdPhone className="text-brand h-8 w-8" />
                <p>+880-1234-567890</p>
              </InfoCard>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
