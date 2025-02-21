import { MatProgressBarModule } from '@angular/material/progress-bar';
// loader.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderService } from '../../services/loader-service.service';

@Component({
    imports: [CommonModule, MatProgressBarModule],
    selector: 'app-loader',
    template: `
    <div class="loader-container" [class.active]="isLoading$ | async">
      <div class="fixed top-0 z-10 w-full">
        <mat-progress-bar mode="query"></mat-progress-bar>
      </div>
      <div class="loader-content">
        <div class="progress-bar">
          <div class="progress" [style.width.%]="progress$ | async"></div>
        </div>
        <p class="status-text">Loading...</p>
      </div>
    </div>
  `,
    styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  get isLoading$() {
    return this.loaderService.loading$;
  }
  get progress$() {
    return this.loaderService.progress$;
  }

  constructor(private loaderService: LoaderService) {}
}
