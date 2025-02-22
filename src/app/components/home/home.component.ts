import { LoaderService } from './../../shared/services/loader-service.service';
import {
  AfterViewInit,
  ChangeDetectorRef,
  PLATFORM_ID,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
  inject,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { scrollTriggeredAnimation } from '../../shared/animation/scrolltrigger';
import { complexAnimationSequence } from '../../shared/animation/complix';
import { animateCountNumbers } from '../../shared/animation/counter';
import { isPlatformBrowser } from '@angular/common';
import { Charts } from '../../shared/interfaces/charts';
import { TooltipItem } from 'chart.js';
import { ChartModule } from 'primeng/chart';
import { ProductService } from '../../shared/services/teast.service';
import { AnimateOnScroll } from 'primeng/animateonscroll';
import { charts } from '../../shared/samples/charts/charts';
import { TranslocoPipe } from '@ngneat/transloco';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, ChartModule, AnimateOnScroll, TranslocoPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit, OnInit {
  constructor(
    private cd: ChangeDetectorRef,
    private loader: LoaderService,
    private product: ProductService
  ) {}
  ngOnInit() {
    setTimeout(() => {
      this.charts = charts;
    }, 1000);
    // this.connectWebSocket();
    this.cd.markForCheck();
  }
  // test() {
  //   this.startLongProcess();
  //   this.loader.show();
  //   this.product.getProducts(1, 10).subscribe({
  //     next: (data) => {
  //       console.log(data);
  //       this.loader.hide();
  //     },
  //   });
  // }
  // startLongProcess() {
  //   const requestId = 'longProcess';
  //   this.loader.startRequest(requestId);

  //   let progress = 0;
  //   const interval = setInterval(() => {
  //     progress += 10;
  //     this.loader.updateProgress(requestId, progress);

  //     if (progress >= 100) {
  //       clearInterval(interval);
  //       this.loader.completeRequest(requestId);
  //     }
  //   }, 500);
  // }

  //animation
  ngAfterViewInit(): void {
    animateCountNumbers(this.counterElements);
    complexAnimationSequence(this.complexDiv, 0.3);
    // const elements = this.scrollDivs.toArray();
    // scrollTriggeredAnimation(elements);
  }

  //#region animation attr
  @ViewChildren('counterElement') counterElements!: QueryList<ElementRef>;
  @ViewChildren('complexDiv') complexDiv!: QueryList<ElementRef>;
  // @ViewChildren('scrollDiv') scrollDivs!: QueryList<ElementRef>;
  //#endregion

  //#region upper numerical data
  TotalStudents = [
    {
      lable: 'students',
      value: 3202,
      icon: 'text-2xl fal fa-users',
      coin: 'student',
    },
    {
      lable: 'totalApplications',
      value: 4222,
      icon: 'text-2xl fal fa-map',
      coin: 'application',
    },
    {
      lable: 'totalDormitories',
      value: 13,
      icon: 'text-2xl fal fa-home',
      coin: 'dormitory',
    },
  ];
  //#endregion

  //#region charts
  VerticalBarData: any;
  VerticalBarOptions: any;
  platformId = inject(PLATFORM_ID);
  charts: Charts[] = [];

  //#endregion
}
