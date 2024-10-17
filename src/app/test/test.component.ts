import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements AfterViewInit {

  // ViewChildren to access the divs
  @ViewChild('leftDiv', { static: true }) leftDiv!: ElementRef;
  @ViewChild('rightDiv', { static: true }) rightDiv!: ElementRef;

  ngAfterViewInit(): void {
    // Set up the IntersectionObserver
    const options = { threshold: 0.1 }; // Trigger when 10% of the div is visible

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const target = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          // Apply animations based on the div's class
          if (target.classList.contains('slide-left')) {
            target.classList.add('animate-left');
          } else if (target.classList.contains('slide-right')) {
            target.classList.add('animate-right');
          }
        }
      });
    }, options);

    // Observe both left and right divs
    observer.observe(this.leftDiv.nativeElement);
    observer.observe(this.rightDiv.nativeElement);
  }
}