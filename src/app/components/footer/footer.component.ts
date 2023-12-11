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
      title: 'Support',
      links: [
        {
          link: '/home',
          label: 'Home'
        },
        {
          link: '/about',
          label: 'About Us'
        },
        {
          link: '/support',
          label: 'Contact'
        },
      ]
    }
  ]

  preventDefault(event: Event) {
    event.preventDefault();
  }
}
