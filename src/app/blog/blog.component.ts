import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  // portfolioItems = [
  //   { id: 1, title: 'Blog 1', description: 'Read Aishwarya’s insights on why consent education is more critical than ever.”', image: 'assets/img/blog/Blog3.jpg', filter: 'filter-app' },
  //   { id: 2, title: 'Blog 2', description: 'Read Aishwarya’s insights on why consent education is more critical than ever.”', image: 'assets/img/blog/blog2.jpg', filter: 'filter-product' },
  //   { id: 3, title: 'Blog 3', description: 'Read Aishwarya’s insights on why consent education is more critical than ever.”', image: 'assets/img/blog/Blog4.jpg', filter: 'filter-branding' },
  //   // Add more items as needed
  // ];

  portfolioItems : any = []

  constructor() {
    this.portfolioItems = [
      { id: 1, title: 'Blog 1', description: 'Read Aishwarya’s insights on why consent education is more critical than ever.”', image: 'assets/img/blog/Blog3.jpg', filter: 'filter-app' },
      { id: 2, title: 'Blog 2', description: 'Read Aishwarya’s insights on why consent education is more critical than ever.”', image: 'assets/img/blog/blog2.jpg', filter: 'filter-product' },
      { id: 3, title: 'Blog 3', description: 'Read Aishwarya’s insights on why consent education is more critical than ever.”', image: 'assets/img/blog/Blog4.jpg', filter: 'filter-branding' },
      // Add more items as needed
    ];
  }
}
