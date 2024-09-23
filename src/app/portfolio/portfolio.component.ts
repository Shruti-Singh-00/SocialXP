import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';  // Add this lin
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  portfolioItems = [
    { id: 1, title: 'App 1', description: 'Lorem ipsum, dolor sit', image: 'assets/img/masonry-portfolio/masonry-portfolio-1.jpg', filter: 'filter-app' },
    { id: 2, title: 'Product 1', description: 'Lorem ipsum, dolor sit', image: 'assets/img/masonry-portfolio/masonry-portfolio-2.jpg', filter: 'filter-product' },
    { id: 3, title: 'Branding 1', description: 'Lorem ipsum, dolor sit', image: 'assets/img/masonry-portfolio/masonry-portfolio-3.jpg', filter: 'filter-branding' },
    // Add more items as needed
  ];
}
