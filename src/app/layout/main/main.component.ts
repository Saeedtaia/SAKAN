import { Component, HostListener, OnInit, signal } from '@angular/core';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet, ContentComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  constructor() {}
  isLeftSidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(window.innerWidth);
  @HostListener('window:resize')
  onResize() {
    this.screenWidth.set(window.innerWidth);
    if (this.screenWidth() < 768) {
      this.isLeftSidebarCollapsed.set(true);
    }
  }

  ngOnInit(): void {
    this.isLeftSidebarCollapsed.set(this.screenWidth() < 768);
    // this.sharedService.isLeftSidebarCollapsed.set(
    //   this.sharedService.screenWidth() < 768
    // );
  }

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
    // this.sharedService.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }
}
