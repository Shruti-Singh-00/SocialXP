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
      { id: 1, title: 'My Bull Case for Why AI Will Enable Unprecedented Human Evolution: Our Summit to Self-Actualization', description: 'How AI Can Help Us Transcend Societal Constructs and Why I’m Building Consent Ed to Pave the Way for a New Kind of Human Connection.', image: 'https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2dc76028-ee07-42c9-8b6e-a03a2f172624_1024x1024.webp', filter: 'filter-app' },
      // { id: 2, title: 'Blog 2', description: 'Read Aishwarya’s insights on why consent education is more critical than ever.”', image: 'assets/img/blog/blog2.jpg', filter: 'filter-product' },
      // { id: 3, title: 'Blog 3', description: 'Read Aishwarya’s insights on why consent education is more critical than ever.”', image: 'assets/img/blog/Blog4.jpg', filter: 'filter-branding' },
      // Add more items as needed
    ];
  }
}