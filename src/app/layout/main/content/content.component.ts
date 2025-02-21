import { NgClass } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ScrollTop } from 'primeng/scrolltop';
@Component({
    selector: 'app-content',
    imports: [RouterOutlet, NgClass, ScrollTopModule, ScrollTop],
    templateUrl: './content.component.html',
    styleUrl: './content.component.scss'
})
export class ContentComponent {
  isLeftSidebarCollapsed = input.required<boolean>();
  screenWidth = input.required<number>();
  sizeClass = computed(() => {
    const isLeftSidebarCollapsed = this.isLeftSidebarCollapsed();
    if (isLeftSidebarCollapsed) {
      return '';
    }
    return this.screenWidth() > 768 ? 'body-trimmed' : 'body-md-screen';
  });
}
