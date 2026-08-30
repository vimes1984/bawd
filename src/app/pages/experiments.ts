import { Component, AfterViewInit, ElementRef, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EXPERIMENTS } from '../data/site-content';
import { LogoNav } from '../core/logo-nav';

// BAWD v2 — Experiments: the 2014 site had a bare placeholder ("This is the
// experiments view."). v2 gives it one card explaining the rebuild itself.

@Component({
  selector: 'app-experiments',
  imports: [RouterLink, LogoNav],
  template: `
    <section class="pantonebg black">
      <section class="right_side"><p>Build a Web doctor</p></section>
      <div class="centered" #centered>
        <h2>{{ experiments[0].heading }}</h2>
        <h5>{{ experiments[0].sub }}</h5>
        @for (p of experiments[0].body; track $index) {
          <p class="pantone_text">{{ p }}</p>
        }
        <a class="back" routerLink="/home">← back to colours</a>
      </div>
      <app-logo-nav />
    </section>
  `,
  styles: [`
    .pantonebg { position: relative; width: 100%; height: 100%; background: #000; overflow: hidden; }
    .right_side {
      position: fixed; right: 1.5rem; top: 50%;
      transform: translateY(-50%) rotate(90deg);
      transform-origin: center;
      p {
        font-family: 'Old Standard TT', serif;
        font-style: italic; font-size: 1.4rem;
        letter-spacing: 0.15em; white-space: nowrap; color: #fff;
      }
    }
    .centered {
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      height: 100%; text-align: center; padding: 0 12%;
      transform: translateX(3000px);   /* sweep-in start */
    }
    .centered.in { transform: translateX(0); }
    h2 { color: #fff; }
    h5 { color: rgba(255,255,255,0.6); }
    .pantone_text {
      max-width: 560px;
      font-size: 1.15rem; font-weight: 500; line-height: 1.65;
      color: rgba(255,255,255,0.9);
      margin: 0.5rem 0;
    }
    .back {
      margin-top: 1.5rem;
      color: #aaffff;
      border-bottom: 1px solid #aaffff;
      font-size: 0.95rem;
      &:hover { color: #fff; border-color: #fff; }
    }
  `]
})
export class ExperimentsPage implements AfterViewInit {
  readonly experiments = EXPERIMENTS;
  readonly centered = viewChild<ElementRef<HTMLDivElement>>('centered');

  ngAfterViewInit() {
    const el = this.centered()?.nativeElement;
    if (!el) return;
    el.classList.add('in');
    el.animate(
      [{ transform: 'translateX(3000px)' }, { transform: 'translateX(0)' }],
      {
        duration: 900,
        easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        fill: 'both'
      }
    );
  }
}
