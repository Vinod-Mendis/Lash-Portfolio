
import About from "@/components/About";
import Songs from "@/components/Songs";
import Performances from "@/components/Performances";
import Contact from "@/components/Contact";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";

function Page() {
  return (
    <>
      {/* <Preloader /> */}
      <div className="relative z-0">
        <Hero/>
        <About />
        <Songs />
        <Performances />
        <Contact />
      </div>
    </>
  );
}

export default Page;
