import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Item, ThreedotdropdowenComponent } from "../../shared/components/threedotdropdowen/threedotdropdowen.component";

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [RouterOutlet, ThreedotdropdowenComponent],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent {
  items: Item[] = [
    {
      routeLink: 'employees-list',
      icon: 'list',
      label: 'employees List',
    },
  ];
}
