import { Component, signal, computed, AfterViewInit, ElementRef, viewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwatchPage } from '../data/site-content';
import { LogoNav } from '../core/logo-nav';

// BAWD v2 — SwatchPageComponent: ONE component renders every Pantone section.
// The 2014 site had 33 near-dup templates (about_patone_one..five,
// services_pantone_*, projects_pantone_*) — v2 collapses them into this
// component + the content model, keyed by route data. Prev/next arrow
// navigation ported from the pantone-menu directive (prevpro/nextpro).

@Component({
  selector: 'app-swatch-page',
  imports: [LogoNav],
  template: `
    <section class="pantonebg {{ page().pantone }}">
      <section class="right_side"><p>Build a Web doctor</p></section>

      <div class="arrowswrap">
        <div class="arrws prev" (click)="prev()" aria-label="Previous card">‹</div>
        <div class="arrws next" (click)="next()" aria-label="Next card">›</div>
      </div>

      <div class="centered" #centered>
        @if (currentCard(); as card) {
          <h2>{{ card.step || page().kicker }}</h2>
          <h5>{{ card.heading }}</h5>
          @if (card.sub) { <h6 class="card-sub">{{ card.sub }}</h6> }
          @for (p of card.body; track $index) {
            <p class="pantone_text">{{ p }}</p>
          }
        }
      </div>

      <app-logo-nav />
    </section>
  `,
  styles: [`
    .pantonebg { position: relative; width: 100%; height: 100%; overflow: hidden; }
    .blue   { background: #74d2ff; }
    .green  { background: #6fffc7; }
    .red    { background: #ff6969; }
    .yellow { background: #ffd74b; }
    .black  { background: #000; }

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
      height: 100%; text-align: center;
      padding: 0 12%;
      transform: translateX(3000px);   /* sweep-in start (2014 signature) */
    }
    .centered.in { transform: translateX(0); }
    h2 { color: rgba(0,0,0,0.75); }
    h5 { color: rgba(0,0,0,0.7); }
    .card-sub { color: rgba(0,0,0,0.55); margin-bottom: 0.75rem; }
    .pantone_text {
      max-width: 560px;
      font-size: 1.15rem; font-weight: 500; line-height: 1.65;
      color: rgba(0,0,0,0.85);
      margin: 0.5rem 0;
    }

    .arrowswrap {
      position: fixed; bottom: 2rem;
      left: 50%; transform: translateX(-50%);
      display: flex; gap: 1rem; z-index: 5;
    }
    .arrws {
      width: 44px; height: 44px;
      display: flex; align-items: center; justify-content: center;
      border: 2px solid rgba(0,0,0,0.5);
      border-radius: 50%;
      font-size: 1.6rem; line-height: 1;
      color: rgba(0,0,0,0.7);
      cursor: pointer;
      transition: all 200ms cubic-bezier(0.175,0.885,0.32,1.275);
      user-select: none;
      &:hover { background: #fff; border-color: #fff; }
    }
  `]
})
export class SwatchPageComponent implements AfterViewInit {
  protected readonly page = computed<SwatchPage>(() => this.route.snapshot.data['page']);
  protected readonly idx = signal(0);
  readonly centered = viewChild<ElementRef<HTMLDivElement>>('centered');

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit() {
    // Sweep the content in from 3000px — the 2014 signature move.
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

  protected readonly currentCard = computed(() => {
    const cards = this.page().cards;
    return cards[this.idx() % cards.length];
  });

  prev() {
    const n = this.page().cards.length;
    this.idx.update((i) => (i - 1 + n) % n);
  }
  next() {
    this.idx.update((i) => (i + 1) % this.page().cards.length);
  }
}
