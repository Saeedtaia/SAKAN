// loader.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType,
} from '@angular/common/http';
import { Observable, finalize, tap } from 'rxjs';
import { LoaderService } from '../services/loader-service.service';
@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const requestId = this.generateRequestId();
    this.loaderService.startRequest(requestId);

    const clonedRequest = request.clone({ reportProgress: true });

    return next.handle(clonedRequest).pipe(
      tap((event) => {
        this.handleProgressEvent(event, requestId);
      }),
      finalize(() => {
        this.loaderService.completeRequest(requestId);
      })
    );
  }

  private generateRequestId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  private handleProgressEvent(event: HttpEvent<any>, requestId: string) {
    if (event.type === HttpEventType.UploadProgress) {
      const progress = Math.round((event.loaded / (event.total || 1)) * 100);
      this.loaderService.updateProgress(requestId, progress);
    } else if (event.type === HttpEventType.DownloadProgress) {
      const progress = Math.round((event.loaded / (event.total || 1)) * 100);
      this.loaderService.updateProgress(requestId, progress);
    } else if (event.type === HttpEventType.Response) {
      this.loaderService.updateProgress(requestId, 100);
    }
  }
}
