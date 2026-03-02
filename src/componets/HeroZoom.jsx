import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useMemo, useRef, useState } from "react";

import phoneImg from "../assets/phone.png";
import studentWebp from "../assets/student.jpg";

gsap.registerPlugin(ScrollTrigger);

const HeroZoom = () => {
  const sectionRef = useRef(null);
  const phoneWrapperRef = useRef(null);
  const phoneRef = useRef(null);
  const screenRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  // Mobile detect
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Light particles
  const particles = useMemo(() => {
    if (isMobile) return [];
    return Array.from({ length: 12 }, () => ({
      size: Math.random() * 0.6 + 0.3 + "rem",
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      delay: Math.random() * 4,
      duration: Math.random() * 4 + 3,
    }));
  }, [isMobile]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "+=1200",
              scrub: 0.8,
              pin: true,
              anticipatePin: 1,
            },
          });

          gsap.set(phoneWrapperRef.current, {
            scale: 4.2,
            y: "18%",
            willChange: "transform",
          });

          gsap.set(screenRef.current, {
            scale: 0.62,
            willChange: "transform",
          });

          gsap.set(phoneRef.current, {
            opacity: 0.85,
            willChange: "opacity",
          });

          tl.to(phoneWrapperRef.current, {
            scale: 1,
            y: 0,
            duration: 2.8,
            ease: "power2.inOut",
          })
            .to(
              screenRef.current,
              {
                scale: 1,
                duration: 2.8,
                ease: "power2.inOut",
              },
              "<"
            )
            .to(
              phoneRef.current,
              {
                opacity: 1,
                duration: 1.2,
              },
              "-=1.6"
            );
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative mt-[200px] min-h-screen bg-black overflow-hidden flex flex-col justify-between items-center pt-[10vh] px-4 md:px-0"
    >
      {/* Particles */}
      {particles.length > 0 && (
        <div className="absolute inset-0 mt-[10vh] pointer-events-none opacity-30 hidden md:block">
          {particles.map((p, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#00E6FC] animate-pulse"
              style={{
                width: p.size,
                height: p.size,
                top: p.top,
                left: p.left,
                animationDelay: p.delay + "s",
                animationDuration: p.duration + "s",
              }}
            />
          ))}
        </div>
      )}

      {/* Phone */}
      <div
        ref={phoneWrapperRef}
        className="
          relative
          w-full
          max-w-[95vw]
          md:max-w-[85vw]
          lg:max-w-[850px]
          aspect-[16/9]
          md:aspect-auto
          md:h-[clamp(420px,60vh,780px)]
          mt-[2vh]
          md:mt-[5vh]
        "
      >
        {/* Screen */}
        <div
          ref={screenRef}
          className="
            absolute
            top-[5%]
            left-[1%]
            w-[98%]
            h-[90%]
            rounded-[2rem]
            md:rounded-[3rem]
            lg:rounded-[4.5rem]
            overflow-hidden
            
            shadow-2xl
          "
        >
          <img
            src={studentWebp}
            alt="content"
            fetchPriority="high"
            loading="eager"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Phone frame */}
        <img
          ref={phoneRef}
          src={phoneImg}
          alt="iPhone Frame"
          className="relative z-10 w-full h-full object-contain pointer-events-none drop-shadow-2xl"
        />
      </div>

      {/* Text */}
      <div className="text-center text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold px-4 sm:px-8 md:px-[10vw] lg:px-[15vw] mt-[3vh] md:mt-[5vh] max-w-[1400px] mx-auto leading-relaxed mb-[50px]">
        Zamonaviy platforma asosida ishlab chiqilgan{" "}
        <span className="text-[#00E6FC] whitespace-nowrap">
          onlayn kurslar
        </span>{" "}
        <span className="block sm:inline">
          talabalariga yuqori sifatli ta’lim va qulay o‘qish muhitini taqdim etadi.
        </span>
      </div>
    </section>
  );
};

export default HeroZoom;