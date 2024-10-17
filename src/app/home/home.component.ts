import { Component} from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AboutComponent } from '../about/about.component';
import { TeamComponent } from '../team/team.component';
import { ContactComponent } from '../contact/contact.component';
import { BlogComponent } from '../blog/blog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, AboutComponent, TeamComponent, ContactComponent, BlogComponent],
  animations: [
    trigger('slideInFromLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),  // Initial position (off-screen left)
        animate('1s ease-out', style({ transform: 'translateX(0)' }))  // Final position (on-screen)
      ])
    ]),
    trigger('slideInFromRight', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }), // Initial position (off-screen to the right)
        animate('1s ease-out', style({ transform: 'translateX(0)' })) // Final position (on-screen)
      ])
    ])
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

  
}