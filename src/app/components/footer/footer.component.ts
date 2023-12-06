// footer.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() logo: string;
  // @Input() groups: { title: string; links: { label: string }[] }[];
  // Define social icons with their corresponding classes and sizes
  socialIcons = [
    { class: 'fab fa-twitter', size: '1.5rem' },
    { class: 'fab fa-youtube', size: '1.5rem' },
    { class: 'fab fa-instagram', size: '1.5rem' },
  ];

  groups = [
    {
      title: 'About Us',
      links: [
        {
          link: '/features',
          label: 'Features'
        },
        {
          link: '/pricing',
          label: 'Pricing'
        },
        {
          link: '/support',
          label: 'Support'
        },
        {
          link: '/forum',
          label: 'Forum'
        },
      ]
    }
  ]

  preventDefault(event: Event) {
    event.preventDefault();
  }
}
