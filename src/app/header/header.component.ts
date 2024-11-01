import { Component, AfterViewInit, ElementRef, Renderer2, inject } from '@angular/core';
import { DarkModeService } from '../services/dark-mode.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // Use Renderer2 to access the elements
    const hamburger = this.el.nativeElement.querySelector('#hamburger') as HTMLElement;
    const navLinks = this.el.nativeElement.querySelector('.nav-links') as HTMLElement;

    if (hamburger && navLinks) {
      this.renderer.listen(hamburger, 'click', () => {
        // Toggle the class using Renderer2
        if (navLinks.classList.contains('active')) {
          this.renderer.removeClass(navLinks, 'active');
        } else {
          this.renderer.addClass(navLinks, 'active');
        }
      });
    }
  }

  navDark:any = "navDark";
  navToggle: boolean= false;
  darkModeService: DarkModeService = inject(DarkModeService);
  toggleDarkMode(){
    this.darkModeService.updateDarkMode();
    this.navDark = 'null';
    this.navToggle = true;
  }
}
