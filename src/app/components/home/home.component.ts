import { LoaderService } from '../../shared/services/loader-service.service';
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
import { complexAnimationSequence } from '../../shared/animation/complix';
import { animateCountNumbers } from '../../shared/animation/counter';
import { isPlatformBrowser } from '@angular/common';
import { Charts } from '../../shared/interfaces/charts';
import { TooltipItem } from 'chart.js';
import { ChartModule } from 'primeng/chart';
import { ProductService } from '../../shared/services/teast.service';
import { AnimateOnScroll } from 'primeng/animateonscroll';
import { TranslocoPipe } from '@ngneat/transloco';
@Component({
  selector: 'app-home',
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
      this.charts = [
        //bar chart Student Admission Statistics
        {
          type: 'bar',
          data: {
            labels: [
              'B F C A I',
              'B F E B S',
              'B F E B',
              'B F M B S',
              'B C P T',
              'B F o S',
              'B F A',
              'B F o C',
              'B F o L',
              'B F P E',
            ],
            datasets: [
              {
                label: 'Total Students Fill the Application',
                backgroundColor: '#020617',
                borderColor: '#020617',
                data: [1122, 559, 810, 420, 560, 550, 400, 811, 903, 1000],
              },
              {
                label: 'Total Students accepted',
                backgroundColor: '#28a745',
                borderColor: '#28a745',
                data: [618, 320, 540, 210, 286, 270, 290, 602, 704, 654],
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
              legend: {
                display: true,
                position: 'top',
                labels: {
                  color: '#475569', // Slate-500 color
                  font: {
                    size: 14,
                    weight: 'bold',
                  },
                  boxWidth: 12,
                  boxHeight: 12,
                },
              },
              title: {
                display: true,
                text: 'Student Admission Statistics',
                font: {
                  size: 18,
                  weight: 'bold',
                },
                color: '#1e293b', // Slate-800 color
                padding: { top: 10, bottom: 20 },
              },
              subtitle: {
                display: true,
                text: 'Comparison of Applications vs Accepted Students',
                font: {
                  size: 14,
                  style: 'italic',
                },
                color: '#64748b', // Slate-400 color
                padding: { bottom: 10 },
              },
              tooltip: {
                enabled: true,
                backgroundColor: 'rgba(30, 41, 59, 0.9)', // Slate-800 with transparency
                titleFont: { size: 14, weight: 'bold' },
                bodyFont: { size: 12 },
                padding: 10,
                cornerRadius: 5,
              },
            },
            scales: {
              x: {
                ticks: {
                  color: '#475569', // Slate-500 color
                  font: {
                    size: 13,
                    weight: 500,
                  },
                },
                grid: {
                  color: 'rgba(71, 85, 105, 0.2)', // Faint grid lines
                  drawBorder: false,
                  borderDash: [5, 5], // Dashed grid lines
                },
              },
              y: {
                beginAtZero: true,
                ticks: {
                  color: '#475569',
                  font: {
                    size: 13,
                  },
                  stepSize: 100, // Adjust for better scaling
                },
                grid: {
                  color: 'rgba(71, 85, 105, 0.2)',
                  drawBorder: false,
                  borderDash: [5, 5],
                },
              },
            },
            animation: {
              duration: 3000, // Smooth transition on load
              easing: 'easeOutBounce',
            },
            elements: {
              bar: {
                borderRadius: 6, // Rounded bars
                hoverBackgroundColor: '#334155', // Darker slate on hover
                hoverBorderWidth: 2,
              },
            },
          },
          pAnimateOnScroll: true,
          enterClass: 'animate-fadeinleft',
          leaveClass: 'animate-fadeoutleft',
        },
        {
          pAnimateOnScroll: true,
          enterClass: 'animate-fadeinright',
          leaveClass: 'animate-fadeoutright',
          type: 'line',
          data: {
            labels: [
              'B F C A I',
              'B F E B S',
              'B F E B',
              'B F M B S',
              'B C P T',
              'B F o S',
              'B F A',
              'B F o C',
              'B F o L',
              'B F P E',
            ],
            datasets: [
              {
                label: 'Total Students Fill the Application',
                backgroundColor: '#020617',
                borderColor: '#020617',
                data: [1122, 559, 810, 420, 560, 550, 400, 811, 903, 1000],
              },
              {
                label: 'Total Students accepted',
                backgroundColor: '#28a745',
                borderColor: '#28a745',
                data: [618, 320, 540, 210, 286, 270, 290, 602, 704, 654],
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
              legend: {
                display: true,
                position: 'top',
                labels: {
                  color: '#475569', // Slate-500 color
                  font: {
                    size: 14,
                    weight: 'bold',
                  },
                  boxWidth: 12,
                  boxHeight: 12,
                },
              },
              title: {
                display: true,
                text: 'Student Admission Trends Over Time',
                font: {
                  size: 18,
                  weight: 'bold',
                },
                color: '#1e293b', // Slate-800 color
                padding: { top: 10, bottom: 20 },
              },
              subtitle: {
                display: true,
                text: 'Comparison of Applications vs Accepted Students (Monthly)',
                font: {
                  size: 14,
                  style: 'italic',
                },
                color: '#64748b', // Slate-400 color
                padding: { bottom: 10 },
              },
              tooltip: {
                enabled: true,
                backgroundColor: 'rgba(30, 41, 59, 0.9)', // Slate-800 with transparency
                titleFont: { size: 14, weight: 'bold' },
                bodyFont: { size: 12 },
                padding: 10,
                cornerRadius: 5,
                callbacks: {
                  label: function (context: TooltipItem<'line'>) {
                    return ` ${context.dataset.label}: ${context.raw}`;
                  },
                },
              },
            },
            scales: {
              x: {
                ticks: {
                  color: '#475569', // Slate-500 color
                  font: {
                    size: 13,
                    weight: 500,
                  },
                },
                grid: {
                  color: 'rgba(71, 85, 105, 0.2)', // Faint grid lines
                  drawBorder: false,
                  borderDash: [5, 5], // Dashed grid lines
                },
              },
              y: {
                beginAtZero: true,
                ticks: {
                  color: '#475569',
                  font: {
                    size: 13,
                  },
                  stepSize: 100, // Adjust for better scaling
                },
                grid: {
                  color: 'rgba(71, 85, 105, 0.2)',
                  drawBorder: false,
                  borderDash: [5, 5],
                },
              },
            },
            elements: {
              line: {
                tension: 0.4, // Smooth line curve
                borderWidth: 3,
                fill: false, // Enables background fill effect
              },
              point: {
                radius: 5, // Point size
                hitRadius: 10, // Hover effect area
                hoverRadius: 7,
                backgroundColor: '#ffffff',
                borderWidth: 2,
              },
            },
            animation: {
              duration: 3000, // Smooth transition on load
              easing: 'easeOutBounce',
            },
          },
        },
        {
          type: 'pie',
          data: {
            labels: [
              'B F C A I',
              'B F E B S',
              'B F E B',
              'B F M B S',
              'B C P T',
              'B F o S',
              'B F A',
              'B F o C',
              'B F o L',
              'B F P E',
            ],
            datasets: [
              {
                label: 'Total Students Fill the Application',
                backgroundColor: [
                  '#3B82F6', // Blue-500
                  '#10B981', // Emerald-500
                  '#F59E0B', // Amber-500
                  '#EF4444', // Red-500
                  '#8B5CF6', // Violet-500
                  '#EC4899', // Pink-500
                  '#14B8A6', // Teal-500
                  '#F43F5E', // Rose-500
                  '#22C55E', // Green-500
                  '#EAB308', // Yellow-500
                ],
                borderColor: '#ffffff', // White border for better separation
                borderWidth: 2,
                data: [1122, 559, 810, 420, 560, 550, 400, 811, 903, 1000],
                hoverOffset: 10, // Makes the hovered section stand out
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
              legend: {
                display: true,
                position: 'bottom', // Moves legend to right for better layout
                labels: {
                  color: '#334155', // Slate-600
                  font: {
                    size: 14,
                    weight: 'bold',
                  },
                  boxWidth: 16,
                  boxHeight: 16,
                  padding: 15,
                },
              },
              title: {
                display: true,
                text: 'Student Admission Distribution',
                font: {
                  size: 18,
                  weight: 'bold',
                },
                color: '#1E293B', // Slate-800
                padding: { top: 10, bottom: 20 },
              },
              tooltip: {
                enabled: true,
                backgroundColor: 'rgba(30, 41, 59, 0.9)', // Dark Slate-800 with opacity
                titleFont: { size: 14, weight: 'bold' },
                bodyFont: { size: 12 },
                padding: 12,
                cornerRadius: 6,
                callbacks: {
                  label: (context: TooltipItem<'pie'>) => {
                    const value = context.raw as number; // Ensure it's a number
                    const total = context.dataset.data.reduce(
                      (sum, val) => sum + (typeof val === 'number' ? val : 0),
                      0
                    );
                    const percentage = ((value / total) * 100).toFixed(1) + '%';
                    return ` ${context.label}: ${value} (${percentage})`;
                  },
                },
              },
            },
            animation: {
              duration: 3200, // Smooth fade-in animation
              easing: 'easeOutBounce',
            },
          },
        },
        {
          type: 'bar',
          data: {
            labels: [
              'B F C A I',
              'B F E B S',
              'B F E B',
              'B F M B S',
              'B C P T',
              'B F o S',
              'B F A',
              'B F o C',
              'B F o L',
              'B F P E',
            ],
            datasets: [
              {
                type: 'bar',
                label: 'Students in first Academic year',
                backgroundColor: '#3B82F6',
                data: [250, 150, 120, 80, 90, 90, 104, 136, 145, 195],
              },
              {
                type: 'bar',
                label: 'Students in second Academic year',
                backgroundColor: '#10B981',
                data: [140, 85, 240, 70, 37, 222, 360, 122, 196, 203],
              },
              {
                type: 'bar',
                label: 'Students in third Academic year',
                backgroundColor: '#F59E0B',
                data: [310, 55, 245, 74, 50, 210, 340, 164, 211, 102],
              },
              {
                type: 'bar',
                label: 'Students in fourth Academic year',
                backgroundColor: '#EF4444',
                data: [222, 110, 105, 79, 78, 210, 320, 201, 100, 203],
              },
              {
                type: 'bar',
                label: 'Students in fifth Academic year',
                backgroundColor: '#8B5CF6',
                data: [0, 85, 115, 120, 122, 0, 0, 0, 0, 0],
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            animation: {
              duration: 3200, // Smooth fade-in animation
              easing: 'easeOutBounce',
            },
            plugins: {
              legend: {
                display: true,
                position: 'top', // Moves legend to right for better layout
                labels: {
                  color: '#334155', // Slate-600
                  font: {
                    size: 14,
                    weight: 'bold',
                  },
                  boxWidth: 16,
                  boxHeight: 16,
                  padding: 15,
                },
              },
              title: {
                display: true,
                text: 'Every students in every academic year',
                color: '#1E293B', // Dark blue-gray for better contrast
                font: {
                  size: 18,
                  weight: 'bold',
                },
                padding: { top: 10, bottom: 20 },
              },
              layout: {
                padding: {
                  left: 20,
                  right: 20,
                  top: 10,
                  bottom: 10,
                },
              },
              subtitle: {
                display: false,
                text: 'Category-wise comparison of stacked data',
                font: {
                  size: 14,
                  style: 'italic',
                },
                color: '#64748B', // Slate-400 color
                padding: { bottom: 10 },
              },
            },
          },
        },
        {
          type: 'doughnut',
          data: {
            labels: [
              'BFC A I',
              'BFE B S',
              'BFE B',
              'BFM B S',
              'BCP T',
              'BFo S',
              'BFA',
              'BFoC',
              'BFoL',
              'BFPE',
              'Tokh',
              'Benha',
            ],
            datasets: [
              {
                backgroundColor: [
                  '#3B82F6', // Blue-500
                  '#10B981', // Emerald-500
                  '#F59E0B', // Amber-500
                  '#EF4444', // Red-500
                  '#8B5CF6', // Violet-500
                  '#EC4899', // Pink-500
                  '#14B8A6', // Teal-500
                  '#F43F5E', // Rose-500
                  '#22C55E', // Green-500
                  '#EAB308', // Yellow-500
                  '#0891b2', //cyn-500
                  '#71717a', //zinc-500
                ],
                borderColor: '#ffffff', // White border for better separation
                borderWidth: 2,
                data: [122, 66, 81, 120, 68, 85, 80, 81, 90, 100, 136, 156],
                hoverOffset: 10, // Makes the hovered section stand out
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            cutout: '50%', // Adjusting the cutout size for better visibility
            plugins: {
              legend: {
                display: true,
                position: 'top',
                labels: {
                  color: '#475569', // Slate-500 color
                  font: {
                    size: 14,
                    weight: 'bold',
                  },
                  boxWidth: 12,
                  boxHeight: 12,
                  padding: 15,
                },
              },
              title: {
                display: true,
                text: 'Every Dromatory Students',
                font: {
                  size: 18,
                  weight: 'bold',
                },
                color: '#1e293b', // Slate-800 color
                padding: { top: 10, bottom: 20 },
              },
              subtitle: {
                display: false,
                text: '',
                font: {
                  size: 14,
                  style: 'italic',
                },
                color: '#64748b', // Slate-400 color
                padding: { bottom: 10 },
              },
              tooltip: {
                enabled: true,
                backgroundColor: 'rgba(30, 41, 59, 0.9)', // Slate-800 with transparency
                titleFont: { size: 14, weight: 'bold' },
                bodyFont: { size: 12 },
                padding: 10,
                cornerRadius: 5,
                callbacks: {
                  label: function (tooltipItem: any) {
                    let value = tooltipItem.raw;
                    return ` ${tooltipItem.label}: ${value} students`;
                  },
                },
              },
            },
            animation: {
              duration: 3200, // Smooth transition on load
            },
          },
        },
        {
          type: 'bar',
          data: {
            labels: [
              'Benha',
              'Tokh',
              'Moshtohr',
              'Shobra',
              'Qalube',
              'Qaha',
              'shbeen',
            ],
            datasets: [
              {
                type: 'bar',
                label: 'Fish',
                backgroundColor: '#3B82F6',
                data: [50, 25, 12, 48, 90, 76, 42],
              },
              {
                type: 'bar',
                label: 'Tomato',
                backgroundColor: '#EF4444',
                data: [21, 84, 24, 75, 37, 65, 34],
              },
              {
                type: 'bar',
                label: 'Vegs',
                backgroundColor: '#8B5CF6',
                data: [41, 52, 24, 74, 23, 21, 32],
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
              tooltip: {
                enabled: true,
                backgroundColor: 'rgba(30, 41, 59, 0.9)', // Slate-800 with transparency
                titleFont: { size: 14, weight: 'bold' },
                bodyFont: { size: 12 },
                padding: 10,
                cornerRadius: 5,
                callbacks: {
                  label: function (context: TooltipItem<'bar'>) {
                    return ` ${context.dataset.label}: ${context.raw}`;
                  },
                },
              },
              title: {
                display: true,
                text: 'Quantity of Food',
                font: {
                  size: 18,
                  weight: 'bold',
                },
                color: '#1e293b', // Slate-800 color
                padding: { top: 10, bottom: 20 },
              },
              subtitle: {
                display: true,
                text: 'Available Quantity of Food Items In every Dromatory',
                font: {
                  size: 14,
                  style: 'italic',
                },
                color: '#64748b', // Slate-400 color
                padding: { bottom: 10 },
              },
              legend: {
                display: true,
                position: 'top',
                labels: {
                  color: '#475569', // Slate-500 color
                  font: {
                    size: 14,
                    weight: 'bold',
                  },
                  boxWidth: 12,
                  boxHeight: 12,
                },
              },
            },
            scales: {
              x: {
                stacked: true,
                ticks: {
                  color: '#475569',
                  font: {
                    size: 13,
                    weight: 500,
                  },
                },
                grid: {
                  color: 'rgba(71, 85, 105, 0.2)',
                  drawBorder: false,
                },
              },
              y: {
                stacked: true,
                ticks: {
                  color: '#475569',
                  font: {
                    size: 13,
                  },
                },
                grid: {
                  color: 'rgba(71, 85, 105, 0.2)',
                  drawBorder: false,
                },
              },
            },
            animation: {
              duration: 3000, // Smooth transition on load
              easing: 'easeOutBounce',
            },
            elements: {
              bar: {
                borderRadius: 6, // Rounded bars
                hoverBackgroundColor: '#334155', // Darker slate on hover
                hoverBorderWidth: 2,
              },
            },
          },
        },
      ];
    }, 1000);
    // this.connectWebSocket();
    this.VerticalBar();
  }
  test() {
    this.startLongProcess();
    this.product.getProducts(1, 10).subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }
  startLongProcess() {
    const requestId = 'longProcess';
    this.loader.startRequest(requestId);

    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      this.loader.updateProgress(requestId, progress);

      if (progress >= 100) {
        clearInterval(interval);
        this.loader.completeRequest(requestId);
      }
    }, 500);
  }

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
      lable: 'Total accepted Students',
      value: 3202,
      icon: 'text-2xl fal fa-users',
      coin: 'Student',
    },
    {
      lable: 'Total Applications',
      value: 4222,
      icon: 'text-2xl fal fa-map',
      coin: 'Application',
    },
    {
      lable: 'Total Avilable Dromatries',
      value: 13,
      icon: 'text-2xl fal fa-home',
      coin: 'Dromatry',
    },
  ];
  //#endregion

  //#region charts
  VerticalBarData: any;
  VerticalBarOptions: any;
  platformId = inject(PLATFORM_ID);
  charts: Charts[] = [];
  VerticalBar() {
    if (isPlatformBrowser(this.platformId)) {
    }

    this.cd.markForCheck();
  }
  //#endregion
}
