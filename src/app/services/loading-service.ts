import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private count = signal<number>(0);

  readonly isLoading = computed(() => this.count() > 0);

  increment() {
    this.count.update((count) => count + 1);
  }
  decrement() {
    this.count.update((count) => Math.max(0, (count - 1)));
  }
}
