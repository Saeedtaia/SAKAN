import { QueryList, ElementRef } from '@angular/core';
import { gsap } from 'gsap';

export function animateCountNumbers(elements: QueryList<ElementRef>): void {
  elements.forEach((el: ElementRef) => {
    // Read the current innerHTML and convert it to a number.
    // If parsing fails, default to 0.
    const targetValue = Number(el.nativeElement.innerHTML) || 0;

    gsap.fromTo(
      el.nativeElement,
      { innerHTML: 0 },
      {
        innerHTML: targetValue,
        delay: 0.5,
        duration: 3,
        ease: 'power1.out',
        snap: { innerHTML: 1 },
        onUpdate: function () {
          // Access 'targets' using bracket notation due to the index signature.
          const target = this['targets']()[0];
          if (target) {
            target.innerHTML = Number(target.innerHTML).toLocaleString();
          }
        },
      }
    );
  });
}
