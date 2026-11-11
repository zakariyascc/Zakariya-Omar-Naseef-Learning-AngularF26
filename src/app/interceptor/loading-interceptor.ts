import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingService } from '../services/loading-service';
import { Observable } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  loadingService.increment();

  return new Observable(observer => {
    const status = next(req).subscribe({
      next: (value) => {
        observer.next(value);
      },
      error: (err) => {
        loadingService.decrement();
        observer.error(err);
      },
      complete: () => {
        loadingService.decrement();
        observer.complete();
      }
    });
    return () => {
      status.unsubscribe();
    }
  });

};
