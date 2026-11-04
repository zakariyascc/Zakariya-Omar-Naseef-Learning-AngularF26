import {Injectable, signal } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class GuardService {
  guardEnabled = signal(true);

  toggleGuard(): void {
    this.guardEnabled.update(enabled => !enabled);
  }
}


