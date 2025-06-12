import { ToastService } from './../../../shared/services/toaster/toast.service';
import { Component } from '@angular/core';
import { tap } from 'rxjs';
import Build from '../../../shared/data/building/build';
import { BuildsListService } from '../../../shared/services/buildings/builds-list.service';
import { RouterLink } from '@angular/router';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { CraetebuildService } from '../../../shared/services/buildings/craetebuild.service';
import { complexAnimationSequence } from '../../../shared/animation/complix';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink, Dialog, ButtonModule, InputTextModule, ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  visible: boolean = false;
  form: FormGroup;

  buildingsList: Build[] = [];
  normalBuildings: Build[] = [];
  hotelBuildings: Build[] = [];

  constructor(
    private buildsListService: BuildsListService,
    private fb: FormBuilder,
    private CraetebuildService: CraetebuildService,
    private ToastService: ToastService
  ) {
    this.form = this.fb.group({
      Name: ['', Validators.required],
      Description: ['', Validators.required],
      AddressInDetails: ['', Validators.required],
      MapSearchText: [''],
      Type: [null, [Validators.required, Validators.pattern('^[0-1]+$')]],
      VillageId: [null, [Validators.required, Validators.pattern('^[0-9]+$')]],
    });

    this.buildsListService
      .GatAllBuilds()
      .pipe(
        tap((res) => {
          this.buildingsList = res.data;
          this.normalBuildings = this.buildingsList.filter(b => b.type === 'Normal');
          this.hotelBuildings = this.buildingsList.filter(b => b.type !== 'Normal');


        })
      )
      .subscribe();
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

      this.CraetebuildService.CreateBuild(formData).subscribe({
        next: (res) => {
          console.log('Building created successfully:', res);
          this.visible = false;
          this.ToastService.success("Buildings", res.message);

          this.buildingsList.push(res.data);
          this.normalBuildings = this.buildingsList.filter(b => b.type === 'Normal');
          this.hotelBuildings = this.buildingsList.filter(b => b.type !== 'Normal');

          this.form.reset();
        },
        error: (err) => {
          console.error('Error creating building:', err);
          this.ToastService.error("Buildings", err.message || "An error occurred while creating the building.");
        }
      });
    } else {
      this.form.markAllAsTouched();
      this.visible = true;
    }
  }

  confirmDelete(item: any) {
    this.CraetebuildService.DeleteBuild(item).subscribe({
      next: (res) => {
        console.log('Building deleted successfully:', res);
        this.buildingsList = this.buildingsList.filter(b => b.buildingId !== item);
        this.normalBuildings = this.buildingsList.filter(b => b.type === 'Normal');
        this.hotelBuildings = this.buildingsList.filter(b => b.type !== 'Normal');
      }
    });
  }
}
