import { projects } from "@/lib/data";
import Intro from "./_components/Intro/Intro";
import Projects from "./_components/Projects/Projects";
import TechStack from "./_components/TechStack/TechStack";

export default function Home() {
  return (
    <>
      <Intro />
      <Projects projects={projects} />
      <TechStack />
    </>
  )
}