import { ElementRef, QueryList } from '@angular/core';
import { gsap } from 'gsap';

export function complexAnimationSequence(
  elements: QueryList<ElementRef> | ElementRef[],
  staggerDelay: number = 0.2
): void {
  // Convert QueryList to array if necessary
  const elementsArray =
    elements instanceof QueryList ? elements.toArray() : elements;

  const masterTimeline = gsap.timeline();

  elementsArray.forEach((elementRef, index) => {
    const element = elementRef.nativeElement;

    masterTimeline.add(
      gsap
        .timeline({
          defaults: { duration: 1, ease: 'power1.inOut' },
          delay: index * staggerDelay, // Add staggered delay
        })
        .fromTo(element, { opacity: 0 }, { opacity: 1 })
        .fromTo(element, { x: -100, y: -100 }, { x: 0, y: 0 }, '<')
        .fromTo(element, { scale: 0.5 }, { scale: 1 }, '<'),
      index * staggerDelay
    );
  });
}
