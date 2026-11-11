import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GuardService } from './services/guard';
import { LoadingService } from './services/loading-service';

@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected title: string = 'Weather App';
  protected guardService = inject(GuardService);

  protected toggleGuard(): void {
    this.guardService.toggleGuard();
  }

  protected loadingService = inject(LoadingService);
}
