import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import AskedQuestions from "@/components/AskedQuestions/AskedQuestions";
import GridFlex from "@/components/GridFlex/GridFlex";
// import AutoIcon from "@/components/AutoIcon/AutoIcon";
import Testimonials from "@/components/Testimonials/Testimonials";
import Testimonials2 from "@/components/Testimonials2/Testimonials2";
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
        {/* <LayoutPractice /> */}
      </section>

      {/* <section>
        <AutoIcon />
      </section> */}

      <section>
        <Testimonials />
      </section>
      <section>
        <Testimonials2 />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
