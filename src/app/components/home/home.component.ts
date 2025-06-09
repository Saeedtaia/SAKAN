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
  DestroyRef
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
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';
import { tap, filter, take } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
    private product: ProductService,
    private translocoService: TranslocoService
  ) { }

  private destroyRef = inject(DestroyRef);
  text: any;

  ngOnInit() {
    this.text = this.translocoService.selectTranslate('students')
      .pipe(tap((value) => value))
      .subscribe();

    setTimeout(() => {
      this.charts = charts;
    }, 1000);
  }

  ngAfterViewInit(): void {
    this.setupAnimations();
  }

  private setupAnimations(): void {
    // Handle immediate counter elements
    if (this.counterElements.length) {
      animateCountNumbers(this.counterElements);
    }

    // Handle deferred content
    if (this.complexDiv.length) {
      this.runComplexAnimation();
    } else {
      this.complexDiv.changes
        .pipe(
          takeUntilDestroyed(this.destroyRef),
          filter((list: QueryList<ElementRef>) => list.length > 0),
          take(1)
        )
        .subscribe(() => {
          this.runComplexAnimation();
          this.handleCounterElements();
        });
    }
  }

  private runComplexAnimation(): void {
    complexAnimationSequence(this.complexDiv, 0.3);
  }

  private handleCounterElements(): void {
    const newCounterElements = this.complexDiv
      .map(div => {
        const el = div.nativeElement.querySelector('.text-blue-950');
        return el ? new ElementRef(el) : null;
      })
      .filter(Boolean) as ElementRef[];

    if (newCounterElements.length) {
      animateCountNumbers(newCounterElements);
    }
  }

  @ViewChildren('counterElement') counterElements!: QueryList<ElementRef>;
  @ViewChildren('complexDiv') complexDiv!: QueryList<ElementRef>;

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

  VerticalBarData: any;
  VerticalBarOptions: any;
  platformId = inject(PLATFORM_ID);
  charts: Charts[] = [];
}
