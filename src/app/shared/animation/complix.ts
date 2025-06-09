import { ElementRef, QueryList } from '@angular/core';
import { gsap } from 'gsap';

// Updated animation function
export function complexAnimationSequence(
  elements: QueryList<ElementRef> | ElementRef[],
  staggerDelay: number = 0.2
): void {
  const elementsArray = elements instanceof QueryList
    ? elements.toArray()
    : elements;

  gsap.from(elementsArray.map(el => el.nativeElement), {
    opacity: 0,
    x: -100,
    y: -100,
    scale: 0.5,
    duration: 1,
    stagger: staggerDelay,
    ease: 'power1.inOut'
  });
}
