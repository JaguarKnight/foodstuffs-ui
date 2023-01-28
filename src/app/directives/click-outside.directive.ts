import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

//https://plainenglish.io/blog/creating-an-angular-directive-to-detect-clicking-outside-an-object-afd6c07212ef
@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {

  constructor(private readonly elementRef: ElementRef) { }

  @Output()
  public clickOutside = new EventEmitter<MouseEvent>();

  @HostListener('document:click', ['$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) {
      return;
    }

    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit(event);
    }
  }
}
