import { Injectable, Service, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ErrorService {
  readonly errorMessage = signal<string | null>(null);

  setErrorMessage(msg: string | null): void {
    this.errorMessage.set(msg);
  }

  clearErrorMessage(): void {
    this.errorMessage.set(null);
  }
}
