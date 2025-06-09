import { ElementRef, QueryList } from '@angular/core';
import { gsap } from 'gsap';

export function complexAnimationSequence(
  elements: QueryList<ElementRef> | ElementRef[],
  staggerDelay: number = 0.2
): void {
  // Convert to native elements array
  const elementsArray = elements instanceof QueryList ?
    elements.toArray().map(el => el.nativeElement) :
    elements.map(el => el.nativeElement);

  gsap.from(elementsArray, {
    duration: 1,
    ease: 'power1.inOut',
    opacity: 0,
    x: -100,
    y: -100,
    scale: 0.5,
    stagger: staggerDelay,
    overwrite: 'auto'
  });
}