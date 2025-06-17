import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { SectionTitle } from "@/components/common/section-title";
import { ExperienceCard } from "@/components/home/experience/experience-card";

export function Experience() {
  return (
    <Section id="experience">
      <SectionTitle text="Experience" />
      <Container className="flex flex-col gap-8 px-4 lg:gap-16 lg:px-8">
        <ExperienceCard
          heading="Exquisite Culinary Delights"
          tag="Ambience"
          text="Immerse yourself in an atmosphere of refined elegance and enjoy our exquisite culinary creations that are a perfect blend of innovation and tradition."
          imageSrc="/assets/images/experience/ambience.webp"
          imageAlt="An inviting and cozy ambiance with warm lighting and elegant decor."
        />
        <ExperienceCard
          heading="Attentive and Personalized Service"
          tag="Service"
          text="Our dedicated team is committed to providing you with unparalleled service, ensuring that your dining experience is personalized, seamless, and memorable."
          imageSrc="/assets/images/experience/service.webp"
          imageAlt="A photo of a senior waiter at Ukiyo providing top-tier service."
          reversed
        />
        <ExperienceCard
          heading="Culinary Mastery at its Finest"
          tag="Mastery"
          text="Experience the epitome of culinary artistry as our executive chef, Watanabe Kazuya, masterfully crafts each dish with precision, passion, and a deep understanding of flavors."
          imageSrc="/assets/images/experience/mastery.webp"
          imageAlt="A photo of Ukiyo's executive chef, Watanabe Kazuya, in the kitchen symbolizing mastery."
        />
      </Container>
    </Section>
  );
}
