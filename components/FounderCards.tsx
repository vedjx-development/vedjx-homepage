"use client";
import { useState } from "react";

type FounderName = "jake" | "brandon";

export default function FounderCards() {
  const [activeCard, setActiveCard] = useState<FounderName | null>(null);

  const toggleCard = (name: FounderName) => {
    setActiveCard((prev) => (prev === name ? null : name));
  };

  return (
    <div className="relative flex gap-6 flex-col">
      {/* Jake */}
      <div
        className="relative group max-w-xs mx-auto w-full cursor-pointer"
        onClick={() => toggleCard("jake")}
      >
        <img
          src="/profile_Pic.png"
          alt="Jake Shoffner - Founder of Ved.jx"
          className="rounded-2xl shadow-xl w-full border-2 border-[#1a1f2e] block"
        />
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 flex items-end
          ${activeCard === "jake" ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
        >
          <div className="p-4 w-full">
            <p className="text-white font-bold text-lg">Jake Shoffner</p>
            <p className="text-[#0DEFFE] text-sm">Co-Founder</p>
          </div>
        </div>
      </div>

      {/* Brandon */}
      <div
        className="relative group max-w-xs mx-auto w-full cursor-pointer"
        onClick={() => toggleCard("brandon")}
      >
        <img
          src="/brandon_marth.jpg"
          alt="Brandon Marth - Co-Founder of Ved.jx"
          className="rounded-2xl shadow-xl w-full border-2 border-[#1a1f2e] block"
        />
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 flex items-end
          ${activeCard === "brandon" ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
        >
          <div className="p-4 w-full">
            <p className="text-white font-bold text-lg">Brandon Marth</p>
            <p className="text-[#4FADFE] text-sm">Co-Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
}
