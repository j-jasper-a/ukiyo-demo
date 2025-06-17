"use client";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { SectionTitle } from "@/components/common/section-title";
import { MenuItemDisplay } from "@/components/home/menu/menu-item-display";
import { MenuNavigationLink } from "@/components/home/menu/menu-navigation-link";
import { menuData, type MenuItem } from "@/data/menu";
import { useInView } from "motion/react";
import { useRef, useState } from "react";

export function Menu() {
  const [activeMenuSection, setActiveMenuSection] = useState<
    "starters" | "entrees" | "sides" | "beverages"
  >("starters");
  const navRef = useRef(null);
  const navSentinelRef = useRef(null);
  const navIsInView = useInView(navRef, {
    initial: false,
  });
  const sentinelIsInView = useInView(navSentinelRef, {
    initial: false,
    margin: "-200px 0px 0px 0px",
  });

  const isNavInView = navIsInView && !sentinelIsInView;

  return (
    <Section id="menu">
      <SectionTitle text="Menu" />
      <div
        ref={navSentinelRef}
        className="pointer-events-none h-[1px] w-full opacity-0"
      />
      <div
        ref={navRef}
        className={`sticky left-0 top-16 z-10 origin-left transition-all duration-500 lg:top-20 ${
          isNavInView ? "bg-brand text-dark px-4 py-2 lg:px-16" : ""
        }`}
      >
        <Container className="flex h-full flex-row items-center justify-center gap-4 lg:gap-8">
          <MenuNavigationLink
            text="Starters"
            active={activeMenuSection === "starters"}
            onClick={() => setActiveMenuSection("starters")}
          />
          <MenuNavigationLink
            text="Entrees"
            active={activeMenuSection === "entrees"}
            onClick={() => setActiveMenuSection("entrees")}
          />
          <MenuNavigationLink
            text="Sides"
            active={activeMenuSection === "sides"}
            onClick={() => setActiveMenuSection("sides")}
          />
          <MenuNavigationLink
            text="Beverages"
            active={activeMenuSection === "beverages"}
            onClick={() => setActiveMenuSection("beverages")}
          />
        </Container>
      </div>
      <Container className="grid grid-cols-1 gap-8 overflow-x-hidden px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="aspect-square h-full lg:aspect-auto">
          <img
            src={`/assets/images/menu/${activeMenuSection}.webp`}
            width={1500}
            height={844}
            alt={`A photo demonstrating ${activeMenuSection} available on the menu`}
            className="h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          {menuData[activeMenuSection].map((menuItem: MenuItem) => (
            <MenuItemDisplay key={menuItem.id} menuItem={menuItem} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
