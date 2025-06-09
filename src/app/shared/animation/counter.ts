import { QueryList, ElementRef } from '@angular/core';

// counter.ts
export function animateCountNumbers(elements: ElementRef[] | QueryList<ElementRef>): void {
  (Array.isArray(elements) ? elements : elements.toArray()).forEach((elementRef) => {
    const element = elementRef.nativeElement;
    const targetValue = parseInt(element.textContent, 10);
    let currentValue = 0;

    const duration = 4500;
    const increment = targetValue / (duration / 16);

    const updateCounter = () => {
      currentValue += increment;
      if (currentValue < targetValue) {
        element.textContent = Math.ceil(currentValue).toLocaleString();
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = targetValue.toLocaleString();
      }
    };

    requestAnimationFrame(updateCounter);
  });
}
