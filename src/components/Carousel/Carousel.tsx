import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/libs/utils";

interface CarouselProps {
  children: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  loop?: boolean;
  className?: string;
}

const Carousel = ({
  children,
  autoPlay = false,
  interval = 3000,
  showArrows = true,
  showDots = true,
  loop = true,
  className,
}: CarouselProps) => {
  const [current, setCurrent] = useState(0);

  const totalSlides = children.length;

  const nextSlide = () => {
    setCurrent((prev) => {
      if (prev === totalSlides - 1) {
        return loop ? 0 : prev;
      }

      return prev + 1;
    });
  };

  const previousSlide = () => {
    setCurrent((prev) => {
      if (prev === 0) {
        return loop ? totalSlides - 1 : prev;
      }

      return prev - 1;
    });
  };

  useEffect(() => {
    if (!autoPlay || totalSlides <= 1) return;

    const timer = setInterval(nextSlide, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, totalSlides]);

  if (!totalSlides) return null;

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl",
        className
      )}
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className="w-full shrink-0"
          >
            {child}
          </div>
        ))}
      </div>

      {/* Previous */}
      {showArrows && (loop || current > 0) && (
        <button
          onClick={previousSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 
                     flex h-10 w-10 items-center justify-center
                     rounded-full bg-black/50 text-white
                     hover:bg-black/70 transition"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {/* Next */}
      {showArrows && (loop || current < totalSlides - 1) && (
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 
                     flex h-10 w-10 items-center justify-center
                     rounded-full bg-black/50 text-white
                     hover:bg-black/70 transition"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      )}

      {/* Dots */}
      {showDots && totalSlides > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition-all",
                current === index
                  ? "w-6 bg-white"
                  : "bg-white/50 hover:bg-white/80"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};

Carousel.displayName = "Carousel";

export { Carousel };