import { Hero } from "@/src/components/Hero";
import { About } from "@/src/components/About";
import { Environment } from "@/src/components/Environment";
import { NewsSection } from "@/src/components/News";
import { Collaboration } from "@/src/components/Collaboration";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      {/* <Environment /> */}
      <NewsSection />
      <Collaboration />
    </>
  );
}
