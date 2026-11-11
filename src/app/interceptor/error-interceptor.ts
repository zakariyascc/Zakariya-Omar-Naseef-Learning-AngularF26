import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ErrorService } from '../services/error-service';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const errorService = inject(ErrorService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {

      let message = 'Something went wrong.';

      if (error.status === 0) {
        message = 'Please check your internet connection.';
      }
      else if (error.status === 404) {
        message = 'The requested information was not found.';
      }
      else if (error.status >= 500) {
        message = 'Server error. Please try again later.';
      }
      else {
        message = 'Error: ' + error.message;
      }

      errorService.setErrorMessage(message);

      return throwError(() => error);

    })
  );
};
