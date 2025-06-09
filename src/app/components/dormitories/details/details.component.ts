import { ToastService } from './../../../shared/services/toaster/toast.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuildDetailsService } from '../../../shared/services/buildings/build-details.service';
import { RemoveBackslashesPipe } from '../../../shared/pipes/remove-backslashes.pipe';
import { DomSanitizer } from '@angular/platform-browser'
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { CraetebuildService } from '../../../shared/services/buildings/craetebuild.service';
import { tap } from 'rxjs';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RemoveBackslashesPipe, Dialog, ButtonModule, InputTextModule, ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  buildingId!: number;
  details!: Detailsbuilding;
  loading: boolean = true;
  safeMapHtml: any;
  visible: boolean = false;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private builddetails: BuildDetailsService,
    private sanitizer: DomSanitizer,
    private fb: FormBuilder,
    private CraetebuildService: CraetebuildService,
    private ToastService: ToastService
  ) {
    this.form = this.fb.group({
      BuildingId: [''],
      Name: ['', Validators.required],
      Description: ['', Validators.required],
      AddressInDetails: ['', Validators.required],
      MapSearchText: ['',],
      Type: [null, [Validators.required, Validators.pattern('^[0-1]+$')]],
      VillageId: [null, [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }

  showDialog() {
    this.visible = true;
  }
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = new FormData();
      for (const key in this.form.value) {
        formData.append(key, this.form.value[key]);
      }

      this.CraetebuildService.UpdateBuild(formData).subscribe({
        next: (res) => {
          this.ToastService.success('Success', 'Building details updated successfully');
          this.visible = false; // Close the dialog on success
          console.log(res);

        }
      })
    } else {
      this.form.markAllAsTouched();
    }
  }

  ngOnInit(): void {
    this.buildingId = +this.route.snapshot.paramMap.get('buildId')!;

    this.builddetails.getBuildDetailsById(this.buildingId).pipe(
      tap({
        next: (data) => {
          this.details = data.data;

          if (this.details) {
            this.safeMapHtml = this.sanitizer.bypassSecurityTrustHtml(
              this.details.mapSearchText.replace(/\\/g, '')
            );

            // 🔽 Populate form with building data
            this.form.patchValue({
              BuildingId: this.details.buildingId,
              Name: this.details.name,
              Description: this.details.description,
              AddressInDetails: this.details.address,
              MapSearchText: this.details.mapSearchText,
              Type: this.details.type === 'Normal' ? 0 : 1, // Optional: depending on your backend
              VillageId: this.details.villageName // You might need to adjust this if it's an ID, not name
            });
          }

          this.loading = false;
        },
        error: (error) => {
          console.error('Error fetching building details:', error);
          this.loading = false;
        }
      })
    ).subscribe();
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


