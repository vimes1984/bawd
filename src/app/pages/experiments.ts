import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EXPERIMENTS } from '../data/site-content';
import { LogoNav } from '../core/logo-nav';

// BAWD v2 — Experiments: the 2014 site had a bare placeholder ("This is the
// experiments view."). v2 makes it the lab notebook — what actually runs on
// the homelab that serves this site. Motion comes from the route transition.

@Component({
  selector: 'app-experiments',
  imports: [RouterLink, LogoNav],
  template: `
    <section class="pantonebg black">
      <section class="right_side"><p>Build a Web doctor</p></section>
      <div class="scroll">
        <div class="centered">
          <h2>Lab experiments</h2>
          <h5>the homelab behind this site</h5>
          @for (card of experiments; track $index) {
            <article class="lab-card">
              @if (card.step) { <h6 class="step">{{ card.step }}</h6> }
              <h3>{{ card.heading }}</h3>
              @if (card.sub) { <p class="sub">{{ card.sub }}</p> }
              @for (p of card.body; track $index) {
                <p class="pantone_text">{{ p }}</p>
              }
            </article>
          }
          <a class="back" routerLink="/home">← back to colours</a>
        </div>
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
    .scroll {
      position: absolute; inset: 0;
      overflow-y: auto;                    /* lab notebook scrolls */
      padding: 6vh 6vw;
    }
    .centered {
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      min-height: 100%; text-align: center;
    }
    h2 { color: #fff; }
    h5 { color: rgba(255,255,255,0.6); margin-bottom: 1.5rem; }
    .lab-card {
      max-width: 640px;
      margin: 0 auto 2.2rem;
      padding: 1.6rem 2rem 1.4rem;
      border: 1px solid rgba(170,255,255,0.28);
      border-radius: 3px;
      background: rgba(255,255,255,0.04);
      .step {
        font-size: 0.85rem; letter-spacing: 0.18em;
        text-transform: uppercase; color: #aaffff; margin-bottom: 0.4rem;
      }
      h3 {
        font-family: 'Old Standard TT', serif;
        font-style: italic; font-size: 2rem; color: #fff; margin-bottom: 0.3rem;
      }
      .sub { color: rgba(255,255,255,0.55); font-size: 0.95rem; margin-bottom: 0.8rem; }
      .pantone_text {
        font-size: 1.05rem; font-weight: 500; line-height: 1.6;
        color: rgba(255,255,255,0.88);
        margin: 0.4rem 0;
      }
    }
    .back {
      margin: 0.5rem 0 1.5rem;
      color: #aaffff;
      border-bottom: 1px solid #aaffff;
      font-size: 0.95rem;
      &:hover { color: #fff; border-color: #fff; }
    }
  `]
})
export class ExperimentsPage {
  readonly experiments = EXPERIMENTS;
}
