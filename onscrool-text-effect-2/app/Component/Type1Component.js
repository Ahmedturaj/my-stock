import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";

const Type1Component = () => {
  // let lenis;

  useEffect(() => {
    // Ensure SplitType runs only in the browser
    let lenis;
    const text = new SplitType(".target");
    const chars = text.chars;

    const smoothing = () => {
      lenis = new Lenis({ lerp: 0.2, smooth: true });

      lenis.on("scroll", () => ScrollTrigger.update());
      const scrollFn = (time) => {
        lenis.raf(time);
        requestAnimationFrame(scrollFn);
      };
      requestAnimationFrame(scrollFn);
    };

    const scroll = () => {
      gsap.fromTo(
        chars,
        {
          willChange: "opacity, transform",
          opacity: 0.2,
          z: -80,
        },
        {
          ease: "back.out(1.2)",
          opacity: 1,
          z: 0,
          stagger: 0.04,
          scrollTrigger: {
            trigger: ".target",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    };

    const init = () => {
      smoothing();
      scroll();
    };

    init();

    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []); // Ensures effect runs only once on mount

  return (
    <div className="">
      <div className="uppercase absolute top-0 w-full h-[100vh] flex justify-center items-center">
        Turning Ideas into Powerful Web Solutions
      </div>
      <div className="flex flex-col mt-[500px] relative px-8 py-6">
        <h2 className="content_title text-[8vw] leading-[0.8] text-center grid gap-8">
          <span className="target uppercase">Web developer</span>
          <span className="target uppercase">Frontend developer</span>
          <span className="target uppercase mb-24">Backend developer</span>
        </h2>
      </div>
      <div className="flex flex-col w-screen relative px-8 py-6 mb-80">
        <p className="max-w-lg mx-auto my-6 text-[1.25rem] leading-normal text-justify">
          I am SK Toukir Ahmed Turaj, a passionate Web Developer skilled in MERN
          stack, React.js, and Next.js. Eager to learn Laravel, React Native,
          and Vue.js. With experience at Acronation & IT Way BD, I strive to
          build seamless digital experiences. Also, an aspiring entrepreneur in
          event management.
        </p>
      </div>
    </div>
  );
};

export default Type1Component;
