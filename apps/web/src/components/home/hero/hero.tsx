import { Container } from "@/components/common/container";
import { HeadingPrimary } from "@/components/common/heading-primary";

export function Hero() {
  return (
    <div id="home" className="relative h-screen overflow-hidden">
      <div className="to-dark absolute -z-10 h-full w-full bg-gradient-to-b from-black/50 via-black/50" />
      <video
        autoPlay
        loop
        muted
        src="/assets/videos/backdrop.mp4"
        className="absolute left-0 top-0 -z-20 h-full w-full object-cover"
      />
      <Container className="flex h-full flex-col items-center justify-center px-4 sm:px-8">
        <HeadingPrimary />
      </Container>
    </div>
  );
}
