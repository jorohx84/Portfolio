import { Injectable } from '@angular/core';
import { ElementRef } from '@angular/core';


@Injectable({
  providedIn: 'root'  
})

export class VisibilityService {
  private scrollListener?: () => void;
  constructor() { }

  checkVisibility(elementRef: ElementRef): boolean {
    const rect = elementRef.nativeElement.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const triggerpoint = viewportHeight * 0.5;

    return rect.top < triggerpoint;
  }

  addScrollListener(elementRef: ElementRef, callback: (isVisible: boolean) => void): void {
    this.scrollListener = () => {
      const isVisible = this.checkVisibility(elementRef);
      callback(isVisible);
    };

    window.addEventListener('scroll', this.scrollListener);
    window.addEventListener('resize', this.scrollListener);


    callback(this.checkVisibility(elementRef));
  }

  removeScrollListener(): void {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
      window.removeEventListener('resize', this.scrollListener);
    }
  }


}