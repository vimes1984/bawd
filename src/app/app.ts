import { Component, signal } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { Splash } from './core/splash';
import { StrokeLogo } from './core/stroke-logo';

// BAWD v2 — App shell. Route transitions are handled by the router; the
// splash plays on first load, then forwards to /home.

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Splash],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('BAWD — Build a Web Doctor');

  constructor(private router: Router) {}

  onSplashDone() {
    this.router.navigate(['/home']);
  }
}
