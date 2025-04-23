import FloatingIcon from "@/components/FloatingIcon";
import React from "react";

const Hero: React.FC = () => {
    return (
        <section
            className="relative w-full flex items-center justify-center bg-primary text-white px-8 min-h-[80vh] lg:min-h-[75vh] max-h-screen rounded-md bg-herobg bg-center bg-cover bg-no-repeat
"
        >
            <div className="absolute inset-0 bg-primary/80 rounded-md z-20"></div>
            <div className="max-w-4xl z-40 text-center">
                <h1 className="text-3xl sm:text-4xl md:text-[45px] 2xl:text-6xl font-bold leading-tight">
                    Revolutionizing Education in Africa
                </h1>
                <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl 2xl:text-4xl font-semibold text-white/90">
                    An African classroom.{" "}
                    <span className="text-white">Powered by purpose</span>{" "}
                </h2>
                <p className="mt-4 sm:text-lg md:text-xl text-white/80 ">
                    When students learn better, teachers lead better, parents
                    hope stronger—and Africa rises
                </p>

                <button className="mt-6 bg-white text-primary font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition">
                    Get Started with Zelimu
                </button>
            </div>

            <FloatingIcon />
        </section>
    );
};

export default Hero;
