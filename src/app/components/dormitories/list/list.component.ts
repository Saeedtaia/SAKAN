import { Component, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
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
export class ListComponent implements AfterViewInit {
  @ViewChildren('complexDiv') complexDiv!: QueryList<ElementRef>;

  visible: boolean = false;
  form: FormGroup;

  buildingsList: Build[] = [];
  normalBuildings: Build[] = [];
  hotelBuildings: Build[] = [];

  constructor(
    private buildsListService: BuildsListService,
    private fb: FormBuilder,
    private CraetebuildService: CraetebuildService
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

          setTimeout(() => {
            complexAnimationSequence(this.complexDiv, 0.9);
          });
        })
      )
      .subscribe();
  }

  ngAfterViewInit(): void {
    this.complexDiv.changes.subscribe(() => {
      complexAnimationSequence(this.complexDiv, 0.9);
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

      this.CraetebuildService.CreateBuild(formData).subscribe({
        next: (res) => {
          console.log('Building created successfully:', res);
          this.visible = false;

          this.buildingsList.push(res.data);
          this.normalBuildings = this.buildingsList.filter(b => b.type === 'Normal');
          this.hotelBuildings = this.buildingsList.filter(b => b.type !== 'Normal');

          this.form.reset();
        },
        error: (err) => {
          console.error('Error creating building:', err);
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
