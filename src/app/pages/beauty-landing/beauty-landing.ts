import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beauty-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './beauty-landing.html',
  styleUrl: './beauty-landing.scss'
})
export class BeautyLanding {
 

pillars = [
  {
    number: '01',
    title: 'Beauty',
    imageClass: 'beauty-bg',
    image: '/asset/images/pretty.webp',
    text: 'Beauty is the practice of honoring both your inner essence and outer expression. Through personal style, presence, self-image, skincare, confidence, and self-respect, beauty becomes a conscious way of showing up in the world.'
  },
  {
    number: '02',
    title: 'Wellness',
    imageClass: 'wellness-bg',
    image: '/asset/images/wellness.avif',
    text: 'Wellness creates the foundation for beauty to flourish. It supports the body, mind, heart, and emotions through practices that encourage balance, vitality, calm, and self-trust.'
  },
  {
    number: '03',
    title: 'Consciousness',
    imageClass: 'consciousness-bg',
    image: '/asset/images/download.jpg',
    text: 'Consciousness is the connection to the deeper self. Through meditation, reflection, intuition, and spiritual awareness, individuals learn to live from clarity, purpose, and inner wisdom.'
  }
];
 activePillarIndex = 0;

setActivePillar(index: number): void {
  this.activePillarIndex = index;
}

getPillarPosition(index: number): string {
  if (index === this.activePillarIndex) {
    return 'active';
  }

  const previousIndex =
    (this.activePillarIndex - 1 + this.pillars.length) % this.pillars.length;

  const nextIndex =
    (this.activePillarIndex + 1) % this.pillars.length;

  if (index === previousIndex) {
    return 'previous';
  }

  if (index === nextIndex) {
    return 'next';
  }

  return 'hidden';
}
}