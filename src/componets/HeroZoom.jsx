import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import phoneImg from "../assets/phone.png";
import studentWebp from "../assets/student.jpg";

gsap.registerPlugin(ScrollTrigger);

const HeroZoom = () => {
  const containerRef = useRef(null);
  const zoomWrapperRef = useRef(null);
  const phoneFrameRef = useRef(null);

  const titleRef = useRef(null);
  const descRef = useRef(null);
  const bottomTextRef = useRef(null);

  useEffect(() => {
    document.body.style.overflowX = "hidden";

    const ctx = gsap.context(() => {
      const screenElement =
        zoomWrapperRef.current?.querySelector(".screen-box");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=80%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.fromTo(
        zoomWrapperRef.current,
        { scale: 1.9 },
        { scale: 1, ease: "none" }
      )

        .fromTo(
          screenElement,
          { borderRadius: "0rem" },
          { borderRadius: "7rem", duration: 0.5, ease: "power2.out" },
          "<"
        )

        .fromTo(
          phoneFrameRef.current,
          { opacity: 0, scale: 1.15 },
          { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" },
          "<"
        )

        /* TEXT DISAPPEAR UP */
        .to(
          titleRef.current,
          {
            y: -80,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          0
        )

        .to(
          descRef.current,
          {
            y: -60,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          0.1
        )

        /* Bottom text appear outside phone */
        .fromTo(
          bottomTextRef.current,
          { opacity: 0, y: 80 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          0.3
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full mt-[100px]   h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      <div
        ref={zoomWrapperRef}
        className="relative w-full max-w-[95vw] md:max-w-[85vw] lg:max-w-[850px] aspect-[16/9] flex items-center justify-center"
      >
        {/* SCREEN */}
        <div className="screen-box absolute top-[5%] left-[1%] w-[98%] h-[90%] overflow-hidden shadow-2xl z-10">

          <img
            src={studentWebp}
            alt="content"
            className="absolute inset-0 w-full h-[92%] mt-[20px] object-cover"
          />

          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(0deg, rgba(14,18,27,0.9) 0%, rgba(14,18,27,0.5) 46.15%, rgba(14,18,27,0) 100%)",
            }}
          />

          {/* TOP TEXT */}
          <div className="relative z-20 flex flex-col items-center justify-center mt-[15px] h-full text-center text-white px-4 max-w-5xl mx-auto">
            <h1
              ref={titleRef}
              className="text-[32px] font-bold leading-[1.1] tracking-tight"
            >
              Zamonaviy kasblarni <br />
              o‘rganishni <span className="text-[#00f2ff]">bugun boshlang</span>
            </h1>

            <p
              ref={descRef}
              className="mt-6 text-[#BCBCBC] text-[10px] max-w-2xl font-normal mx-auto leading-relaxed opacity-80"
            >
              Zamonaviy platforma asosida ishlab chiqilgan onlayn kurslar <br />
              talabalarga yuqori sifatli ta'lim va qulay o‘qish muhitini taqdim etadi.
            </p>
          </div>
        </div>

        {/* PHONE FRAME */}
        <img
          ref={phoneFrameRef}
          src={phoneImg}
          alt="iPhone Frame"
          className="relative z-30 w-full h-full object-contain pointer-events-none"
        />
      </div>

      {/* BOTTOM TEXT OUTSIDE PHONE */}
      <div
        ref={bottomTextRef}
        className="absolute top-[90%] text-center text-white  text-[20px]  opacity-0"
      >
  Zamonaviy platforma asosida ishlab chiqilgan <span className="text-[rgba(0,230,252,1)]">onlayn kurslar</span> talabalarga yuqori <br/> sifatli ta’lim va qulay o‘qish muhitini taqdim etadi.
      </div>
    </section>
  );
};

export default HeroZoom;