import { Component, Input } from '@angular/core'; // FIXED
import { BreadcrumbMenuComponent } from "../breadcrumb/breadcrumb.component";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LoaderService } from '../../services/loader-service.service';

@Component({
  selector: 'app-threedotdropdowen',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    BreadcrumbMenuComponent,
  ],
  templateUrl: './threedotdropdowen.component.html',
  styleUrl: './threedotdropdowen.component.scss'
})
export class ThreedotdropdowenComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor(private loader: LoaderService) { }

  ngOnInit(): void {
    // this.loader.show();
  }

  @Input() items!: Item[];
}

export interface Item {
  routeLink: string;
  icon: string;
  label: string;
}
