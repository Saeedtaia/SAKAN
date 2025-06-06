import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuildDetailsService } from '../../../shared/services/buildings/build-details.service';
import { RemoveBackslashesPipe } from '../../../shared/pipes/remove-backslashes.pipe';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RemoveBackslashesPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  buildingId!: number;
  details!: Detailsbuilding;
  loading: boolean = true;
  safeMapHtml: any;

  constructor(
    private route: ActivatedRoute,
    private builddetails: BuildDetailsService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.buildingId = +this.route.snapshot.paramMap.get('buildId')!;
    this.builddetails.getBuildDetailsById(this.buildingId).subscribe(
      (data) => {
        this.details = data.data;
        this.loading = false; // Stop loading once data is fetched
        if (this.details) {
          this.safeMapHtml = this.sanitizer.bypassSecurityTrustHtml(
            this.details.mapSearchText.replace(/\\/g, '')
          );
        }
      },
      (error) => {
        console.error('Error fetching building details:', error);
        this.loading = false;
      }
    );
  }
}

export interface Detailsbuilding {
  buildingId: number
  name: string
  description: string
  address: string
  mapSearchText: string
  type: string
  villageName: string
}


