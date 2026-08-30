import { Component, AfterViewInit, ElementRef, input, viewChild } from '@angular/core';

// BAWD v2 — StrokeLogo
// Replaces lazylinepainter + raphael (2014) with native SVG stroke-dashoffset
// animation via the Web Animations API. Path data ported verbatim from the
// original main.js pathObj (28 hand-authored strokes, durations 200/1000ms).
// Original painted the logo then redirected to /#/home after 200ms.

@Component({
  selector: 'app-stroke-logo',
  template: `
    <div class="stroke-logo" #host>
      <svg #svg
           [attr.width]="width()"
           [attr.height]="height()"
           viewBox="0 0 699 324"
           fill="none"
           xmlns="http://www.w3.org/2000/svg">
        @for (stroke of strokes; track $index) {
          <path [attr.d]="stroke.path"
                stroke="#aaffff"
                [attr.stroke-width]="strokeWidth"
                stroke-linecap="round"
                fill="none" />
        }
      </svg>
    </div>
  `,
  styles: [`
    .stroke-logo {
      position: fixed;
      left: 50%; top: 50%;
      transform: translate(-50%, -50%);
      z-index: 5;
    }
    path { opacity: 0; }
  `]
})
export class StrokeLogo implements AfterViewInit {
  readonly width = input<number>(699);
  readonly height = input<number>(324);
  readonly strokeWidth = 3;
  readonly host = viewChild<ElementRef<HTMLDivElement>>('host');
  readonly svg = viewChild<ElementRef<SVGSVGElement>>('svg');

  protected strokes: { path: string; duration: number }[] = [];
  private done = false;

  async ngAfterViewInit() {
    const res = await fetch('logo-paths.json');
    const data = await res.json();
    this.strokes = data.fase1.strokepath;
    // Force CD to render paths, then animate after a tick.
    requestAnimationFrame(() => requestAnimationFrame(() => this.paint()));
  }

  private paint() {
    const svgEl = this.svg()?.nativeElement;
    if (!svgEl) return;
    const paths = Array.from(svgEl.querySelectorAll('path')) as SVGPathElement[];
    if (paths.length === 0) return;

    // Normalise dash math per-path via pathLength
    paths.forEach((p) => p.setAttribute('pathLength', '1000'));
    paths.forEach((p) => {
      p.style.strokeDasharray = '1000';
      p.style.strokeDashoffset = '1000';
      p.style.opacity = '1';
    });

    let cumulative = 0;
    const anims = paths.map((p, i) => {
      const dur = (this.strokes[i]?.duration ?? 200) * 0.4; // 2014 ran slow; tighten
      const start = cumulative;
      cumulative += dur * 0.85;
      return { el: p, dur, start };
    });

    const total = cumulative;
    anims.forEach(({ el, dur, start }) => {
      el.animate(
        [
          { strokeDashoffset: '1000' },
          { strokeDashoffset: '0' }
        ],
        {
          duration: dur,
          delay: start,
          easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          fill: 'both'
        }
      ).onfinish = () => {
        el.style.strokeDashoffset = '0';
      };
    });

    this.done = true;
    setTimeout(() => this.onComplete(), total + 300);
  }

  onComplete = () => { /* overridden by parent via output binding */ };
}
