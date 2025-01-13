import React from "react";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>IT IS TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Smole<span className="text-blue-400">normous</span>{" "}
        </h1>
      </div>

      <p className="text-sm md:text md:text-base font-light">
        Welcome to FitZone, where fitness{" "}
        <span className="text-blue-400 font-medium">meets community</span>. We
        are not just a gym wea are your partner in transformation, offering
        state-of-the-art equipment, expert guidance, and a{" "}
        <span className="text-blue-400 font-medium">
          supportive environment
        </span>{" "}
        that empowers you to reach your peak potential.
      </p>
      <button className="px-8 py-4 rounded-md border-[2px] border-blue-400 border-solid blueShadow duration-200">
        <p>Accept & Begin</p>
      </button>
    </div>
  );
}
