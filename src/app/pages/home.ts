import { Component, AfterViewInit, ElementRef, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PAGES } from '../data/site-content';
import { LogoNav } from '../core/logo-nav';

// BAWD v2 — Home: the Pantone chip grid, restored to the 2014 choreography.
// Four colour cards in a 2×2 grid, each carrying the original hand-drawn
// white icon (who are we / services / projects / contact) instead of a
// letter. Entrance is a staggered transform-scale bloom + fade — no
// width/height animation, so nothing reflows and nothing jumps.

const ICONS: Record<string, string> = {
  about: 'assets/icons/whoarewe.svg',
  services: 'assets/icons/services.svg',
  projects: 'assets/icons/projects.svg',
  contact: 'assets/icons/contact.svg',
};

@Component({
  selector: 'app-home',
  imports: [RouterLink, LogoNav],
  template: `
    <section class="pantonebg black">
      <section class="right_side"><p>Build a Web doctor</p></section>

      <div class="chip-grid" #grid>
        @for (p of pages; track p.slug) {
          <a class="chip {{ p.pantone }}" [routerLink]="[p.route]">
            <img [src]="icons[p.slug]" [alt]="p.title" />
          </a>
        }
      </div>

      <div class="tagline">
        <h3>Pick a colour.</h3>
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
    .chip-grid {
      position: absolute; inset: 0;
      display: grid;
      grid-template-columns: repeat(2, 250px);
      grid-template-rows: repeat(2, 250px);
      gap: 2.2rem;
      align-content: center;
      justify-content: center;
    }
    .chip {
      display: flex; align-items: center; justify-content: center;
      /* sharp corners — 2014 design spec, no border radius */
      border: 1px solid rgba(255,255,255,0.22);
      box-shadow: 0 12px 32px rgba(0,0,0,0.35);
      /* hidden start — bloomed class transitions to visible (transform only,
         no layout reflow = no wacky jumping) */
      opacity: 0;
      transform: scale(0.12);
      transition:
        transform 700ms cubic-bezier(0.175,0.885,0.32,1.275),
        opacity 500ms ease;
      &:hover {
        transform: scale(1.05);
        border-color: rgba(255,255,255,0.55);
      }
      img {
        height: 46%;
        width: auto;
        max-width: 68%;
        object-fit: contain;
        filter: drop-shadow(2px 3px 0 rgba(0,0,0,0.3));
      }
      &.bloomed { opacity: 1; transform: scale(1); }
    }
    .blue   { background: #74d2ff; }
    .green  { background: #6fffc7; }
    .red    { background: #ff6969; }
    .yellow { background: #ffd74b; }

    .tagline {
      position: fixed; bottom: 2.5rem;
      width: 100%; text-align: center;
      h3 { color: rgba(255,255,255,0.4); font-size: 2.2rem; }
    }

    @media (max-width: 700px) {
      .chip-grid {
        grid-template-columns: repeat(2, 140px);
        grid-template-rows: repeat(2, 140px);
        gap: 1.1rem;
      }
      .chip img { height: 42%; }
    }
  `]
})
export class HomePage implements AfterViewInit {
  readonly pages = PAGES;
  readonly icons = ICONS;
  readonly grid = viewChild<ElementRef<HTMLDivElement>>('grid');

  ngAfterViewInit() {
    const grid = this.grid()?.nativeElement;
    if (!grid) return;
    const chips = Array.from(grid.querySelectorAll('.chip')) as HTMLElement[];
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    chips.forEach((chip, i) => {
      if (reduce) { chip.classList.add('bloomed'); return; }
      // Staggered bloom: scale 0.12 → 1 with the signature flipbook easing.
      chip.style.transitionDelay = `${150 + i * 140}ms`;
      requestAnimationFrame(() => requestAnimationFrame(() => chip.classList.add('bloomed')));
    });
  }
}
