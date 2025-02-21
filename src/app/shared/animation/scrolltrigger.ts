// animations.ts
import { ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export function scrollTriggeredAnimation(elements: ElementRef[]): void {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: elements[0].nativeElement,
      start: 'top 95%',
      end: 'top 30%',
      scrub: true,
    },
  });

  elements.forEach((element, index) => {
    const startPercentage = 95 - index * 5; // Decrease start percentage by 5% for each element
    tl.fromTo(
      element.nativeElement,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element.nativeElement,
          start: `top ${startPercentage}%`,
          end: 'top 30%',
          scrub: true,
        },
      }
    );
  });
}
