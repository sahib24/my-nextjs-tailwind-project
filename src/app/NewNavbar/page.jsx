import NewNavbar from "./NewNavbar";

import Hero from "@/components/Hero/Hero";
import AskedQuestions from "@/components/AskedQuestions/AskedQuestions";
import GridFlex from "@/components/GridFlex/GridFlex";
import AutoIcon from "@/components/AutoIcon/AutoIcon";
import Testimonials from "@/components/Testimonials/Testimonials";
import Testimonials2 from "@/components/Testimonials2/Testimonials2";

export default function NewNavbarPage() {
  return (
    <div>
      <NewNavbar />
      <GridFlex />

      <AskedQuestions />

      <Hero />

      <AutoIcon />

      <Testimonials />

      <Testimonials2 />
    </div>
  );
}
