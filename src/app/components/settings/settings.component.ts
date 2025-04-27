import { Component } from '@angular/core';
import { ThreedotdropdowenComponent } from "../../shared/components/threedotdropdowen/threedotdropdowen.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [ThreedotdropdowenComponent, RouterOutlet],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

}
