import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import AskedQuestions from "@/components/AskedQuestions/AskedQuestions";
import GridFlex from "@/components/GridFlex/GridFlex";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <section>
        <Navbar />
      </section>

      <section>
        <Hero />
      </section>
      <section>
        <AskedQuestions />
      </section>
      <section>
        <GridFlex />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
