import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuildDetailsService } from '../../../shared/services/buildings/build-details.service';
import { RemoveBackslashesPipe } from '../../../shared/pipes/remove-backslashes.pipe';

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
  constructor(private route: ActivatedRoute, private builddetails: BuildDetailsService) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.buildingId = +this.route.snapshot.paramMap.get('buildId')!;
    this.builddetails.getBuildDetailsById(this.buildingId).subscribe(
      (data) => {
        this.details = data.data; // Store the details for use in the template
      },
      (error) => { console.error('Error fetching building details:', error); }
    );

    // You can now use this.buildingId to fetch data, etc.
    console.log('Building ID:', this.buildingId);
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
