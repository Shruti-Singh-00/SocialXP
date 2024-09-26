import { Component } from '@angular/core';
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
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
