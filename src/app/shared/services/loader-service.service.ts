// loader.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoaderService {
  private loadingCount = 0;
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$: Observable<boolean> = this.loadingSubject.asObservable();

  show() {
    this.loadingCount++;
    if (this.loadingCount === 1) {
      this.loadingSubject.next(true);
    }
  }
  private progressSubject = new BehaviorSubject<number>(0);
  public progress$ = this.progressSubject.asObservable();

  setProgress(progress: number) {
    this.progressSubject.next(Math.min(100, Math.max(0, progress)));
  }

  hide() {
    this.loadingCount = Math.max(0, this.loadingCount - 1);
    if (this.loadingCount === 0) {
      this.loadingSubject.next(false);
    }
  }

  private requests = new Map<string, number>();

  startRequest(id: string) {
    this.requests.set(id, 0);
    this.loadingCount++;
    this.loadingSubject.next(true);
  }

  updateProgress(id: string, progress: number) {
    if (this.requests.has(id)) {
      this.requests.set(id, progress);
      this.calculateTotalProgress();
    }
  }

  completeRequest(id: string) {
    this.requests.delete(id);
    this.loadingCount = Math.max(0, this.loadingCount - 1);
    this.calculateTotalProgress();

    if (this.loadingCount === 0) {
      this.loadingSubject.next(false);
    }
  }

  private calculateTotalProgress() {
    const progresses = Array.from(this.requests.values());
    const total = progresses.reduce((sum, p) => sum + p, 0);
    const average = progresses.length > 0 ? total / progresses.length : 0;
    this.progressSubject.next(average);
  }
}
