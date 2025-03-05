"use client";   
import React from "react";
import { GlareCard } from "@/components/ui/glare-card";

export default function Features() {
  return (
    <div className="py-20 lg:py-20 bg-muted/40">
        <h2 className="text-5xl font-bold text-center text-neutral-900 dark:text-white  mt-4 mb-10">Why choose Notes-Pal ?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <GlareCard
            key={feature.title}
            className="flex flex-col items-center justify-center relative bg-gradient-to-r dark:from-neutral-900 from-primary dark:to-neutral-950 to-secondary p-6 rounded-3xl overflow-hidden "
          >
            <CanvasReveal />
            <p className="text-2xl font-bold text-neutral-800 dark:text-white relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-lg font-normal relative z-20">
              {feature.description}
            </p>
          </GlareCard>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "Notes Sharing Platform",
    description:
      "Share notes easily with a vibrant community of students, ensuring everyone has access to helpful study materials.",
  },
  {
    title: "Real-Time Collaboration",
    description:
      "Collaborate with peers in real-time, providing feedback, asking questions, and improving your understanding of subjects.",
  },
  {
    title: "Personalized Recommendations",
    description:
      "Get personalized study materials and notes suggestions based on your learning preferences and subjects.",
  },
  {
    title: "Upload and Download Notes",
    description:
      "Upload your own notes for others to benefit from, or download notes from other users to enhance your study experience.",
  },
  {
    title: "Custom Tags and Categories",
    description:
      "Organize notes using custom tags and categories, making it easier to find the specific study materials you need.",
  },
  {
    title: "Grade-Based Access",
    description:
      "Access study materials tailored to your academic level, ensuring that the notes are relevant to your syllabus and grades.",
  },
  {
    title: "Searchable Notes Database",
    description:
      "Quickly search through a vast database of notes with advanced filters for more efficient study planning.",
  },
  {
    title: "User Profiles and Ratings",
    description:
      "View user profiles and ratings to find the most reliable and well-reviewed notes shared by the community.",
  },
];

// Canvas reveal effect component
function CanvasReveal() {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <canvas className="absolute top-0 left-0 w-full h-full" />
    </div>
  );
}

// Function to draw the canvas reveal effect
const useCanvasEffect = () => {
  React.useEffect(() => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 100, 0, 2 * Math.PI);
      ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
      ctx.fill();
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
};

export const CanvasEffect = () => {
  useCanvasEffect();
  return <div className="absolute top-0 left-0 w-full h-full pointer-events-none"></div>;
};
