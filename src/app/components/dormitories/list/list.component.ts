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
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink, Dialog, ButtonModule, InputTextModule, ReactiveFormsModule, NgClass, NgIf,],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  constructor(private buildsListService: BuildsListService, private fb: FormBuilder, private CraetebuildService: CraetebuildService,) {
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
    this.form = this.fb.group({
      Name: ['', Validators.required],
      Description: ['', Validators.required],
      AddressInDetails: ['', Validators.required],
      MapSearchText: ['',],
      Type: [null, [Validators.required, Validators.pattern('^[0-1]+$')]],
      VillageId: [null, [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }
  visible: boolean = false;
  form: FormGroup;


  showDialog() {
    this.visible = true;
  }
  buildingsList: Build[] = [];

  normalBuildings: Build[] = [];
  hotelBuildings: Build[] = [];

  //#region create dialog

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

          this.buildingsList.push(res.data);

          // Recalculate both lists
          this.normalBuildings = this.buildingsList.filter(b => b.type === 'Normal');
          this.hotelBuildings = this.buildingsList.filter(b => b.type !== 'Normal');

          this.form.reset(); // optional: reset form after submission
        },
        error: (err) => {
          console.error('Error creating building:', err);
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

  //#endregion
  //#region confirmation dialog
  confirmDelete(item: any) {
    this.CraetebuildService.DeleteBuild(item).subscribe({
      next: (res) => {
        console.log('Building deleted successfully:', res);
        this.buildingsList = this.buildingsList.filter(b => b.buildingId !== item);
        // Recalculate both lists
        this.normalBuildings = this.buildingsList.filter(b => b.type === 'Normal');
        this.hotelBuildings = this.buildingsList.filter(b => b.type !== 'Normal');
      }
    })
  }
  //#endregion

}
