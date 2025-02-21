import { Component, effect, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageModule } from 'primeng/image';
import { AvatarModule } from 'primeng/avatar';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [ImageModule, AvatarModule],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.scss',
})
export class StudentDetailsComponent {
  private route = inject(ActivatedRoute);
  paramValue: string | null = '';
  constructor() {
    effect(() => {
      this.paramValue = this.route.snapshot.paramMap.get('StudentId');
      console.log('Route Param:', this.paramValue);
    });
  }
}
