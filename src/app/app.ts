import { Component, signal } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { trigger, transition, style, animate, query, group } from '@angular/animations';

// BAWD v2 — App shell. Every route change plays the flipbook push: the old
// colour card slides out left while the new one slides in from the right,
// using the 2014 signature easing. The splash participates in the same
// choreography (slides out to reveal home) — no hard cuts anywhere.

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: [
    trigger('routeAnimations', [
      transition('* => *', [
        group([
          query(
            ':leave',
            [
              style({ position: 'absolute', inset: 0, transform: 'translateX(0)', opacity: 1 }),
              animate(
                '380ms cubic-bezier(0.4, 0, 1, 1)',
                style({ transform: 'translateX(-14%)', opacity: 0 })
              )
            ],
            { optional: true }
          ),
          query(
            ':enter',
            [
              style({
                position: 'absolute',
                inset: '0',
                transform: 'translateX(100%)',
                opacity: 0.4
              }),
              animate(
                '520ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                style({ transform: 'translateX(0)', opacity: 1 })
              )
            ],
            { optional: true }
          )
        ])
      ])
    ])
  ]
})
export class App {
  protected readonly title = signal('BAWD — Build a Web Doctor');

  getRouteState(outlet: RouterOutlet) {
    return outlet.activatedRouteData?.['animation'] ?? 'page';
  }
}
