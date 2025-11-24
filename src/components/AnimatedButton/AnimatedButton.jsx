"use client";

import { useRouter } from "next/navigation";

export default function AnimatedButton({
  text = "Click Me",
  href = "#",
  gradient = "from-purple-500 via-pink-500 to-yellow-400",
  bgColor = "bg-[#251FAC]",
  className = "",
}) {
  const router = useRouter();

  return (
    <div className={`relative group w-max ${className}`}>
      <button
        onClick={() => router.push(href)}
        className={`cursor-pointer relative overflow-hidden
                    ${bgColor} text-[15px] md:text-[18px]
                   text-white px-12 py-4 
                   rounded-[39px] font-bold transition`}
      >
        <span
          className={`absolute left-1/2 bottom-0 w-[350px] h-[350px] 
                      rounded-full bg-gradient-to-r ${gradient}
                      translate-y-full group-hover:translate-y-1/2
                      transition-all duration-700 ease-initial-out
                      -translate-x-1/2 z-0`}
        ></span>

        <span className="relative z-10">{text}</span>
      </button>
    </div>
  );
}
