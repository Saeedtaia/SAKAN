import { Component } from '@angular/core';
import { tap } from 'rxjs';
import Build from '../../../shared/data/building/build';
import { BuildsListService } from '../../../shared/services/buildings/builds-list.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  buildingsList: Build[] = [];

  normalBuildings: Build[] = [];
  hotelBuildings: Build[] = [];

  constructor(private buildsListService: BuildsListService) {
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
}
