import { Component } from '@angular/core';
import { ThreedotdropdowenComponent } from "../../shared/components/threedotdropdowen/threedotdropdowen.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dormitories',
  standalone: true,
  imports: [ThreedotdropdowenComponent, RouterOutlet],
  templateUrl: './dormitories.component.html',
  styleUrl: './dormitories.component.scss'
})
export class DormitoriesComponent {

}
